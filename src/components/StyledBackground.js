import React from 'react';
import { Animated, View, Text, StyleSheet, Image, ShadowPropTypesIOS, ImageBackground } from 'react-native';
// import Animated from 'react-native-reanimated';


const imageStyles = (props) => StyleSheet.create({
    style: {
        justifyContent: 'center',
        alignItems: 'center',
        height: props.height,
        width: props.width,
        resizeMode: "center",
        backgroundColor: 'black',
        overflow: 'hidden',
         
    }
});

export default class StyledBackground extends React.Component {

    state = {
        fadeAnimation: new Animated.Value(0)
    };
    fadeIn = () => {
        Animated.timing(this.state.fadeAnimation, {
          toValue: 1,
          duration: 500
        }).start();
    };

    fadeOut = () => {
        Animated.timing(this.state.fadeAnimation, {
          toValue: 0,
          duration: 500
        }).start();
    };

    render() {
        var imageStyle = imageStyles(this.props);
        // console.log(this.props);

        return (
            <Animated.View
                style={[
                    styles.fadingContainer,
                    {
                    opacity: this.state.fadeAnimation
                    }
                ]}
            >
                <ImageBackground  resizeMode='contain' style={imageStyle.style} source={this.props.image} onLoad={this.fadeIn}>
                    {this.props.children}
                </ImageBackground>
            </Animated.View>
        )
    }
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    fadingContainer: {
      paddingVertical: 5,
      paddingHorizontal: 25,
      backgroundColor: "black"
    },
    fadingText: {
      fontSize: 28,
      textAlign: "center",
      margin: 10,
      color : "#fff"
    },
    buttonRow: {
      flexDirection: "row",
      marginVertical: 16
    }
  });