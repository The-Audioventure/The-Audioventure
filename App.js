import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ChooseMoodOrPlaceScreen from './src/screens/ChooseMoodOrPlaceScreen';
// import MatchMyMoodScreen from './src/screens/MatchMyMoodScreen';
// import TakeMeSomewhereScreen from './src/screens/TakeMeSomewhereScreen';
// import PlaylistScreen from './src/screens/PlaylistScreen'


import HomeScreen from './src/screens/HomeScreen'


const navigator = createStackNavigator(

  {
    Home: HomeScreen,
    // ChooseMoodOrPlace: ChooseMoodOrPlaceScreen,
    // MatchMyMood: MatchMyMoodScreen,
    // TakeMeSomewhere: TakeMeSomewhereScreen,
    // Playlist: PlaylistScreen
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    defaultNavigationOptions: {
      title: 'App',
      cardStyle: { backgroundColor: 'black' }
    },
  }
);
export default createAppContainer(navigator);