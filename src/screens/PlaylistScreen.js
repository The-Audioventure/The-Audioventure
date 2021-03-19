import { Text, Image, StyleSheet, ScrollView, View, Button, TouchableOpacity, ImagePropTypes, Touchable, ImageBackground, ScaledSize } from "react-native";
import { Dimensions } from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts, PressStart2P_400Regular} from '@expo-google-fonts/press-start-2p'
import {Tinos_400Regular} from '@expo-google-fonts/tinos'
import React, {useState, useReducer} from 'react';
import ViewContainer from "../components/ViewContainer";
import StyledBackground from "../components/StyledBackground"
import utilities from '../utilities'

import AppConstants from "../AppConstants"

import StyledMusicPlayer from "../components/StyledMusicPlayer";

const PlaylistScreen = ({navigation}) => {

    const THEME = navigation.getParam("themeName");
    let IMAGE;
    let PLAYLIST;
    console.log(AppConstants.themePlaylists);
    switch(THEME) {
        case AppConstants.themes.Beach:
            IMAGE = AppConstants.themeImage[THEME];
            PLAYLIST = AppConstants.themePlaylists[THEME];
            break;
        case AppConstants.themes.Cloudy:
            IMAGE = AppConstants.themeImage[THEME];
            // PLAYLIST = AppConstants.themePlaylists[THEME];
            break;
        case AppConstants.themes.Happy:
            IMAGE = AppConstants.themeImage[THEME];
            // PLAYLIST = AppConstants.themePlaylists[THEME];
            break;
        case AppConstants.themes.Home:
            IMAGE = AppConstants.themeImage[THEME];
            // PLAYLIST = AppConstants.themePlaylists[THEME];
            break;
        case AppConstants.themes.Home:
            IMAGE = AppConstants.themeImage[THEME];
            // PLAYLIST = AppConstants.themePlaylists[THEME];
            break;
        case AppConstants.themes.Party:
            IMAGE = AppConstants.themeImage[THEME];
            // PLAYLIST = AppConstants.themePlaylists[THEME];
            break;
        case AppConstants.themes.Pumped:
            IMAGE = AppConstants.themeImage[THEME];
            // PLAYLIST = AppConstants.themePlaylists[THEME];
            break;
        case AppConstants.themes.Romantic:
            IMAGE = AppConstants.themeImage[THEME];
            // PLAYLIST = AppConstants.themePlaylists[THEME];
            break;
        case AppConstants.themes.Sad:
            IMAGE = AppConstants.themeImage[THEME];
            // PLAYLIST = AppConstants.themePlaylists[THEME];
            break;
        case AppConstants.themes.Icy:
            IMAGE = AppConstants.themeImage[THEME];
            // PLAYLIST = AppConstants.themePlaylists[THEME];
            break;
        case AppConstants.themes.Space:
            IMAGE = AppConstants.themeImage[THEME];
            // PLAYLIST = AppConstants.themePlaylists[THEME];
            break;
        case AppConstants.themes.Weird:
            IMAGE = AppConstants.themeImage[THEME];
            // PLAYLIST = AppConstants.themePlaylists[THEME];
            break;
        default:
            console.warn("No Theme Found For Image")
            break;
    }
    PLAYLIST = AppConstants.themePlaylists["Beach"];
    

    // keep the known window dimensions up to date amidst resize
    const [windowDim, setWindow] = useState(Dimensions.get('window'));
    window.addEventListener('resize', () => setWindow(Dimensions.get('window')))

    // load in the font for usage or error
    let [fontsLoaded] = useFonts({
        PressStart2P_400Regular,
        Tinos_400Regular
    });
    if (!fontsLoaded) {
    return <AppLoading />;
    }
    const HEIGHT = AppConstants.HomeScreenImage.height;
    const WIDTH = AppConstants.HomeScreenImage.width;

    const MAGIC_SCALING_FACTOR = (WIDTH / AppConstants.BACKGROUND_IMAGE_WIDTH)



    const imageDim = {height: HEIGHT, width: WIDTH};
    const scaledImageDim = utilities.calculate_scaledImageDim(windowDim, imageDim);
    const scaledButtonBorderWidth = scaledImageDim.scalingRatio * AppConstants.BUTTON_BORDER_WIDTH * MAGIC_SCALING_FACTOR;
    const scaled_titleFontSize = scaledImageDim.scalingRatio * AppConstants.TILE_FONT_SIZE * MAGIC_SCALING_FACTOR;
    const scaled_titleLineHeight = scaled_titleFontSize * 1.0;
    const scaled_subtitleFontSize = scaledImageDim.scalingRatio * AppConstants.SUBTITLE_FONT_SIZE * MAGIC_SCALING_FACTOR;
    const scaled_subtitleLineHeight = scaled_subtitleFontSize * 1.5;

    const fontStyle = (fontSize, lineHeight, align, leftPad, fontStyle) => { 
        return StyleSheet.create(
            {
                style: {
                    fontFamily: fontStyle,
                    fontSize: fontSize,
                    textAlign: "center",
                    textAlignVertical: 'center',
                    color: 'white',
                    opacity: 1,
                    lineHeight: lineHeight,
                    alignSelf: align,
                    alignContent: 'center',
                    alignItems: 'center',
                    
                },
            }
        );
    };

    console.log(fontStyle(5,4))

    return (
        <ViewContainer color='black' height='100%' width='100%' >
            <StyledBackground 
                image={IMAGE.src} 
                height={scaledImageDim.height}
                width={scaledImageDim.width}>   
                    <StyledMusicPlayer
                        navigation={navigation}
                        themeName={navigation.getParam("themeName")}
                        playlist={PLAYLIST}
                        fontStyle={fontStyle}
                        subtitleFontSize={scaled_subtitleFontSize}
                        subtitleLineHeight={scaled_subtitleLineHeight}
                        titleFontSize={scaled_titleFontSize}
                        titleLineHeight={scaled_titleLineHeight}
                        bannerBorderWidth={scaledButtonBorderWidth}
                    ></StyledMusicPlayer>
            </StyledBackground>
        </ViewContainer>
    )

}



export default PlaylistScreen; 