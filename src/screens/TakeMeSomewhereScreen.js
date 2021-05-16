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
import React, { useState, useReducer } from 'react';
import ViewContainer from '../components/ViewContainer';
import StyledBackground from '../components/StyledBackground';
import utilities from '../utilities';
import TextBanner from '../components/TextBanner';
import AppConstants from '../AppConstants';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import CircleButton from '../components/CircleButton';
import IconButton from '../components/IconButton';
import { StackActions } from '@react-navigation/web';
import { Asset, useAssets } from 'expo-asset';

const ICONS = {
	Back: {
		uri: 'https://yahtzeerage.github.io/CYOA-Assets/assets/back.png',
		name: 'Back',
	},
	Home: {
		uri: 'https://yahtzeerage.github.io/CYOA-Assets/assets/home.png',
		name: 'Home',
	},
	Cloudy: {
		uri: 'https://yahtzeerage.github.io/CYOA-Assets/assets/clouds.png',
		name: 'cloudy',
	},
	Beach: {
		uri: 'https://yahtzeerage.github.io/CYOA-Assets/assets/beach.png',
		name: 'Beach',
	},
	Party: {
		uri: 'https://yahtzeerage.github.io/CYOA-Assets/assets/party.png',
		name: 'Party',
	},
	Icy: {
		uri: 'https://yahtzeerage.github.io/CYOA-Assets/assets/cold%20updated.png',
		name: 'Icy',
	},
	Space: {
		uri: 'https://yahtzeerage.github.io/CYOA-Assets/assets/space.png',
		name: 'Space',
	},
	Random: {
		uri: 'https://yahtzeerage.github.io/CYOA-Assets/assets/random.png',
		name: 'Random',
	},
};

const THEMES = ['Back', 'Home', 'Cloudy', 'Beach', 'Party', 'Icy', 'Space', 'Random'];

