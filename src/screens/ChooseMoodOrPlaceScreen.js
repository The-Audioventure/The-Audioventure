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

const ChooseMoodOrPlace = ({navigation}) => {

    // keep the known window dimensions up to date amidst resize
    const [windowDim, setWindow] = useState(Dimensions.get('window'));
    window.addEventListener('resize', () => setWindow(Dimensions.get('window')))

    // load in the font for usage
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
        <ViewContainer color='white' height='100%' width='100%' horizontal >
            <TouchableOpacity 
                onPress={()=>{navigation.navigate('MatchMyMood')}}
                style={{backgroundColor: 'rgb(238,238,238)', height: '100%', width: '50%', justifyContent: 'center', alignItems: 'center'}}
            >
                <TextBanner 
                    borderWidth={scaledButtonBorderWidth}
                    fontSize={scaled_titleFontSize}
                    lineHeight={scaled_titleLineHeight}
                    height='20%'
                    width='80%'
                >[Match My<br></br>Mood!]</TextBanner>
            </TouchableOpacity>
            
            <TouchableOpacity 
                onPress={()=>{navigation.navigate('TakeMeSomewhere')}}
                style={{backgroundColor: '#8e7cc3c6', height: '100%', width: '50%', justifyContent: 'center', alignItems: 'center'}}
            >
                <TextBanner 
                    borderWidth={scaledButtonBorderWidth}
                    fontSize={scaled_titleFontSize}
                    lineHeight={scaled_titleLineHeight}
                    height='20%'
                    width='80%'
                >[Take Me<br></br>Somewhere!]</TextBanner>
            </TouchableOpacity>
        </ViewContainer>
    )

}

export default ChooseMoodOrPlace;
