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
import AppConstants from "../AppConstants";
import IconButton from "../components/IconButton";
import { useAssets } from "expo-asset";

const ICONS = {
  Back: {
    uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/back.png",
    name: "Back",
  },
  Pumped: {
    uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/pumped.png",
    name: "Pumped",
  },
  Lazy: {
    uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/lazy.png",
    name: "Lazy",
  },
  Happy: {
    uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/happy.png",
    name: "Happy",
  },
  Weird: {
    uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/weird.png",
    name: "Weird",
  },
  Sad: {
    uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/sad.png",
    name: "Sad",
  },
  Romantic: {
    uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/romance.png",
    name: "Romantic",
  },
  Random: {
    uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/random.png",
    name: "Random",
  },
};

const THEMES = [
  "Back",
  "Pumped",
  "Lazy",
  "Happy",
  "Weird",
  "Sad",
  "Romantic",
  "Random",
];

const MatchMyMoodScreen = ({ navigation }) => {
  // keep the known window dimensions up to date amidst resize
  const [windowDim, setWindow] = useState(Dimensions.get("window"));
  window.addEventListener("resize", () => setWindow(Dimensions.get("window")));

  // load in the font for usage or error
  let [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });
  const icon_uris = Object.values(AppConstants.icons).map(
    (element) => element.uri
  );
  const [assets] = useAssets([...icon_uris]);
  if (!fontsLoaded || !assets) {
    return <AppLoading />;
  }

  const ICON_SIZE = 180;

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

  const CENTER_SCREEN_HEIGHT =
    scaledImageDim.height / 2 - (ICON_SIZE * scaledImageDim.scalingRatio) / 2;
  const CENTER_SCREEN_WIDTH =
    scaledImageDim.width / 2 - (ICON_SIZE * scaledImageDim.scalingRatio) / 2;
  const ICONS_SCREEN_RADIUS = 320 * scaledImageDim.scalingRatio;

  const icons = THEMES.map((elem, indx) => {
    if (elem === "Back") {
      return (
        <IconButton
          key={elem}
          centerHeight={CENTER_SCREEN_HEIGHT}
          centerWidth={CENTER_SCREEN_WIDTH}
          displaceRadius={ICONS_SCREEN_RADIUS}
          image={ICONS[elem]}
          angle={Math.PI / 2 + (Math.PI / 4) * indx}
          iconSize={ICON_SIZE * scaledImageDim.scalingRatio}
          onPress={() => {
            navigation.navigate("ChooseMoodOrPlace");
          }}
        />
      );
    } else {
      return (
        <IconButton
          key={elem}
          centerHeight={CENTER_SCREEN_HEIGHT}
          centerWidth={CENTER_SCREEN_WIDTH}
          displaceRadius={ICONS_SCREEN_RADIUS}
          image={ICONS[elem]}
          angle={Math.PI / 2 + (Math.PI / 4) * indx}
          iconSize={ICON_SIZE * scaledImageDim.scalingRatio}
          onPress={() => {
            navigation.navigate("Playlist", {
              themeName: elem,
              themeType: "Mood",
            });
          }}
        />
      );
    }
  });

  return (
    <ViewContainer color="black" height="100%" width="100%">
      <StyledBackground
        image={AppConstants.HomeScreenImage.src.uri}
        height={scaledImageDim.height}
        width={scaledImageDim.width}
      >
        {icons}
      </StyledBackground>
    </ViewContainer>
  );
};

export default MatchMyMoodScreen;
