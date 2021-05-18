import React from 'react';
import { Animated, StyleSheet, ImageBackground } from 'react-native';
// import Animated from 'react-native-reanimated';
import AppConstants from '../AppConstants';

const imageStyles = (props) =>
	StyleSheet.create({
		style: {
			justifyContent: 'center',
			alignItems: 'center',
			height: props.height,
			width: props.width,
			resizeMode: 'center',
			backgroundColor: AppConstants.backgroundColor,
			overflow: 'hidden',
		},
	});

export default class StyledBackground extends React.Component {
	state = {
		fadeAnimation: new Animated.Value(0),
		cycleIndex: 0,
	};

	fadeIn = () => {
		Animated.timing(this.state.fadeAnimation, {
			toValue: 1,
			duration: 500,
		}).start(({ finished }) => {
			if (finished && this.props.cycling) {
				console.log(this.props.cycleOffset);
				this.fadeOut(4000 + this.props.cycleOffset);
			}
		});
	};

	fadeOut = (delay = 0) => {
		Animated.timing(this.state.fadeAnimation, {
			toValue: 0,
			delay: delay,
			duration: 500,
		}).start(({ finished }) => {
			if (finished && this.props.cycling) {
				if (this.props.cycleTheme === 'Mood') {
					var themes_array = Object.keys(AppConstants.moodThemes);
				} else if (this.props.cycleTheme === 'Place') {
					var themes_array = Object.keys(AppConstants.placeThemes);
				} else {
					console.error('cycle theme not found');
					return;
				}

				var rand_index = Math.floor(Math.random() * themes_array.length);
				if (rand_index === this.state.cycleIndex) {
					rand_index = Math.floor(Math.random() * themes_array.length);
					if (rand_index === this.state.cycleIndex) {
						rand_index = Math.floor(Math.random() * themes_array.length);
					}
				}

				const THEME = themes_array[rand_index];

				this.props.setBackground(AppConstants.themeImage[THEME].src.uri);
				this.fadeIn();
				this.setState({ cycleIndex: rand_index });
			}
		});
	};

	render() {
		var imageStyle = imageStyles(this.props);
		// console.log(this.props);

		return (
			<Animated.View
				style={[
					styles.fadingContainer,
					{
						opacity: this.state.fadeAnimation,
						position: this.props.position,
						backgroundColor: AppConstants.backgroundColor,
					},
				]}
			>
				<ImageBackground
					resizeMode="center"
					style={imageStyle.style}
					source={this.props.image}
					onLoad={this.fadeIn}
				>
					{this.props.children}
				</ImageBackground>
			</Animated.View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	fadingContainer: {
		paddingVertical: 5,
		paddingHorizontal: 25,
		backgroundColor: 'black',
	},
	fadingText: {
		fontSize: 28,
		textAlign: 'center',
		margin: 10,
		color: '#fff',
	},
	buttonRow: {
		flexDirection: 'row',
		marginVertical: 16,
	},
});
