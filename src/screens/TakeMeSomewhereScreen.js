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
import { AntDesign , Ionicons } from '@expo/vector-icons';
import CircleButton from "../components/CircleButton";
import IconButton from "../components/IconButton";
import { StackActions }from '@react-navigation/web'

const ICONS = {
    Back: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/back.png", name: "Back"},
    Home: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/home.png", name: "Home"},
    Cloudy: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/clouds.png", name: "cloudy"},
    Beach: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/beach.png", name: "Beach"},
    Party: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/party.png", name: "Party"},
    Icy: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/cold%20updated.png", name: "Icy"},
    Space: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/space.png", name: "Space"},
    Random: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/random.png", name: "Random"}

}

const THEMES = [
    "Back",
    "Home",
    "Cloudy",
    "Beach",
    "Party",
    "Icy",
    "Space",
    "Random"
]



const TakeMeSomewhere = ({navigation}) => {

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

    const HEIGHT = AppConstants.HomeScreenImage.height;
    const WIDTH = AppConstants.HomeScreenImage.width;

    const ICON_SIZE = 180;

    const imageDim = {height: AppConstants.BACKGROUND_IMAGE_HEIGHT, width: AppConstants.BACKGROUND_IMAGE_WIDTH};
    const scaledImageDim = utilities.calculate_scaledImageDim(windowDim, imageDim);
    const scaledButtonBorderWidth = scaledImageDim.scalingRatio * AppConstants.BUTTON_BORDER_WIDTH;
    const scaled_titleFontSize = scaledImageDim.scalingRatio * AppConstants.TILE_FONT_SIZE;
    const scaled_titleLineHeight = scaled_titleFontSize * AppConstants.LINE_SPACING;
    const scaled_subtitleFontSize = scaledImageDim.scalingRatio * AppConstants.CLICK_FONT_SIZE;
    const scaled_subtitleLineHeight = scaled_subtitleFontSize * AppConstants.LINE_SPACING;

    const CENTER_SCREEN_HEIGHT = scaledImageDim.height/2 - ICON_SIZE*scaledImageDim.scalingRatio/2;
    const CENTER_SCREEN_WIDTH = scaledImageDim.width/2 - ICON_SIZE*scaledImageDim.scalingRatio/2;
    const ICONS_SCREEN_RADIUS = 320*scaledImageDim.scalingRatio;

    const icons = THEMES.map((elem,indx) => {
        if (elem === 'Back') {
            return <IconButton
                key={elem}
                centerHeight={CENTER_SCREEN_HEIGHT}
                centerWidth={CENTER_SCREEN_WIDTH}
                displaceRadius={ICONS_SCREEN_RADIUS}
                image={ICONS[elem]}
                angle={Math.PI/2+(Math.PI/4)*indx}
                iconSize={ICON_SIZE*scaledImageDim.scalingRatio}
                onPress={()=>{
                    navigation.navigate('ChooseMoodOrPlace');
                }}
            />
        } else {
            return <IconButton
                key={elem}
                centerHeight={CENTER_SCREEN_HEIGHT}
                centerWidth={CENTER_SCREEN_WIDTH}
                displaceRadius={ICONS_SCREEN_RADIUS}
                image={ICONS[elem]}
                angle={Math.PI/2+(Math.PI/4)*indx}
                iconSize={ICON_SIZE*scaledImageDim.scalingRatio}
                onPress={()=>{navigation.navigate('Playlist', {themeName: elem})}}
            />
        }


        
    })
    

    return (
        <ViewContainer color='black' height='100%' width='100%' >
            <StyledBackground 
                image={AppConstants.HomeScreenImage.src.uri} 
                height={scaledImageDim.height}
                width={scaledImageDim.width}>
                {icons}
            </StyledBackground>
        </ViewContainer>
    )
}

export default TakeMeSomewhere;