import React from 'react';
import { View, Text, StyleSheet, Image, ShadowPropTypesIOS, ImageBackground } from 'react-native';


const styles = (props) => StyleSheet.create({
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
    render() {
        var style = styles(this.props);
        // console.log(this.props);

        return (
            <ImageBackground style={style.style} source={this.props.image}> 
                {this.props.children}
            </ImageBackground>
        )
    }
};