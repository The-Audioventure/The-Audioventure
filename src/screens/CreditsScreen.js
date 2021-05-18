import { TouchableOpacity, Image, ImageBackground, Text, StyleSheet, View } from 'react-native';
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

const CREDITS_DATA = [
	{ title: 'Producer', people: ['Raydee99'] },
	{ title: 'Programmer', people: ['Yahiya Hussain'] },
	{ title: 'Background Artist', people: ['Gem'] },
	{ title: 'UI Artist', people: ['Jack Rodríguez\n(Ordinary Ram)'] },
	{ title: 'Mix Engineers', people: ['Charlie Westphal', 'JJ Sanchez'] },
	{
		title: 'Composers',
		people: [
			'Achilles Jiang\n|| Composer Kiwi',
			'Ben Lipkin',
			'Brian Mowat',
			'Caio M. Jiacomini',
			'Carlos\n"insaneintherainmusic"\nEiene',
			'Corvus Prudens',
			'dante / SoundCirclet',
			'Dayna Ambrosio',
			'Dylan Ever | mudheart',
			'FutureYou',
			'Gregory Osborne',
			'Madison Denbrock',
			'Michelle Lugo',
			'Pascal Garoute',
			'Remi "Candle" Chandler',
			'Sydney Smith',
			'Trey Rodman (KERO)',
			'William Joseph Scire',
		],
	},
	{ title: 'Trailer Editor', people: ['Benji Operhall'] },
];

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

	const getFontSized = function (size) {
		return (
			scaledImageDim.scalingRatio * AppConstants.GOOGLE_DOCS_TEXT_CONVERSION_RATIO * size * WIDTH_SCALING_FACTOR
		);
	};
	const getLineHeight = function (fontSize, spacing) {
		return fontSize * spacing;
	};

	const creditEntryComponent = (title, people) => {
		return (
			<View key={title}>
				<Text
					style={{
						marginTop: '8%',
						textAlign: 'center',
						color: 'white',
						textDecorationLine: 'underline',
						fontFamily: 'PressStart2P_400Regular',
						fontSize: getFontSized(15),
					}}
				>
					{title}
				</Text>
				{people.map((person) => (
					<Text
						key={person}
						style={{
							marginTop: '2.5%',
							marginBottom: '1.3%',
							textAlign: 'center',
							color: 'white',
							fontFamily: 'PressStart2P_400Regular',
							fontSize: getFontSized(14),
							lineHeight: getLineHeight(getFontSized(15), 1.15),
						}}
					>
						{person}
					</Text>
				))}
			</View>
		);
	};

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
				image={AppConstants.NoWordCoverImage.src.uri}
				height={scaledImageDim.height}
				width={scaledImageDim.width}
			>
				<ViewContainer color="clear" height="100%" width="60%">
					<ScrollView
						contentContainerStyle={{ marginTop: '4%', marginBottom: '20%' }}
						style={{ width: '100%', height: '100%', backgroundColor: '#50505044' }}
						showsVerticalScrollIndicator={false}
					>
						<Text
							style={{
								textAlign: 'center',
								color: 'white',
								textDecorationLine: 'underline',
								fontFamily: 'PressStart2P_400Regular',
								fontSize: getFontSized(20),
							}}
						>
							CREDITS
						</Text>
						{CREDITS_DATA.map((entry) => creditEntryComponent(entry.title, entry.people))}
					</ScrollView>
				</ViewContainer>
				<TouchableOpacity
					onPress={() => navigation.replace('Home')}
					style={{ position: 'absolute', bottom: '3%', right: '5%' }}
				>
					<Image
						style={{
							height: 150 * scaledImageDim.scalingRatio * WIDTH_SCALING_FACTOR,
							width: 150 * scaledImageDim.scalingRatio * WIDTH_SCALING_FACTOR,
						}}
						source={AppConstants.backHomeIcon.src.uri}
					></Image>
				</TouchableOpacity>
			</StyledBackground>
		</ViewContainer>
	);
};

export default CreditsScreen;
