import { TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  PressStart2P_400Regular,
} from "@expo-google-fonts/press-start-2p";
import React, { useState } from "react";
import ViewContainer from "../components/ViewContainer";
import StyledBackground from "../components/StyledBackground";
import utilities from "../utilities";
import TextBanner from "../components/TextBanner";
import AppConstants from "../AppConstants";
import { NavigationStackScreenProps } from "react-navigation-stack";

const ChooseMoodOrPlace = (props: NavigationStackScreenProps): JSX.Element => {
  const navigation = props.navigation;

  // keep the known window dimensions up to date amidst resize
  const [windowDim, setWindow] = useState(Dimensions.get("window"));
  window.addEventListener("resize", () => setWindow(Dimensions.get("window")));

  const placeThemes_array = Object.keys(AppConstants.moodThemes);

  const moodThemes_array = Object.keys(AppConstants.placeThemes);

  const place_rand_index = Math.floor(Math.random() * placeThemes_array.length);
  const mood_rand_index = Math.floor(Math.random() * moodThemes_array.length);

  const [moodBackground, setMoodBackground] = useState(
    AppConstants.themeImage[placeThemes_array[place_rand_index]].src
  );
  const [placeBackground, setPlaceBackground] = useState(
    AppConstants.themeImage[moodThemes_array[mood_rand_index]].src
  );

  // load in the font for usage
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const imageDim = {
    height: AppConstants.BACKGROUND_IMAGE_HEIGHT,
    width: AppConstants.BACKGROUND_IMAGE_WIDTH,
  };
  const scaledImageDim = utilities.calculate_scaledImageDim(
    windowDim,
    imageDim
  );
  const scaledButtonBorderWidth =
    scaledImageDim.scalingRatio * AppConstants.BUTTON_BORDER_WIDTH;
  const scaled_titleFontSize =
    scaledImageDim.scalingRatio * AppConstants.TILE_FONT_SIZE;
  const scaled_titleLineHeight =
    scaled_titleFontSize * AppConstants.LINE_SPACING;
  const scaled_subtitleFontSize =
    scaledImageDim.scalingRatio * AppConstants.CLICK_FONT_SIZE;
  const scaled_subtitleLineHeight =
    scaled_subtitleFontSize * AppConstants.LINE_SPACING;

  return (
    <ViewContainer color="white" height="100%" width="100%" horizontal>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("MatchMyMood");
        }}
        style={{
          overflow: "hidden",
          backgroundColor: "rgb(238,238,238)",
          height: "100%",
          width: "50%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledBackground
          image={moodBackground}
          height={scaledImageDim.height}
          width={scaledImageDim.width}
          cycling
          cycleTheme="Mood"
          setBackground={setMoodBackground}
          cycleOffset={2000}
          position={"absolute"}
        ></StyledBackground>

        <TextBanner
          borderWidth={scaledButtonBorderWidth}
          fontColor="#ffffff"
          borderColor="#b4a7d6"
          backgroundColor="#8e7cc3c6"
          fontSize={scaled_titleFontSize}
          lineHeight={scaled_titleLineHeight}
          height="20%"
          width="100%"
          absolute
          corners
          noRight
          noLeft
        >
          [Match My<br></br>Mood!]
        </TextBanner>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("TakeMeSomewhere");
        }}
        style={{
          overflow: "hidden",
          backgroundColor: "#8e7cc3c6",
          height: "100%",
          width: "50%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StyledBackground
          image={placeBackground}
          height={scaledImageDim.height}
          width={scaledImageDim.width}
          cycling
          cycleTheme="Place"
          setBackground={setPlaceBackground}
          cycleOffset={1000}
          position={"absolute"}
        ></StyledBackground>

        <TextBanner
          fontColor="#ffffff"
          borderColor="#b4a7d6"
          backgroundColor="#8e7cc3c6"
          borderWidth={scaledButtonBorderWidth}
          fontSize={scaled_titleFontSize}
          lineHeight={scaled_titleLineHeight}
          height="20%"
          width="100%"
          absolute
          corners
          noLeft
          noRight
        >
          [Take Me<br></br>Somewhere!]
        </TextBanner>
      </TouchableOpacity>
    </ViewContainer>
  );
};

export default ChooseMoodOrPlace;
