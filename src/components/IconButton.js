import {
	Text,
	Image,
	StyleSheet,
	View,
	Button,
	TouchableOpacity,
	ImagePropTypes,
	Touchable,
	ImageBackground,
	ScaledSize,
} from 'react-native';
import { Dimensions } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';
import React, { useState } from 'react';
import ViewContainer from '../components/ViewContainer';
import StyledBackground from '../components/StyledBackground';
import utilities from '../utilities';
import TextBanner from '../components/TextBanner';
import AppConstants from '../AppConstants';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import CircleButton from '../components/CircleButton';
// import FastImage from 'react-native-fast-image'

export default class IconButton extends React.Component {
	render() {
		return (
			<View
				style={{
					bottom: this.props.centerHeight + this.props.displaceRadius * Math.sin(this.props.angle),
					left: this.props.centerWidth + this.props.displaceRadius * Math.cos(this.props.angle),
					position: 'absolute',
				}}
				onMouseEnter={this.props.onMouseEnter}
				onMouseLeave={this.props.onMouseLeave}
			>
				<CircleButton circleDiameter={this.props.iconSize} onPress={this.props.onPress}>
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
