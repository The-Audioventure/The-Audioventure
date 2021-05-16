import { TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Dimensions } from 'react-native';
import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';
import { Tinos_400Regular } from '@expo-google-fonts/tinos';
import React, { useState, useEffect } from 'react';
import ViewContainer from '../components/ViewContainer';
import StyledBackground from '../components/StyledBackground';
import utilities from '../utilities';
import TextBanner from '../components/TextBanner';
import AppConstants from '../AppConstants';
import { useAssets } from 'expo-asset';

import loadingScreen from '../loading.gif';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

const CreditsScreen = ({ navigation }) => {
	const [windowDim, setWindow] = useState(Dimensions.get('window'));
	window.addEventListener('resize', () => setWindow(Dimensions.get('window')));

	const HEIGHT = AppConstants.HomeScreenImage.height;
	const WIDTH = AppConstants.HomeScreenImage.width;

	const WIDTH_SCALING_FACTOR = WIDTH / AppConstants.BACKGROUND_IMAGE_WIDTH;

	const imageDim = { height: HEIGHT, width: WIDTH };
	const scaledImageDim = utilities.calculate_scaledImageDim(windowDim, imageDim);
	const scaledButtonBorderWidth =
		AppConstants.BUTTON_BORDER_WIDTH * scaledImageDim.scalingRatio * WIDTH_SCALING_FACTOR;
	const scaled_titleFontSize = AppConstants.TILE_FONT_SIZE * scaledImageDim.scalingRatio * WIDTH_SCALING_FACTOR;
	const scaled_titleLineHeight = scaled_titleFontSize * AppConstants.LINE_SPACING;
	const scaled_subtitleFontSize = scaledImageDim.scalingRatio * AppConstants.CLICK_FONT_SIZE * WIDTH_SCALING_FACTOR;
	const scaled_subtitleLineHeight = scaled_subtitleFontSize * AppConstants.LINE_SPACING;

	// load in the font for usage or error
	let [fontsLoaded] = useFonts({
		PressStart2P_400Regular,
		Tinos_400Regular,
	});

	if (!fontsLoaded) {
		console.log('called');
		return (
			<ImageBackground
				source={loadingScreen}
				style={{ alignSelf: 'center', height: scaledImageDim.height, width: scaledImageDim.width }}
				color="black"
				height="100%"
				width="100%"
			></ImageBackground>
		);
	}

	return (
		<ViewContainer color="black" height="100%" width="100%">
			<StyledBackground
				image={AppConstants.HomeScreenImage.src.uri}
				height={scaledImageDim.height}
				width={scaledImageDim.width}
			>
				<ViewContainer color="clear" height="100%" width="60%">
					<ScrollView style={{ width: '100%', height: '100%', backgroundColor: '#c7c7c744' }}></ScrollView>
				</ViewContainer>
			</StyledBackground>
		</ViewContainer>
	);
};

export default CreditsScreen;
