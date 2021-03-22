import { createAppContainer } from "react-navigation";
import { createBrowserApp } from "@react-navigation/web";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "react-navigation-stack";
import ChooseMoodOrPlaceScreen from "./src/screens/ChooseMoodOrPlaceScreen";
import MatchMyMoodScreen from "./src/screens/MatchMyMoodScreen";
import TakeMeSomewhereScreen from "./src/screens/TakeMeSomewhereScreen";
import PlaylistScreen from "./src/screens/PlaylistScreen";
import RootScreen from "./src/screens/RootScreen";

import { Platform } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";

const navigator = createStackNavigator(
  {
    Root: RootScreen,
    Home: HomeScreen,
    ChooseMoodOrPlace: ChooseMoodOrPlaceScreen,
    MatchMyMood: MatchMyMoodScreen,
    TakeMeSomewhere: TakeMeSomewhereScreen,
    Playlist: PlaylistScreen,
  },
  {
    initialRouteName: "Root",
    headerMode: "none",
    defaultNavigationOptions: {
      title: "App",
      cardStyle: { backgroundColor: "black" },
      cardStyleInterpolator: CardStyleInterpolators.forNoAnimation,
    },
  }
);

export default Platform.select({
  web: (config) => createBrowserApp(config, { history: "hash" }),
  default: (config) => createAppContainer(config),
})(navigator);
