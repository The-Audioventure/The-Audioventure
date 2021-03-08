import { Text, Image, StyleSheet, View, Button, TouchableOpacity, ImagePropTypes, Touchable, ImageBackground, ScaledSize } from "react-native";
import { Dimensions } from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts, PressStart2P_400Regular} from '@expo-google-fonts/press-start-2p'
import React, {useState} from 'react';
import ViewContainer from "../components/ViewContainer";
import StyledBackground from "../components/StyledBackground"
import utilities from '../utilities'
import TextBanner from "../components/TextBanner";
import AppConstants from "../AppConstants"

const HomeScreen = ({navigation}) => {
    // navigation.navigate('Home')
    // keep the known window dimensions up to date amidst resize
    const [windowDim, setWindow] = useState(Dimensions.get('window'));
    window.addEventListener('resize', () => setWindow(Dimensions.get('window')))

    // load in the font for usage or error
    let [fontsLoaded] = useFonts({
        PressStart2P_400Regular,
    });
    if (!fontsLoaded) {
    return <AppLoading />;
    }

    const imageDim = {height: AppConstants.BACKGROUND_IMAGE_HEIGHT, width: AppConstants.BACKGROUND_IMAGE_WIDTH};
    const scaledImageDim = utilities.calculate_scaledImageDim(windowDim, imageDim);
    const scaledButtonBorderWidth = scaledImageDim.scalingRatio * AppConstants.BUTTON_BORDER_WIDTH;
    const scaled_titleFontSize = scaledImageDim.scalingRatio * AppConstants.TILE_FONT_SIZE;
    const scaled_titleLineHeight = scaled_titleFontSize * AppConstants.LINE_SPACING;
    const scaled_subtitleFontSize = scaledImageDim.scalingRatio * AppConstants.CLICK_FONT_SIZE;
    const scaled_subtitleLineHeight = scaled_subtitleFontSize * AppConstants.LINE_SPACING;

    return (
        <ViewContainer color='black' height='100%' width='100%' >
            <TouchableOpacity onPress={() => {navigation.navigate('ChooseMoodOrPlace')}}>
                <StyledBackground 
                    image={AppConstants.BACKGROUND_IMAGE} 
                    height={scaledImageDim.height}
                    width={scaledImageDim.width}>
                    <ViewContainer apart nudge color='clear' height='84.5%' width='50%' top='.6%'>

                        <ViewContainer color='clear' height='36%' width='100%'>
                            <TextBanner
                                borderWidth={scaledButtonBorderWidth}
                                fontSize={scaled_titleFontSize}
                                lineHeight={scaled_titleLineHeight}
                                height='78%'
                                width='100%'
                                bottomCorners
                            >Choose Your Own Audioventure!</TextBanner>
                            <TextBanner
                                borderWidth={scaledButtonBorderWidth}
                                fontSize={scaled_subtitleFontSize}
                                lineHeight={scaled_subtitleLineHeight}
                                height='22%'
                                width='100%'
                                noTop
                            >Click anywhere to start!</TextBanner>
                        </ViewContainer>

                        <TextBanner
                            borderWidth={scaledButtonBorderWidth}
                            fontSize={scaled_subtitleFontSize}
                            lineHeight={scaled_subtitleLineHeight}
                            // text="Credits"
                            height='9%'
                            width='33%'
                            touchable
                        >Credits</TextBanner>

                    </ViewContainer>
                </StyledBackground>
            </TouchableOpacity>
        </ViewContainer>
    )
}

export default HomeScreen;
