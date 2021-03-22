import {
  Image,
  View,
} from "react-native";

import React from "react";

import CircleButton from "../components/CircleButton";
// import FastImage from 'react-native-fast-image'

export default class IconButton extends React.Component {
  render() {
    return (
      <View
        style={{
          bottom:
            this.props.centerHeight +
            this.props.displaceRadius * Math.sin(this.props.angle),
          left:
            this.props.centerWidth +
            this.props.displaceRadius * Math.cos(this.props.angle),
          position: "absolute",
        }}
      >
        <CircleButton
          circleDiameter={this.props.iconSize}
          onPress={this.props.onPress}
        >
          <Image
            style={{
              height: this.props.iconSize,
              width: this.props.iconSize,
              borderRadius: 100,
            }}
            source={this.props.image}
          ></Image>
        </CircleButton>
      </View>
    );
  }
}
