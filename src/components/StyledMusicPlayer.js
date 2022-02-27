import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  View,
  Button,
  TouchableOpacity,
  ImagePropTypes,
  Touchable,
  ImageBackground,
  ScaledSize,
  Animated,
} from "react-native";
import { Dimensions } from "react-native";
import AppLoading from "expo-app-loading";

import React, { useState, useReducer } from "react";
import ViewContainer from "../components/ViewContainer";
import TextBanner from "../components/TextBanner";
import AppConstants from "../AppConstants";
import { FlatList } from "react-native-gesture-handler";
import Banner from "../components/Banner2";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import { Audio } from "expo-av";

import Slider from "@react-native-community/slider";

const OPACITY_STATE = {
  PLAY: 0.5,
  PAUSE: 1,
};

const songOpacityReducer = (state, action) => {
  const copy = Object.entries(state).map(([key, value]) => ({
    [key]: OPACITY_STATE.PAUSE,
  }));

  copy[action.type] = action.payload;
  return copy;
};

export default class StyledMusicPlayer extends React.Component {
  state = {
    currentTimeStamp: "0.00",
    MaxTimeStamp: "0.00",
    sliderRef: React.createRef(),
    userIsSliding: false,
    userCanSlide: false,
    isNexting: false,
    flatListRef: null,
    isPlaying: false,
    playbackInstance: null,
    currentIndex: 0,
    volume: 1.0,
    changingVolume: false,
    isBuffering: false,
    opacities: Object.assign(
      {},
      ...this.props.playlist.map((x) => ({ [x.name]: OPACITY_STATE.PAUSE }))
    ),
    trackInstance: null,
    progressValue: 0,
  };

  constructor(props) {
    super(props);
  }

  onPlayPause_dispatchSideEffects = (isPlaying) => {
    const { opacities } = this.state;
    const songName = this.props.playlist[this.state.currentIndex].name;
    const opacityLevel = isPlaying ? OPACITY_STATE.PLAY : OPACITY_STATE.PAUSE;
    const newOpacities = songOpacityReducer(opacities, {
      type: songName,
      payload: opacityLevel,
    });
    this.state.flatListRef.scrollToIndex({
      animated: true,
      index: this.state.currentIndex,
    });
    this.setState({ opacities: newOpacities });
  };

  async changeVolume(newVolumeLevel) {
    if (this.state.changingVolume) return;
    this.setState({ changingVolume: true });
    return this.state.playbackInstance
      .setVolumeAsync(newVolumeLevel)
      .then(() => this.setState({ changingVolume: false }));
  }

