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
} from "react-native";
import { Dimensions } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  PressStart2P_400Regular,
} from "@expo-google-fonts/press-start-2p";
import { Tinos_400Regular } from "@expo-google-fonts/tinos";
import React, { useState, useReducer } from "react";
import ViewContainer from "../components/ViewContainer";
import StyledBackground from "../components/StyledBackground";
import utilities from "../utilities";

import AppConstants from "../AppConstants";

import StyledMusicPlayer from "../components/StyledMusicPlayer";
import { random } from "underscore";

const PlaylistScreen = ({ navigation }) => {
  const THEME_PARAM = navigation.getParam("themeName");
  var THEME = THEME_PARAM;
  if (THEME_PARAM === "Random") {
    var themes_array = null;
    if (navigation.getParam("themeType") === "Mood") {
      themes_array = Object.keys(AppConstants.moodThemes);
    } else if (navigation.getParam("themeType") === "Place") {
      themes_array = Object.keys(AppConstants.placeThemes);
    } else {
      console.error(
        "no theme type found that matches: " + navigation.getParam("themeType")
      );
    }

    const rand_index = Math.floor(random(themes_array.length));
    THEME = themes_array[rand_index];
  }

  const THEME_NAME = AppConstants.themeTitleNames[THEME];
  let IMAGE;
  let PLAYLIST;
  switch (THEME) {
    case AppConstants.themes.Beach:
      IMAGE = AppConstants.themeImage[THEME];
      PLAYLIST = AppConstants.themePlaylists[THEME];
      break;
    case AppConstants.themes.Cloudy:
      IMAGE = AppConstants.themeImage[THEME];
      PLAYLIST = AppConstants.themePlaylists[THEME];
      break;
    case AppConstants.themes.Happy:
      IMAGE = AppConstants.themeImage[THEME];
      PLAYLIST = AppConstants.themePlaylists[THEME];
      break;
    case AppConstants.themes.Home:
      IMAGE = AppConstants.themeImage[THEME];
      PLAYLIST = AppConstants.themePlaylists[THEME];
      break;
    case AppConstants.themes.Party:
      IMAGE = AppConstants.themeImage[THEME];
      PLAYLIST = AppConstants.themePlaylists[THEME];
      break;
    case AppConstants.themes.Pumped:
      IMAGE = AppConstants.themeImage[THEME];
      PLAYLIST = AppConstants.themePlaylists[THEME];
      break;
    case AppConstants.themes.Romantic:
      IMAGE = AppConstants.themeImage[THEME];
      PLAYLIST = AppConstants.themePlaylists[THEME];
      break;
    case AppConstants.themes.Sad:
      IMAGE = AppConstants.themeImage[THEME];
      // PLAYLIST = AppConstants.themePlaylists[THEME];
      break;
    case AppConstants.themes.Icy:
      IMAGE = AppConstants.themeImage[THEME];
      PLAYLIST = AppConstants.themePlaylists[THEME];
      break;
    case AppConstants.themes.Space:
      IMAGE = AppConstants.themeImage[THEME];
      PLAYLIST = AppConstants.themePlaylists[THEME];
      break;
    case AppConstants.themes.Weird:
      IMAGE = AppConstants.themeImage[THEME];
      PLAYLIST = AppConstants.themePlaylists[THEME];
      break;
    case AppConstants.themes.Lazy:
      IMAGE = AppConstants.themeImage[THEME];
      PLAYLIST = AppConstants.themePlaylists[THEME];
    default:
      console.warn("No Theme Found For Image");
      break;
  }
  if (!PLAYLIST) {PLAYLIST = AppConstants.themePlaylists["Beach"]};

  // keep the known window dimensions up to date amidst resize
  const [windowDim, setWindow] = useState(Dimensions.get("window"));
  window.addEventListener("resize", () => setWindow(Dimensions.get("window")));

  // load in the font for usage or error
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
    Tinos_400Regular,
  });



  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const HEIGHT = AppConstants.HomeScreenImage.height;
  const WIDTH = AppConstants.HomeScreenImage.width;

  const MAGIC_SCALING_FACTOR = WIDTH / AppConstants.BACKGROUND_IMAGE_WIDTH;

  const imageDim = { height: HEIGHT, width: WIDTH };
  const scaledImageDim = utilities.calculate_scaledImageDim(
    windowDim,
    imageDim
  );
  const scaledButtonBorderWidth =
    scaledImageDim.scalingRatio *
    AppConstants.BUTTON_BORDER_WIDTH *
    MAGIC_SCALING_FACTOR;
  const scaled_titleFontSize =
    scaledImageDim.scalingRatio *
    AppConstants.TILE_FONT_SIZE *
    MAGIC_SCALING_FACTOR;
  const scaled_titleLineHeight = scaled_titleFontSize * 1.0;
  const scaled_subtitleFontSize =
    scaledImageDim.scalingRatio *
    AppConstants.SUBTITLE_FONT_SIZE *
    MAGIC_SCALING_FACTOR;
  const scaled_subtitleLineHeight = scaled_subtitleFontSize * 1.5;

  const scaled_entryFontSize =
    scaledImageDim.scalingRatio *
    AppConstants.ENTRY_FONT_SIZE *
    MAGIC_SCALING_FACTOR;
  const scaled_entryLineHeight = scaled_entryFontSize * 1.15;

  // hack
  const scaled_cloudTitleFontSize =
    scaledImageDim.scalingRatio *
    AppConstants.CLOUDS_TITLE_FONT_SIZE *
    MAGIC_SCALING_FACTOR;
  const scaled_cloudTitleLineHeight = scaled_cloudTitleFontSize;

  const fontStyle = (fontSize, lineHeight, align, leftPad, fontStyle) => {
    return StyleSheet.create({
      style: {
        fontFamily: fontStyle,
        fontSize: fontSize,
        textAlign: align,
        textAlignVertical: "center",
        color: AppConstants.themeColors[THEME].text,
        opacity: 1,
        paddingLeft: leftPad,
        lineHeight: lineHeight,
        // alignSelf: align,
        // alignContent: "center",
        // alignItems: "flex-start",
      },
    });
  };

  return (
    <ViewContainer color="black" height="100%" width="100%">
      <StyledBackground
        image={IMAGE.src}
        height={scaledImageDim.height}
        width={scaledImageDim.width}
      >
        <StyledMusicPlayer
          navigation={navigation}
          themeName={THEME}
          themeTitle={THEME_NAME}
          playlist={PLAYLIST}
          fontStyle={fontStyle}
          subtitleFontSize={scaled_subtitleFontSize}
          subtitleLineHeight={scaled_subtitleLineHeight}
          titleFontSize={scaled_titleFontSize}
          titleLineHeight={scaled_titleLineHeight}
          bannerBorderWidth={scaledButtonBorderWidth}
          entryFontSize={scaled_entryFontSize}
          entryLineHeight={scaled_entryLineHeight}
          //hack
          cloudTitleFontSize={scaled_cloudTitleLineHeight}
          cloudLineHeight={scaled_cloudTitleLineHeight}
        ></StyledMusicPlayer>
      </StyledBackground>
    </ViewContainer>
  );
};

export default PlaylistScreen;
