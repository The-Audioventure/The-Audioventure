import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBrowserApp } from '@react-navigation/web'
import {createStackNavigator} from 'react-navigation-stack';
import ChooseMoodOrPlaceScreen from './src/screens/ChooseMoodOrPlaceScreen';
import MatchMyMoodScreen from './src/screens/MatchMyMoodScreen'
import TakeMeSomewhereScreen from './src/screens/TakeMeSomewhereScreen'
import PlaylistScreen from './src/screens/PlaylistScreen'
import RootScreen from './src/screens/RootScreen'

import {Platform } from 'react-native'

import HomeScreen from './src/screens/HomeScreen'

const navigator = createStackNavigator(

  {
    Root: RootScreen,
    Home: HomeScreen,
    ChooseMoodOrPlace: ChooseMoodOrPlaceScreen,
    MatchMyMood: MatchMyMoodScreen,
    TakeMeSomewhere: TakeMeSomewhereScreen,
    Playlist: PlaylistScreen
  },
  {
    initialRouteName: 'Root',
    headerMode: 'none',
    defaultNavigationOptions: {
      title: 'App',
      cardStyle: { backgroundColor: 'black' }
    },
  }
);


export default Platform.select({
  web: config => createBrowserApp(config, {history: 'hash'}),
  default: config => createAppContainer(config)
})(navigator);


