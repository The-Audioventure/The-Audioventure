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

class FirstScreen extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log(this.props)
    }
    static navigationOptions = {
      title: 'First',
    }
    componentDidMount(){
        // console.log(this.props.props.navigation)
      const {navigate} = this.props.props.navigation;
      navigate('Home');
    //   fetch('http://apiserver').then( (response) => {
    //     navigate('Second');
    //   });
    }
    render() {
      return (
        <AppLoading />
      );
    }
  }

const RootScreen = (props) => {

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

    return (
        <View>
            <FirstScreen props={props}></FirstScreen>
        </View>
    )
}

export default RootScreen;
