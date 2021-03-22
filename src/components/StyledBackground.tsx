import React from "react";
import {
  Animated,
  StyleSheet,
  ImageBackground,
  ImageURISource,
} from "react-native";
// import Animated from 'react-native-reanimated';
import AppConstants from "../AppConstants";

type StyledBackgroundProps = {
  image: ImageURISource;
  height: number;
  width: number;
  cycling?: boolean;
  cycleTheme?: string;
  setBackground?: any;
  cycleOffset: number;
  position:
    | Animated.Value
    | Animated.AnimatedInterpolation
    | "absolute"
    | "relative"
    | undefined;
};

const imageStyles = (props: StyledBackgroundProps) =>
  StyleSheet.create({
    style: {
      justifyContent: "center",
      alignItems: "center",
      height: props.height,
      width: props.width,
      resizeMode: "center",
      backgroundColor: "black",
      overflow: "hidden",
    },
  });

export default class StyledBackground extends React.Component<StyledBackgroundProps> {
  state = {
    fadeAnimation: new Animated.Value(0),
    cycleIndex: 0,
  };

  fadeIn = () => {
    const config = {
      toValue: 1,
      duration: 500,
    } as Animated.TimingAnimationConfig;
    Animated.timing(this.state.fadeAnimation, config).start(({ finished }) => {
      if (finished && this.props.cycling) {
        this.fadeOut(4000 + Math.floor(this.props.cycleOffset * Math.random()));
      }
    });
  };

  fadeOut = (delay = 0) => {
    const config = {
      toValue: 0,
      delay: delay,
      duration: 500,
    } as Animated.TimingAnimationConfig;
    Animated.timing(this.state.fadeAnimation, config).start(({ finished }) => {
      if (finished && this.props.cycling && this.props.setBackground) {
        if (this.props.cycleTheme === "Mood") {
          var themes_array = Object.keys(AppConstants.moodThemes);
        } else if (this.props.cycleTheme === "Place") {
          var themes_array = Object.keys(AppConstants.placeThemes);
        } else {
          console.error("cycle theme not found");
          return;
        }

        var rand_index = Math.floor(Math.random() * themes_array.length);
        if (rand_index === this.state.cycleIndex) {
          rand_index = Math.floor(Math.random() * themes_array.length);
          if (rand_index === this.state.cycleIndex) {
            rand_index = Math.floor(Math.random() * themes_array.length);
          }
        }

        const THEME = themes_array[rand_index];
        console.log(AppConstants.themeImage, THEME, themes_array, rand_index);

        if (
          AppConstants.themeImage &&
          AppConstants.themeImage[THEME] &&
          AppConstants.themeImage[THEME].src &&
          AppConstants.themeImage[THEME].src.uri
        ) {
          this.props.setBackground(AppConstants.themeImage[THEME].src.uri);
        }
        this.fadeIn();
        this.setState({ cycleIndex: rand_index });
      }
    });
  };

  render() {
    var imageStyle = imageStyles(this.props);
    // console.log(this.props);

    return (
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: this.state.fadeAnimation,
            position: this.props.position,
          },
        ]}
      >
        <ImageBackground
          resizeMode="center"
          style={imageStyle.style}
          source={this.props.image}
          onLoad={this.fadeIn}
        >
          {this.props.children}
        </ImageBackground>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fadingContainer: {
    paddingVertical: 5,
    paddingHorizontal: 25,
    backgroundColor: "black",
  },
  fadingText: {
    fontSize: 28,
    textAlign: "center",
    margin: 10,
    color: "#fff",
  },
  buttonRow: {
    flexDirection: "row",
    marginVertical: 16,
  },
});