  async loadAudio() {
    const { currentIndex, isPlaying, volume } = this.state;
    window.statusCheckCount = 0;
    try {
      const playbackInstance = new Audio.Sound();
      const source = {
        uri: this.props.playlist[currentIndex].track.uri,
      };

      const status = {
        shouldPlay: isPlaying,
        volume,
      };

      playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate);
      const trackInstance = await playbackInstance.loadAsync(
        source,
        status,
        false
      );
      this.setState({ playbackInstance });
      this.setState({ trackInstance });
      return trackInstance;
    } catch (e) {
      console.log(e);
    }
  }

  onPlaybackStatusUpdate = (status) => {
    this.setState({
      isBuffering: status.isBuffering,
    });

    if (status.didJustFinish) {
      const { currentIndex } = this.state;
      if (currentIndex === this.props.playlist.length - 1) {
        this.handlePlayPause();
        return;
      }
      this.handleNextTrack();
    } else if (status.isPlaying && !this.state.userIsSliding) {
      window.statusCheckCount++;
      // if (window.statusCheckCount % 10 === 0) {
      //   console.log("playing", status.positionMillis / status.durationMillis);
      // }
      const currentMinute = Math.floor(status.positionMillis / (60 * 1000));
      const currentSecond = Math.floor(status.positionMillis / 1000);
      const currentZeroPad = currentSecond < 10 ? "0" : "";
      const maxMinute = Math.round(status.durationMillis / (60 * 1000));
      const maxSecond = Math.floor(status.durationMillis / 1000) % 60;
      const maxZeroPad = maxSecond < 10 ? "0" : "";

      this.setState({
        progressValue: status.positionMillis / status.durationMillis,
        currentTimeStamp: `${currentMinute}.${currentZeroPad}${currentSecond}`,
        MaxTimeStamp: `${maxMinute}.${maxZeroPad}${maxSecond}`,
      });
    }
  };

  handleSongButton = async (songName) => {
    console.log("song button", songName);
    console.log(this.props.playlist[this.state.currentIndex]);
    const { currentIndex } = this.state;
    if (songName === this.props.playlist[this.state.currentIndex].name) {
      console.log("try to pause", songName);
      await this.handlePlayPause();
    } else {
      var songIndex = this.props.playlist.findIndex((x) => x.name === songName);
      if (songIndex === -1) {
        console.warn("ERROR: SONG NOT FOUND: 103");
      }
      try {
        if (songIndex === -1) {
          songIndex = 0;
        }
        let { playbackInstance } = this.state;
        if (playbackInstance) {
          await playbackInstance.unloadAsync();

          this.setState({
            currentIndex: songIndex,
          });
          this.setState({
            isPlaying: true,
          });
          this.loadAudio();
        }
        this.onPlayPause_dispatchSideEffects(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  handleSlidePlay = async (fractionSlid) => {
    const { isPlaying, playbackInstance } = this.state;
    const trackInstance = await this.state.playbackInstance.getStatusAsync();
    if (isPlaying) {
      await playbackInstance.playFromPositionAsync(
        fractionSlid * trackInstance.durationMillis
      );
    }
  };

  handlePlayPause = async () => {
    const { isPlaying, playbackInstance } = this.state;
    const trackInstance = isPlaying
      ? await playbackInstance.pauseAsync()
      : await playbackInstance.playAsync();

    this.setState({ trackInstance });
    this.setState({ userCanSlide: !this.state.userCanSlide });
    this.onPlayPause_dispatchSideEffects(!isPlaying);

    this.setState({
      isPlaying: !isPlaying,
    });
  };

  handlePreviousTrack = async () => {
    let { playbackInstance, currentIndex, isPlaying } = this.state;

    const songTime = await playbackInstance.getStatusAsync();
    if (songTime.positionMillis > 1000) {
      await playbackInstance.playFromPositionAsync(0);
      return;
    }
    if (!isPlaying && currentIndex === 0) {
      await this.handlePlayPause();
    } else if (currentIndex === 0) {
      return;
    } else if (playbackInstance) {
      await playbackInstance.unloadAsync();
      currentIndex > 0 ? (currentIndex -= 1) : (currentIndex = 0);
      this.setState({
        currentIndex,
      });

      this.setState({
        isPlaying: true,
      });

      this.loadAudio();
    }
    this.onPlayPause_dispatchSideEffects(true);
  };

  handleNextTrack = async () => {
    let { playbackInstance, currentIndex, isPlaying } = this.state;

    if (this.state.isNexting) {
      return;
    } else if (!isPlaying && currentIndex === 0) {
      await this.handlePlayPause();
    } else if (playbackInstance) {
      this.state.isNexting = true;
      await playbackInstance.unloadAsync();
      currentIndex < this.props.playlist.length - 1
        ? (currentIndex += 1)
        : (currentIndex = 0);
      this.setState({
        currentIndex,
      });

      this.setState({
        isPlaying: true,
      });

      this.loadAudio();
    }
    this.onPlayPause_dispatchSideEffects(true);
    this.state.isNexting = false;
  };

  async componentWillUnmount() {
    console.log("unmount music");
  }

  async componentDidMount() {
    console.log("mount music");

    // this._unsubscribe = this.props.navigation.addListener('focus', () => {this.state.playbackInstance.unloadAsync(); console.log("a")});
    // const initialOpacityState = this.props.playlist.map((element) => {
    //     var dict = {}; dict[element.name] = OPACITY_STATE.PAUSE; return dict
    // });

    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid: true,
        staysActiveInBackground: false,
        playThroughEarpieceAndroid: true,
      });
      await this.loadAudio();
      this.handlePlayPause();
      document.body.onkeyup = (e) =>
        e.keyCode === 32 ? this.handlePlayPause() : null;
    } catch (err) {
      console.log(err);
    }
  }

  async componentWillUnmount() {
    await this.state.playbackInstance.unloadAsync();
  }

  render() {
    return (
      <ViewContainer color="clear" height="54.5454545%" width="50%" nudge>
        <ViewContainer
          height="17%"
          width={AppConstants.themeTitleBoxSize[this.props.themeName]}
        >
          <TextBanner
            borderColor={AppConstants.themeColors[this.props.themeName].border}
            backgroundColor={
              AppConstants.themeColors[this.props.themeName].background
            }
            fontColor={AppConstants.themeColors[this.props.themeName].text}
            noBottom
            height="100%"
            width="100%"
            borderWidth={this.props.bannerBorderWidth}
            fontSize={
              this.props.themeName === AppConstants.themes.Cloudy
                ? this.props.cloudTitleFontSize
                : this.props.subtitleFontSize
            }
            lineHeight={
              this.props.themeName === AppConstants.themes.Cloudy
                ? this.props.cloudLineHeight
                : this.props.subtitleLineHeight
            }
          >
            {this.props.themeTitle}
          </TextBanner>
        </ViewContainer>
        <Banner
          borderColor={AppConstants.themeColors[this.props.themeName].border}
          backgroundColor={
            AppConstants.themeColors[this.props.themeName].background
          }
          height="69%"
          width="100%"
          borderWidth={this.props.bannerBorderWidth}
          bottomCorners
          // noBackground
        >
          <FlatList
            ref={(ref) => {
              this.state.flatListRef = ref;
            }}
            vertical
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            keyExtractor={(track) => track.name}
            data={this.props.playlist}
            renderItem={({ item }) => {
              return (
                <Banner
                  height="100%"
                  width="100%"
                  corners
                  noBorder
                  noBackground
                >
                  <TouchableOpacity
                    onPress={() => {
                      this.handleSongButton(item.name);
                    }}
                  >
                    <View style={{ opacity: this.state.opacities[item.name] }}>
                      <AutoScrollingScrollView
                        item={item}
                        fontStyle={this.props.fontStyle}
                        subtitleFontSize={this.props.subtitleFontSize}
                        subtitleLineHeight={this.props.subtitleLineHeight}
                      />
                      <ScrollView>
                        <View>
                          <Text
                            style={
                              this.props.fontStyle(
                                this.props.titleFontSize,
                                this.props.titleLineHeight,
                                "center",
                                0,
                                "PressStart2P_400Regular"
                              ).style
                            }
                          >
                            --------------
                          </Text>
                        </View>
                      </ScrollView>
                    </View>
                  </TouchableOpacity>
                </Banner>
              );
            }}
          ></FlatList>
        </Banner>
        {/* ProgressBar */}
        <ViewContainer color="clear" height="13%" width="100%">
          <Banner
            noTop
            borderColor={AppConstants.themeColors[this.props.themeName].border}
            backgroundColor={
              AppConstants.themeColors[this.props.themeName].background
            }
            fontColor={AppConstants.themeColors[this.props.themeName].text}
            height="100%"
            width="100%"
            borderWidth={this.props.bannerBorderWidth}
            fontSize={this.props.entryFontSize}
            lineHeight={this.props.entryLineHeight}
            corners
          >
            <View style={{ width: "10%", height: "100%" }}>
              <TextBanner
                fontColor={AppConstants.themeColors[this.props.themeName].text}
                height="100%"
                width="100%"
                fontSize={this.props.timeStampFontSize}
                noBorders
              >
                {this.state.currentTimeStamp}
              </TextBanner>
            </View>
            <View style={{ width: "80%", height: "100%" }}>
              <Slider
                ref={this.state.sliderRef}
                style={{ width: "100%", alignSelf: "center" }}
                minimumValue={0}
                maximumValue={1}
                minimumTrackTintColor={
                  AppConstants.themeColors[this.props.themeName].border
                }
                maximumTrackTintColor="#000000"
                thumbTintColor={
                  AppConstants.themeColors[this.props.themeName].border
                }
                value={this.state.progressValue}
                onSlidingComplete={(value) => {
                  if (this.state.userCanSlide) {
                    this.setState({ progressValue: value });
                    this.handleSlidePlay(value).then(() => {
                      this.setState({ userIsSliding: false });
                    });
                  } else {
                    this.state.sliderRef.current.updateValue(
                      this.state.progressValue
                    );
                    this.setState({ userIsSliding: false });
                  }
                }}
                onSlidingStart={() => {
                  this.setState({ userIsSliding: true });
                }}
                tapToSeek={true}
              />
            </View>
            <View style={{ width: "10%", height: "100%" }}>
              <TextBanner
                fontColor={AppConstants.themeColors[this.props.themeName].text}
                height="100%"
                width="100%"
                fontSize={this.props.timeStampFontSize}
                noBorders
              >
                {this.state.MaxTimeStamp}
              </TextBanner>
            </View>
          </Banner>
        </ViewContainer>
        <ViewContainer color="clear" height="13%" width="100%">
          <TextBanner
            noTop
            borderColor={AppConstants.themeColors[this.props.themeName].border}
            backgroundColor={
              AppConstants.themeColors[this.props.themeName].background
            }
            fontColor={AppConstants.themeColors[this.props.themeName].text}
            height="100%"
            width="100%"
            borderWidth={this.props.bannerBorderWidth}
            fontSize={this.props.entryFontSize}
            lineHeight={this.props.entryLineHeight}
          >
            <View style={{ position: "absolute", left: 11 }}>
              <BackButton
                size={this.props.titleFontSize}
                color={AppConstants.themeColors[this.props.themeName].border}
                onPress={() => {
                  this.props.themeType === "Mood"
                    ? this.props.navigation.replace("MatchMyMood")
                    : this.props.navigation.replace("TakeMeSomewhere");
                }}
              />
            </View>

            <SkipBackButton
              onPress={this.handlePreviousTrack}
              size={this.props.titleFontSize}
              color={AppConstants.themeColors[this.props.themeName].border}
            />

            <Text> </Text>

            <PlayPauseButton
              isPlaying={this.state.isPlaying}
              onPress={this.handlePlayPause}
              size={this.props.titleFontSize}
              color={AppConstants.themeColors[this.props.themeName].border}
            />

            <Text> </Text>

            <SkipForwardButton
              onPress={this.handleNextTrack}
              size={this.props.titleFontSize}
              color={AppConstants.themeColors[this.props.themeName].border}
            />

            <Text> </Text>

            <Text>
              <View
                style={{
                  position: "absolute",
                  // backgroundColor: "salmon",
                  height: "100%",
                  width: "18%",
                }}
              >
                <Slider
                  style={{ width: "100%", height: "100%" }}
                  minimumValue={0}
                  maximumValue={1}
                  value={1}
                  minimumTrackTintColor={
                    AppConstants.themeColors[this.props.themeName].border
                  }
                  maximumTrackTintColor="#000000"
                  thumbTintColor={
                    AppConstants.themeColors[this.props.themeName].border
                  }
                  onValueChange={(value) => {
                    this.changeVolume(value);
                  }}
                  tapToSeek={true}
                />
              </View>
            </Text>

            <View style={{ position: "absolute", right: 11 }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.replace("Home");
                }}
              >
                <Entypo
                  name="home"
                  size={this.props.titleFontSize}
                  color={AppConstants.themeColors[this.props.themeName].border}
                />
              </TouchableOpacity>
            </View>
          </TextBanner>
        </ViewContainer>
      </ViewContainer>
    );
  }
}

function BackButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Entypo name="back" size={props.size} color={props.color} />
    </TouchableOpacity>
  );
}

function SkipBackButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Ionicons
        name="play-skip-back-circle"
        size={props.size}
        color={props.color}
      ></Ionicons>
    </TouchableOpacity>
  );
}

function SkipForwardButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Ionicons
        name="play-skip-forward-circle"
        size={props.size}
        color={props.color}
      ></Ionicons>
    </TouchableOpacity>
  );
}

function PlayPauseButton(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      {props.isPlaying ? (
        <AntDesign name="pausecircle" size={props.size} color={props.color} />
      ) : (
        <AntDesign name="play" size={props.size} color={props.color} />
      )}
    </TouchableOpacity>
  );
}

function AutoScrollingScrollView(props) {
  const scrollRef = React.createRef();
  const [scrollLoaded, setScrollLoaded] = React.useState(false);
  const [maxPosition, setMaxPosition] = React.useState(0);
  const [currPosition, setCurrPosition] = React.useState(0);

  return (
    <Animated.ScrollView
      onLayout={(event) => {
        console.log(event);
      }}
      onContentSizeChange={(w, h) => {
        console.log(w, h);
      }}
      onScroll={(event) => {
        console.log(event.nativeEvent);
        const currentPosition = event.nativeEvent.contentOffset.x;
        const maxPosition =
          event.nativeEvent.contentSize.width -
          event.nativeEvent.layoutMeasurement.width;
        console.log(Math.ceil(currentPosition), maxPosition);
      }}
      ref={scrollRef}
      style={{ flexDirection: "row" }}
      horizontal
      showsHorizontalScrollIndicator={false}
      nestedScrollEnabled
      contentContainerStyle={{ width: "100%" }}
    >
      <View
        style={{
          width:
            `${props.item.name} / ${props.item.artist}`.length > 35
              ? undefined
              : "100%",
        }}
      >
        <Text
          style={[
            props.fontStyle(
              props.subtitleFontSize,
              props.subtitleLineHeight,
              "center",
              `${props.item.name} / ${props.item.artist}`.length > 35
                ? props.subtitleFontSize / 8
                : undefined,
              "Tinos_400Regular"
            ).style,
          ]}
        >
          {props.item.name} / {props.item.artist}
        </Text>
      </View>
    </Animated.ScrollView>
  );
}
