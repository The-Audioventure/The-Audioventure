import { Text, Image, StyleSheet, ScrollView, View, Button, TouchableOpacity, ImagePropTypes, Touchable, ImageBackground, ScaledSize } from "react-native";
import { Dimensions } from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts, PressStart2P_400Regular} from '@expo-google-fonts/press-start-2p'
import React, {useState, useReducer} from 'react';
import ViewContainer from "../components/ViewContainer";
import StyledBackground from "../components/StyledBackground"
import utilities from '../utilities'
import TextBanner from "../components/TextBanner";
import AppConstants from "../AppConstants"
import { FlatList } from "react-native-gesture-handler";
import Banner from "../components/Banner";
// import MusicBox from "../MusicBox"
import StaticMusicBox from "../StaticMusicBox"
import { AntDesign , Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import StyledMusicPlayer from "../components/StyledMusicPlayer";

const PLAYLIST = [
    { name: 'Mario Coin', artist: "Uhh", track: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/Mario-coin-sound.mp3"}},
    { name: 'Linked Horizon', artist: "Revo", track: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/LinkedHorizon.mp3"}},
    { name: 'Let Me Hear', artist: "Fear and Loathing in Las Vegas", track: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/LetMeHear.mp3"} },
    { name: 'Heavenly Blue', artist: "Hiroyuki Sawano", track: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/HeavenlyBlue.mp3"}},
    { name: 'The World', artist: "Yutaka Yamada", track: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/TheWorld.mp3"}},
    { name: 'Sono Chi No Sadame', artist: "Bluff", track: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/SonoChiNoSadame.mp3"}},
    { name: 'Unravel', artist: "Toru Kitajima", track: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/Unravel.mp3"}},
    { name: 'Magia', artist: "Kalafina", track: { uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/angryPuella.mp3"}},
    { name: 'Papermoon', artist: "Tomoko Kawase", track: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/Papermoon.mp3"}},
    { name: 'Clattanoia', artist: "OxT", track: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/Clattanoia.mp3"}}
];





const PLAY_PAUSE_STATE = {
    PLAY: "play",
    PAUSE: "pausecircle"
}

const OPACITY_STATE = {
    PLAY: 0.5,
    PAUSE: 1
}

const songOpacityReducer = (state, action) => {
    
    const copy = {...state};

    if (copy[action.type] === OPACITY_STATE.PLAY) {
        copy[action.type] = OPACITY_STATE.PAUSE;
    }
    else {
        copy[action.type] = OPACITY_STATE.PLAY;
    }
    
    return copy;
}

const States = {
    INITIAL: "INITIAL",
    PLAYING: "PLAYING",
    PAUSED: "PAUSED",
    FINISHED: "FINISHED"
}


const handleSkip = async (staticMusicBox, musicState, setMusicState,currentSongName, setCurrentSong, handleSongEnd=(n)=>{}) => {
    switch(musicState) {
        case States.INITIAL:
            await handlePlayPause(staticMusicBox, musicState, setMusicState,currentSongName, setCurrentSong, handleSongEnd);
            break;
        case States.PLAYING: case States.PAUSED: case States.FINISHED:
            var currentSongIndex = PLAYLIST.findIndex((v)=> v.name === currentSongName);
            if (currentSongIndex === -1) {

                console.warn("WARNING: did not find song")
                console.log("was looking for: " + currentSongName)
                console.log("from: ", PLAYLIST)
                setMusicState(States.INITIAL);
                break;
            }

            console.log((currentSongIndex+1)%PLAYLIST.length);
            var newSongName = PLAYLIST[(currentSongIndex+1)%PLAYLIST.length].name;
            setMusicState(States.INITIAL);
            setMusicState(await staticMusicBox.skipToSong(States.INITIAL, currentSongName, newSongName,handleSongEnd));
            break;

    }
}


const handlePlayPause = async (staticMusicBox, musicState, setMusicState,currentSongName, setCurrentSong, handleSongEnd=(n)=>{}) => {

    switch(musicState) {
        case States.INITIAL:
            var newSongName = PLAYLIST[0].name
            setCurrentSong(newSongName);
            setMusicState(await staticMusicBox.playPause(musicState, currentSongName, newSongName,handleSongEnd));
            break;
        case States.PLAYING:
            setMusicState(await staticMusicBox.playPause(musicState, currentSongName, currentSongName,handleSongEnd));
            break;
        case States.PAUSED:
            setMusicState(await staticMusicBox.playPause(musicState, currentSongName, currentSongName,handleSongEnd));
            break;
        case States.FINISHED:
            var currentSongIndex = PLAYLIST.findIndex((v)=> v.name === currentSongName);
            if (currentSongIndex+1 >= PLAYLIST.length - 1) {
                setMusicState(States.INITIAL);
                break;
            } 
            
            var newSongName = PLAYLIST[currentSongIndex+1].name;
            setCurrentSong(newSongName);
            setMusicState(States.INITIAL);
            setMusicState(await staticMusicBox.playPause(States.INITIAL, currentSongName, newSongName,handleSongEnd));
            break;

    }
}

const PlaylistScreen = ({navigation}) => {


    // console.log();
    const [soundPlayer, setSoundPlayer] = React.useState(new Audio.Sound);

    const initialOpacityState = PLAYLIST.map((element) => {var dict = {}; dict[element.name] = OPACITY_STATE.PAUSE; return dict})



    const [opacityState, opacityDispatch] = React.useReducer(songOpacityReducer, initialOpacityState)

    const opacityCallback = (i) => {
            opacityDispatch({type: PLAYLIST[i].name})
        }

    // const createState = (x) => {React.useState(x)};

    // const musicBox = new MusicBox(soundPlayer, PLAYLIST, React.useState, opacityCallback, opacityCallback);
    
    const [musicState, setMusicState] = useState(States.INITIAL);
    const [currentSong, setCurrentSong] = useState("");

    const staticMusicBox = new StaticMusicBox(soundPlayer, PLAYLIST);
    const [playPauseState, setPlayPauseState] = useState(PLAY_PAUSE_STATE.PLAY);

    const onFinishSong = (nameOfSong) => {
        console.log(`Finished: ${nameOfSong}`);
        setCurrentSong("");
        setMusicState(States.FINISHED);

        handlePlayPause(staticMusicBox, States.FINISHED,setMusicState,nameOfSong,setCurrentSong,onFinishSong)
    }

    const playPauseButton = () => {
        handlePlayPause(staticMusicBox, musicState,setMusicState,currentSong,setCurrentSong,onFinishSong)
    }
    const skipButton = () => {
        handleSkip(staticMusicBox, musicState,setMusicState,currentSong,setCurrentSong,onFinishSong)
    }

    const songButton = (nameOfSong) => {
        setMusicState(States.PLAYING);
        handlePlayPause(staticMusicBox, States.PLAYING,setMusicState,nameOfSong,setCurrentSong,onFinishSong)
    }

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
    const scaled_titleLineHeight = scaled_titleFontSize * 1.0;
    const scaled_subtitleFontSize = scaledImageDim.scalingRatio * AppConstants.SUBTITLE_FONT_SIZE;
    const scaled_subtitleLineHeight = scaled_subtitleFontSize * 1.5;

    const fontStyle = (fontSize, lineHeight, align, leftPad) => { 
        return StyleSheet.create(
            {
                style: {
                    fontFamily: 'PressStart2P_400Regular',
                    fontSize: fontSize,
                    textAlign: "left",
                    textAlignVertical: 'center',
                    color: 'white',
                    opacity: 1,
                    lineHeight: lineHeight,
                    paddingLeft: leftPad,
                    alignSelf: align,
                    alignContent: 'flex-start',
                    alignItems: 'flex-start',
                    
                },
            }
        );
    };

    console.log(fontStyle(5,4))

    return (
        <ViewContainer color='black' height='100%' width='100%' >
            <StyledBackground 
                image={AppConstants.BACKGROUND_IMAGE} 
                height={scaledImageDim.height}
                width={scaledImageDim.width}>   
                    <StyledMusicPlayer
                        navigation={navigation}
                        themeName={navigation.getParam("themeName")}
                        playlist={PLAYLIST}
                        opacityState={opacityState}
                        fontStyle={fontStyle}
                        subtitleFontSize={scaled_subtitleFontSize}
                        subtitleLineHeight={scaled_subtitleLineHeight}
                        titleFontSize={scaled_titleFontSize}
                        titleLineHeight={scaled_titleLineHeight}
                        playPauseState={playPauseState}
                        bannerBorderWidth={scaledButtonBorderWidth}
                    ></StyledMusicPlayer>
            </StyledBackground>
        </ViewContainer>
    )

}



export default PlaylistScreen; 