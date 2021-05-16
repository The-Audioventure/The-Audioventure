import { Dimensions, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';
import React, { useReducer, useRef, useState, useEffect } from 'react';
import ViewContainer from '../components/ViewContainer';
import StyledBackground from '../components/StyledBackground';
import utilities from '../utilities';
import AppConstants from '../AppConstants';
import IconButton from '../components/IconButton';
import { useAssets } from 'expo-asset';
import { StackActions } from '@react-navigation/native';
const popAction = StackActions.pop(1);
import TextBanner from '../components/TextBanner';

const ICONS = {
	Back: {
		uri: 'https://yahtzeerage.github.io/CYOA-Assets/assets/back.png',
		name: 'Back',
	},
	Pumped: {
		uri: 'https://yahtzeerage.github.io/CYOA-Assets/assets/pumped.png',
		name: 'Pumped',
	},
	Lazy: {
		uri: 'https://yahtzeerage.github.io/CYOA-Assets/assets/lazy.png',
		name: 'Lazy',
	},
	Happy: {
		uri: 'https://yahtzeerage.github.io/CYOA-Assets/assets/happy.png',
		name: 'Happy',
	},
	Weird: {
		uri: 'https://yahtzeerage.github.io/CYOA-Assets/assets/weird.png',
		name: 'Weird',
	},
	Sad: {
		uri: 'https://yahtzeerage.github.io/CYOA-Assets/assets/sad.png',
		name: 'Sad',
	},
	Romantic: {
		uri: 'https://yahtzeerage.github.io/CYOA-Assets/assets/romance.png',
		name: 'Romantic',
	},
	Random: {
		uri: 'https://yahtzeerage.github.io/CYOA-Assets/assets/random.png',
		name: 'Random',
	},
};

const THEMES = ['Back', 'Pumped', 'Lazy', 'Happy', 'Weird', 'Sad', 'Romantic', 'Random'];

const MatchMyMoodScreen = ({ navigation }) => {
	const labelVisibleReducer = (state, action) => {
		const newState = { ...state, [action.type]: action.payload };
		console.log(newState);
		return newState;
	};
	const labelVisibleInit = Object.keys(AppConstants.moodThemes).reduce((acc, currKey) => {
		acc[currKey] = false;
		return acc;
	}, {});

	const [labelVisible, labelVisibleDispatch] = useReducer(labelVisibleReducer, labelVisibleInit);

	// keep the known window dimensions up to date amidst resize
	const [windowDim, setWindow] = useState(Dimensions.get('window'));
	window.addEventListener('resize', () => setWindow(Dimensions.get('window')));

	// load in the font for usage or error
	let [fontsLoaded] = useFonts({
		PressStart2P_400Regular,
	});
	const icon_uris = Object.values(AppConstants.icons).map((element) => element.uri);
	const [assets] = useAssets([...icon_uris]);
	if (!fontsLoaded || !assets) {
		return <AppLoading />;
	}

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
	const scaledFontSize20 = scaledImageDim.scalingRatio * AppConstants.GOOGLE_DOCS_TEXT_CONVERSION_RATIO * 20;
	const scaledLineHeight20 = scaledFontSize20 * AppConstants.LINE_SPACING;

	const scaledFontSize22 = scaledImageDim.scalingRatio * AppConstants.GOOGLE_DOCS_TEXT_CONVERSION_RATIO * 22;
	const scaledLineHeight22 = scaledFontSize22 * AppConstants.LINE_SPACING;

	const scaledFontSize18 = scaledImageDim.scalingRatio * AppConstants.GOOGLE_DOCS_TEXT_CONVERSION_RATIO * 18;
	const scaledLineHeight18 = scaledFontSize22 * AppConstants.LINE_SPACING;

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
						navigation.replace('Playlist', {
							themeName: elem,
							themeType: 'Mood',
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
				{labelVisible[AppConstants.moodThemes.Pumped] ? (
					<View
						style={{
							position: 'absolute',
							height: '9.2%',
							width: '27.5%',
							left: '1.4%',
							top: '20%',
						}}
					>
						<TextBanner
							fontColor="#fce5cd"
							borderColor="#f9cb9c"
							backgroundColor="#783f045f"
							borderWidth={scaledButtonBorderWidth}
							fontSize={scaled_titleFontSize}
							lineHeight={scaled_titleLineHeight}
							height="100%"
							width="100%"
						>
							Pumped!
						</TextBanner>
					</View>
				) : null}
				{labelVisible[AppConstants.moodThemes.Lazy] ? (
					<View
						style={{
							position: 'absolute',
							height: '9.4%',
							width: '23%',
							left: '0.5%',
							top: '45%',
						}}
					>
						<TextBanner
							fontColor="#d0e0e3"
							borderColor="#a2c4c9"
							backgroundColor="#0c343d60"
							borderWidth={scaledButtonBorderWidth}
							fontSize={scaledFontSize20}
							lineHeight={scaledLineHeight20}
							height="100%"
							width="100%"
						>
							Lazy...
						</TextBanner>
					</View>
				) : null}
				{labelVisible[AppConstants.moodThemes.Happy] ? (
					<View
						style={{
							position: 'absolute',
							height: '9.4%',
							width: '25%',
							left: '2.5%',
							top: '73.5%',
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
							Happy!
						</TextBanner>
					</View>
				) : null}
				{labelVisible[AppConstants.moodThemes.Weird] ? (
					<View
						style={{
							position: 'absolute',
							height: '9.4%',
							width: '25%',
							left: '57.5%',
							top: '88.5%',
						}}
					>
						<TextBanner
							fontColor="#d9ead3"
							borderColor="#b6d7a8"
							backgroundColor="#274e135e"
							borderWidth={scaledButtonBorderWidth}
							fontSize={scaledFontSize20}
							lineHeight={scaledLineHeight20}
							height="100%"
							width="100%"
						>
							~ Weird ~
						</TextBanner>
					</View>
				) : null}
				{labelVisible[AppConstants.moodThemes.Sad] ? (
					<View
						style={{
							position: 'absolute',
							height: '21%',
							width: '20.5%',
							left: '73%',
							top: '67.5%',
						}}
					>
						<TextBanner
							fontColor="#cfe2f3"
							borderColor="#9fc5e8"
							backgroundColor="#0737635e"
							borderWidth={scaledButtonBorderWidth}
							fontSize={scaledFontSize22}
							lineHeight={scaledLineHeight22}
							height="100%"
							width="100%"
						>
							A<br></br>Little<br></br>Sad
						</TextBanner>
					</View>
				) : null}
				{labelVisible[AppConstants.moodThemes.Romantic] ? (
					<View
						style={{
							position: 'absolute',
							height: '9.4%',
							width: '23%',
							left: '76.5%',
							top: '45%',
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
							Romantic
						</TextBanner>
					</View>
				) : null}
			</StyledBackground>
		</ViewContainer>
	);
};

export default MatchMyMoodScreen;
