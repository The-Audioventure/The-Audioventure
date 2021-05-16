import {
  TouchableOpacity, Image, ImageBackground
} from "react-native";
import { Dimensions } from "react-native";
import {
  useFonts,
  PressStart2P_400Regular,
} from "@expo-google-fonts/press-start-2p";
import { Tinos_400Regular } from "@expo-google-fonts/tinos";
import React, { useState, useEffect} from "react";
import ViewContainer from "../components/ViewContainer";
import StyledBackground from "../components/StyledBackground";
import utilities from "../utilities";
import TextBanner from "../components/TextBanner";
import AppConstants from "../AppConstants";
import { useAssets } from "expo-asset";

import loadingScreen from "../loading.gif"

const HomeScreen = ({ navigation }) => {

  // navigation.navigate('Home')
  // keep the known window dimensions up to date amidst resize
  const [windowDim, setWindow] = useState(Dimensions.get("window"));
  window.addEventListener("resize", () => setWindow(Dimensions.get("window")));



  const HEIGHT = AppConstants.HomeScreenImage.height;
  const WIDTH = AppConstants.HomeScreenImage.width;

  const WIDTH_SCALING_FACTOR = WIDTH / AppConstants.BACKGROUND_IMAGE_WIDTH;

  const imageDim = { height: HEIGHT, width: WIDTH };
  const scaledImageDim = utilities.calculate_scaledImageDim(
    windowDim,
    imageDim
  );
  const scaledButtonBorderWidth =
    AppConstants.BUTTON_BORDER_WIDTH *
    scaledImageDim.scalingRatio *
    WIDTH_SCALING_FACTOR;
  const scaled_titleFontSize =
    AppConstants.TILE_FONT_SIZE *
    scaledImageDim.scalingRatio *
    WIDTH_SCALING_FACTOR;
  const scaled_titleLineHeight =
    scaled_titleFontSize * AppConstants.LINE_SPACING;
  const scaled_subtitleFontSize =
    scaledImageDim.scalingRatio *
    AppConstants.CLICK_FONT_SIZE *
    WIDTH_SCALING_FACTOR;
  const scaled_subtitleLineHeight =
    scaled_subtitleFontSize * AppConstants.LINE_SPACING;



    
  // load in the font for usage or error
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
    Tinos_400Regular,
  });

  const icon_uris = Object.values(AppConstants.icons).map(
    (element) => element.uri
  );
  const themeBackground_uris = Object.values(AppConstants.themeImage).map(
    (element) => element.src.uri
  );
  // const beachSong_uris = AppConstants.themePlaylists.Beach.map(
  //   (element) => element.track.uri
  // );
  var song_uris = []
  Object.values(AppConstants.themePlaylists).forEach(
    (playlist) => {
      const playlist_tracks = playlist.map(e => e.track.uri)
      song_uris = song_uris.concat(playlist_tracks)
    }
  )
  // console.log(Object.keys(AppConstants.icons));
  const [assets] = useAssets([
    AppConstants.HomeScreenImage.src.uri,
    ...icon_uris,
    ...themeBackground_uris,
    ...song_uris
  ]);

  // const [delay, setDelay] = useState(true)
  // useEffect(() => {
  //   const timeout = setTimeout(() => setDelay(false), 3000);
  //   return () => clearTimeout(timeout);
  // }, []);


  if (!fontsLoaded && !assets) {
    console.log('called')
    return (
      <ImageBackground  source={loadingScreen} style={{alignSelf: 'center',  height: scaledImageDim.height, width: scaledImageDim.width}} color="black" height="100%" width="100%">
      </ImageBackground>
    );
  }



  return (
    <ViewContainer color="black" height="100%" width="100%">
      {/* <Button contentStyle={false} style={{padding: 0, width:'100%', height:'100%'}} compact={true} uppercase={false} color="#FFC0CB" onPress={() => {navigation.navigate('ChooseMoodOrPlace')}}> */}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("ChooseMoodOrPlace");
        }}
      >
        <StyledBackground
          image={AppConstants.HomeScreenImage.src.uri}
          height={scaledImageDim.height}
          width={scaledImageDim.width}
        >
          <ViewContainer
            start
            nudge
            color="clear"
            height="84.5%"
            width="50%"
            top=".6%"
          >
            {/* <ViewContainer color="blue" height="36%" width="100%"> */}

              <TextBanner
                fontColor="#ffffff"
                borderColor="#b4a7d6"
                backgroundColor="#8e7cc380"
                borderWidth={scaledButtonBorderWidth}
                fontSize={scaled_subtitleFontSize}
                lineHeight={scaled_subtitleLineHeight}
                height="7.92%"
                width="100%"
              >
                Click anywhere to start!
              </TextBanner>
            {/* </ViewContainer> */}

            <TextBanner
              fontColor="#ffffff"
              borderColor="#b4a7d6"
              backgroundColor="#8e7cc380"
              borderWidth={scaledButtonBorderWidth}
              fontSize={scaled_subtitleFontSize}
              lineHeight={scaled_subtitleLineHeight}
              // text="Credits"
              height="9%"
              width="33%"
              touchable
              onPress={()=>{navigation.navigate("Credits")}}
              noTop
            >
              Credits
            </TextBanner>
          </ViewContainer>
        </StyledBackground>
      </TouchableOpacity>
      {/* </Button> */}
    </ViewContainer>
  );
};

export default HomeScreen;
