import {
  TouchableOpacity,
} from "react-native";
import { Dimensions } from "react-native";
import {
  useFonts,
  PressStart2P_400Regular,
} from "@expo-google-fonts/press-start-2p";
import { Tinos_400Regular } from "@expo-google-fonts/tinos";
import React, { useState } from "react";
import ViewContainer from "../components/ViewContainer";
import StyledBackground from "../components/StyledBackground";
import utilities from "../utilities";
import TextBanner from "../components/TextBanner";
import AppConstants from "../AppConstants";
import { useAssets } from "expo-asset";


const HomeScreen = ({ navigation }) => {
  console.log(navigation);
  // navigation.navigate('Home')
  // keep the known window dimensions up to date amidst resize
  const [windowDim, setWindow] = useState(Dimensions.get("window"));
  window.addEventListener("resize", () => setWindow(Dimensions.get("window")));

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
  const beachSong_uris = AppConstants.themePlaylists.Beach.map(
    (element) => element.track.uri
  );
  // console.log(Object.keys(AppConstants.icons));
  const [assets] = useAssets([
    // AppConstants.HomeScreenImage.src.uri,
    AppConstants.themeImage.Beach.src.uri,
    ...icon_uris,
    ...beachSong_uris,
    ...themeBackground_uris,
  ]);
  if (!fontsLoaded && !assets) {
    return (
      <ViewContainer color="black" height="100%" width="100%">
        {/* <Image
                source={require('../assets/loading.gif')}
                style={{flex:1, aspectRatio: 2,height:'100%', width:'100%'}}
                resizeMode='contain'
            ></Image> */}
      </ViewContainer>
    );
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
    AppConstants.BUTTON_BORDER_WIDTH *
    scaledImageDim.scalingRatio *
    MAGIC_SCALING_FACTOR;
  const scaled_titleFontSize =
    AppConstants.TILE_FONT_SIZE *
    scaledImageDim.scalingRatio *
    MAGIC_SCALING_FACTOR;
  const scaled_titleLineHeight =
    scaled_titleFontSize * AppConstants.LINE_SPACING;
  const scaled_subtitleFontSize =
    scaledImageDim.scalingRatio *
    AppConstants.CLICK_FONT_SIZE *
    MAGIC_SCALING_FACTOR;
  const scaled_subtitleLineHeight =
    scaled_subtitleFontSize * AppConstants.LINE_SPACING;

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
            apart
            nudge
            color="clear"
            height="84.5%"
            width="50%"
            top=".6%"
          >
            <ViewContainer color="clear" height="36%" width="100%">
              <TextBanner
                fontColor="#ffffff"
                borderColor="#b4a7d6"
                backgroundColor="#8e7cc380"
                borderWidth={scaledButtonBorderWidth}
                fontSize={scaled_titleFontSize}
                lineHeight={scaled_titleLineHeight}
                height="78%"
                width="100%"
                bottomCorners
              >
                Choose Your <br></br>Own<br></br>Audioventure!
              </TextBanner>
              <TextBanner
                fontColor="#ffffff"
                borderColor="#b4a7d6"
                backgroundColor="#8e7cc380"
                borderWidth={scaledButtonBorderWidth}
                fontSize={scaled_subtitleFontSize}
                lineHeight={scaled_subtitleLineHeight}
                height="22%"
                width="100%"
                noTop
              >
                Click anywhere to start!
              </TextBanner>
            </ViewContainer>

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