const TakeMeSomewhere = ({ navigation }) => {
	// keep the known window dimensions up to date amidst resize
	const [windowDim, setWindow] = useState(Dimensions.get('window'));
	window.addEventListener('resize', () => setWindow(Dimensions.get('window')));

	// load in the font for usage or error
	let [fontsLoaded] = useFonts({
		PressStart2P_400Regular,
	});
	const icon_uris = Object.values(AppConstants.icons).map((element) => element.uri);
	const [assets] = useAssets([...icon_uris]);

	const labelVisibleReducer = (state, action) => {
		const newState = { ...state, [action.type]: action.payload };
		console.log(newState);
		return newState;
	};
	const labelVisibleInit = Object.keys(AppConstants.placeThemes).reduce((acc, currKey) => {
		acc[currKey] = false;
		return acc;
	}, {});
	const [labelVisible, labelVisibleDispatch] = useReducer(labelVisibleReducer, labelVisibleInit);

	if (!fontsLoaded || !assets) {
		return <AppLoading />;
	}

	const HEIGHT = AppConstants.HomeScreenImage.height;
	const WIDTH = AppConstants.HomeScreenImage.width;

	const ICON_SIZE = 180;

	const imageDim = {
		height: AppConstants.BACKGROUND_IMAGE_HEIGHT,
		width: AppConstants.BACKGROUND_IMAGE_WIDTH,
	};
	const scaledImageDim = utilities.calculate_scaledImageDim(windowDim, imageDim);
	const scaledButtonBorderWidth = scaledImageDim.scalingRatio * AppConstants.BUTTON_BORDER_WIDTH;
	const scaled_titleFontSize = scaledImageDim.scalingRatio * AppConstants.TILE_FONT_SIZE;
	const scaled_titleLineHeight = scaled_titleFontSize * AppConstants.LINE_SPACING;
	const scaled_subtitleFontSize = scaledImageDim.scalingRatio * AppConstants.CLICK_FONT_SIZE;
	const scaled_subtitleLineHeight = scaled_subtitleFontSize * AppConstants.LINE_SPACING;

	const scaledFontSize24 = scaledImageDim.scalingRatio * AppConstants.GOOGLE_DOCS_TEXT_CONVERSION_RATIO * 25;
	const scaledLineHeight24 = scaledFontSize24 * AppConstants.LINE_SPACING;

	const scaledFontSize20 = scaledImageDim.scalingRatio * AppConstants.GOOGLE_DOCS_TEXT_CONVERSION_RATIO * 20;
	const scaledLineHeight20 = scaledFontSize20 * AppConstants.LINE_SPACING;

	const scaledFontSize22 = scaledImageDim.scalingRatio * AppConstants.GOOGLE_DOCS_TEXT_CONVERSION_RATIO * 22;
	const scaledLineHeight22 = scaledFontSize22 * AppConstants.LINE_SPACING;

	const scaledFontSize18 = scaledImageDim.scalingRatio * AppConstants.GOOGLE_DOCS_TEXT_CONVERSION_RATIO * 18;
	const scaledLineHeight18 = scaledFontSize22 * AppConstants.LINE_SPACING;

	const scaledFontSize19 = scaledImageDim.scalingRatio * AppConstants.GOOGLE_DOCS_TEXT_CONVERSION_RATIO * 19;
	const scaledLineHeight19 = scaledFontSize19 * AppConstants.LINE_SPACING;

	const CENTER_SCREEN_HEIGHT = scaledImageDim.height / 2 - (ICON_SIZE * scaledImageDim.scalingRatio) / 2;
	const CENTER_SCREEN_WIDTH = scaledImageDim.width / 2 - (ICON_SIZE * scaledImageDim.scalingRatio) / 2;
	const ICONS_SCREEN_RADIUS = 320 * scaledImageDim.scalingRatio;

	const icons = THEMES.map((elem, indx) => {
		if (elem === 'Back') {
			return (
				<IconButton
					key={elem}
					centerHeight={CENTER_SCREEN_HEIGHT}
					centerWidth={CENTER_SCREEN_WIDTH}
					displaceRadius={ICONS_SCREEN_RADIUS}
					image={ICONS[elem]}
					angle={Math.PI / 2 + (Math.PI / 4) * indx}
					iconSize={ICON_SIZE * scaledImageDim.scalingRatio}
					onPress={() => {
						navigation.replace('ChooseMoodOrPlace');
					}}
				/>
			);
		} else {
			return (
				<IconButton
					key={elem}
					centerHeight={CENTER_SCREEN_HEIGHT}
					centerWidth={CENTER_SCREEN_WIDTH}
					displaceRadius={ICONS_SCREEN_RADIUS}
					image={ICONS[elem]}
					angle={Math.PI / 2 + (Math.PI / 4) * indx}
					iconSize={ICON_SIZE * scaledImageDim.scalingRatio}
					onPress={() => {
						navigation.navigate('Playlist', {
							themeName: elem,
							themeType: 'Place',
						});
					}}
					onMouseEnter={() => {
						labelVisibleDispatch({ type: elem, payload: true });
					}}
					onMouseLeave={() => labelVisibleDispatch({ type: elem, payload: false })}
				/>
			);
		}
	});

	return (
		<ViewContainer color="black" height="100%" width="100%">
			<StyledBackground
				image={AppConstants.NoWordCoverImage.src.uri}
				height={scaledImageDim.height}
				width={scaledImageDim.width}
			>
				{icons}
				{labelVisible[AppConstants.placeThemes.Home] ? (
					<View
						style={{
							position: 'absolute',
							height: '9.2%',
							width: '17.5%',
							left: '10%',
							top: '20%',
						}}
					>
						<TextBanner
							fontColor="#fff2cc"
							borderColor="#ffe599"
							backgroundColor="#7f60005c"
							borderWidth={scaledButtonBorderWidth}
							fontSize={scaled_titleFontSize}
							lineHeight={scaled_titleLineHeight}
							height="100%"
							width="100%"
						>
							Home
						</TextBanner>
					</View>
				) : null}
				{labelVisible[AppConstants.placeThemes.Cloudy] ? (
					<View
						style={{
							position: 'absolute',
							height: '18.8%',
							width: '22%',
							left: '1%',
							top: '40.5%',
						}}
					>
						<TextBanner
							fontColor="#c9daf8"
							borderColor="#a4c2f4"
							backgroundColor="#1c458760"
							borderWidth={scaledButtonBorderWidth}
							fontSize={scaledFontSize19}
							lineHeight={scaledLineHeight19}
							height="100%"
							width="100%"
						>
							Through<br></br>the<br></br>Clouds
						</TextBanner>
					</View>
				) : null}
				{labelVisible[AppConstants.placeThemes.Beach] ? (
					<View
						style={{
							position: 'absolute',
							height: '7.5%',
							width: '24%',
							left: '2.5%',
							top: '73.5%',
						}}
					>
						<TextBanner
							fontColor="#ead1dc"
							borderColor="#d5a6bd"
							backgroundColor="#4c11305f"
							borderWidth={scaledButtonBorderWidth}
							fontSize={scaledFontSize18}
							lineHeight={scaledLineHeight18}
							height="100%"
							width="100%"
						>
							The Beach
						</TextBanner>
					</View>
				) : null}
				{labelVisible[AppConstants.placeThemes.Party] ? (
					<View
						style={{
							position: 'absolute',
							height: '9.4%',
							width: '30.5%',
							left: '57.5%',
							top: '88.5%',
						}}
					>
						<TextBanner
							fontColor="#fce5cd"
							borderColor="#f9cb9c"
							backgroundColor="#b45f065e"
							borderWidth={scaledButtonBorderWidth}
							fontSize={scaledFontSize20}
							lineHeight={scaledLineHeight20}
							height="100%"
							width="100%"
						>
							To a Party!
						</TextBanner>
					</View>
				) : null}
				{labelVisible[AppConstants.placeThemes.Icy] ? (
					<View
						style={{
							position: 'absolute',
							height: '13.5%',
							width: '26%',
							left: '71.5%',
							top: '69%',
						}}
					>
						<TextBanner
							fontColor="#cfe2f3"
							borderColor="#9fc5e8"
							backgroundColor="#0737635e"
							borderWidth={scaledButtonBorderWidth}
							fontSize={scaledFontSize18}
							lineHeight={scaledLineHeight18}
							height="100%"
							width="100%"
						>
							Somewhere<br></br>Icy
						</TextBanner>
					</View>
				) : null}
				{labelVisible[AppConstants.placeThemes.Space] ? (
					<View
						style={{
							position: 'absolute',
							height: '16%',
							width: '19.5%',
							left: '77%',
							top: '42%',
						}}
					>
						<TextBanner
							fontColor="#d9ead3"
							borderColor="#b6d7a8"
							backgroundColor="#274e135e"
							borderWidth={scaledButtonBorderWidth}
							fontSize={scaledFontSize24}
							lineHeight={scaledLineHeight24}
							height="100%"
							width="100%"
						>
							Outer<br></br>Space
						</TextBanner>
					</View>
				) : null}
			</StyledBackground>
		</ViewContainer>
	);
};

export default TakeMeSomewhere;
