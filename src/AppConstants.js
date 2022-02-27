const GOOGLE_DOCS_TEXT_CONVERSION_RATIO = 2;

const LOCAL_ASSETS_DOMAIN = "https://yahiyahussain.github.io/CYOA-Assets/";
const GITHUB_ASSETS_DOMAIN = "https://yahiyahussain.github.io/CYOA-Assets/";
export const ASSETS_DOMAIN = LOCAL_ASSETS_DOMAIN;

const getUri = function (fileName) {
  return {
    uri: `${ASSETS_DOMAIN}/assets/${fileName}`,
  };
};
const getUrl = function (fileName) {
  return `${ASSETS_DOMAIN}/assets/${fileName}`;
};

const getRawUri = function (fileName) {
  return {
    uri: `https://raw.githubusercontent.com/the-audioventure/CYOA-Assets/master/assets/${fileName}?token=AIGD4GLECBA4H6NRZGA2ZB3AL2CYQ`,
  };
};

const getRawurl = function (fileName) {
  return `https://raw.githubusercontent.com/the-audioventure/CYOA-Assets/master/assets/${fileName}?token=AIGD4GLECBA4H6NRZGA2ZB3AL2CYQ`;
};

const createColorTheme = function (textColor, borderColor, backgroundColor) {
  return { text: textColor, border: borderColor, background: backgroundColor };
};

const AppConstants = {
  assetsDomain: ASSETS_DOMAIN,
  backgroundColor: "black",
  // HomeScreenImage: {height: 2880, width: 5120, src: getUri("031_cover_noword.png")},
  HomeScreenImage: {
    height: 2880,
    width: 5120,
    src: {
      uri: `${ASSETS_DOMAIN}/assets/031_cover_kstr2.png`,
    },
  },

  NoWordCoverImage: {
    height: 2880,
    width: 5120,
    src: {
      uri: getUri("031_cover_noword.png"),
    },
  },
  // HomeScreenImage: {height: 2880, width: 5120, src: {uri: require('./assets/031_cover_noword.png')}},
  themeImage: {
    Sad: { height: 2880, width: 5120, src: getUri("028_sad_nosign.png") },
    Pumped: { height: 2880, width: 5120, src: getUri("032_pumped_nosign.png") },
    Cloudy: { height: 2880, width: 5120, src: getUri("034_cloud_nosign.png") },
    Romantic: {
      height: 2880,
      width: 5120,
      src: getUri("036_romantic_nosign.png"),
    },
    Icy: { height: 2880, width: 5120, src: getUri("038_snow_nosign.png") },
    Party: { height: 2880, width: 5120, src: getUri("039_party_nosign.png") },
    Beach: { height: 2880, width: 5120, src: getUri("042_beach_nosign.png") },
    Weird: { height: 2880, width: 5120, src: getUri("043_weird_nosign.png") },
    Home: { height: 2880, width: 5120, src: getUri("044_home_nosign.png") },
    Space: { height: 2880, width: 5120, src: getUri("045_space_nosign.png") },
    Happy: { height: 2880, width: 5120, src: getUri("046_happy_nosign.png") },
    Lazy: { height: 2880, width: 5120, src: getUri("047_lazy_nosign.png") },
  },
  themeColors: {
    Home: createColorTheme("#ffffff", "#b4a7d6", "#8e7cc380"),
    Pumped: createColorTheme("#ead1dc", "#d5a6bd", "#4c11305f"),
    Lazy: createColorTheme("#d9ead3", "#b6d7a8", "#274e135e"),
    Happy: createColorTheme("#fff2cc", "#ffe599", "#7f60005c"),
    Weird: createColorTheme("#ead1dc", "#d5a6bd", "#4c11305f"),
    Sad: createColorTheme("#f3f3f3", "#efefef", "#6666665e"),
    Romantic: createColorTheme("#ead1dc", "#d5a6bd", "#4c11305f"),
    Home: createColorTheme("#fce5cd", "#f9cb9c", "#783f045e"),
    Cloudy: createColorTheme("#c9daf8", "#a4c2f4", "#1c458760"),
    Beach: createColorTheme("#cfe2f3", "#9fc5e8", "#0737635e"),
    Party: createColorTheme("#d9d2e9", "#b4a7d6", "#20124d5f"),
    Icy: createColorTheme("#d9d2e9", "#b4a7d6", "#20124d5f"),
    Space: createColorTheme("#d9d2e9", "#b4a7d6", "#20124d5f"),
  },

  themeTitleNames: {
    Pumped: "Pumped!",
    Lazy: "Lazy...",
    Happy: "Happy!",
    Weird: "~ Weird ~",
    Sad: "A Little Sad...",
    Romantic: "Romantic",
    Home: "Home",
    Cloudy: "Through the Clouds",
    Beach: "The Beach",
    Party: "To A Party!",
    Icy: "Somewhere Icy",
    Space: "Outer Space",
  },

  themeTitleBoxSize: {
    Pumped: "60%",
    Lazy: "60%",
    Happy: "50%",
    Weird: "70%",
    Sad: "100%",
    Romantic: "60%",
    Home: "40%",
    Cloudy: "100%",
    Beach: "70%",
    Party: "80%",
    Icy: "100%",
    Space: "80%",
  },

  moodThemes: {
    Sad: "Sad",
    Pumped: "Pumped",
    Romantic: "Romantic",
    Weird: "Weird",
    Happy: "Happy",
    Lazy: "Lazy",
  },

  placeThemes: {
    Cloudy: "Cloudy",
    Icy: "Icy",
    Party: "Party",
    Beach: "Beach",
    Home: "Home",
    Space: "Space",
  },

  themes: {
    Sad: "Sad",
    Pumped: "Pumped",
    Cloudy: "Cloudy",
    Romantic: "Romantic",
    Icy: "Icy",
    Party: "Party",
    Beach: "Beach",
    Weird: "Weird",
    Home: "Home",
    Space: "Space",
    Happy: "Happy",
    Lazy: "Lazy",
  },

  icons: {
    Back: { uri: getUrl("back.png"), name: "Back" },
    Home: { uri: getUrl("home.png"), name: "Home" },
    Cloudy: { uri: getUrl("clouds.png"), name: "Cloudy" },
    Beach: { uri: getUrl("beach.png"), name: "Beach" },
    Party: { uri: getUrl("party.png"), name: "Party" },
    Icy: { uri: getUrl("cold%20updated.png"), name: "Icy" },
    Space: { uri: getUrl("space.png"), name: "Space" },
    Random: { uri: getUrl("random.png"), name: "Random" },
    Weird: { uri: getUrl("weird.png"), name: "Random" },
    Lazy: { uri: getUrl("lazy.png"), name: "Lazy" },
    Pumped: { uri: getUrl("pumped.png"), name: "Pumped" },
    Happy: { uri: getUrl("happy.png"), name: "Happy" },
    Sad: { uri: getUrl("sad.png"), name: "Sad" },
    Romantic: { uri: getUrl("romance.png"), name: "Romantic" },
  },
  backHomeIcon: { src: getUri("back_home_button.png"), name: "BackHome" },

  themePlaylists: {
    Beach: [
      {
        name: "Limonada Fria",
        artist: "FutureYou",
        track: getUri("FutureYou_Limonada%20Fria.wav"),
      },
      {
        name: "Verano En Playa Azul",
        artist: "Michelle Lugo",
        track: getUri("Michelle_VeranoEnPlayaAzul.wav"),
      },
      { name: "By the Bay", artist: "Raydee99", track: getUri("BytheBay.wav") },
    ],
    Icy: [
      {
        name: "A Vast Emptiness",
        artist: "William Joseph Scire",
        track: getUri("scire_william_AVastEmptiness.wav"),
      },
      {
        name: "Winter's Calling",
        artist: "Raydee99",
        track: getUri("Raydee99_Winter's%20Calling.wav"),
      },
      {
        name: "Wintersong",
        artist: 'Carlos "insaneintherainmusic" Eiene',
        track: getUri("Carlos_Wintersong.wav"),
      },
    ],

    Party: [
      {
        name: "Bring It Around",
        artist: "FutureYou",
        track: getUri("FutureYou_BringitAroundTownBoogie.wav"),
      },
      {
        name: "House of Fun",
        artist: "Michelle Lugo",
        track: getUri("Michelle_HouseofFun.wav"),
      },
      {
        name: "Luminous",
        artist: "Pascal Garoute",
        track: getUri("Pascal_Luminous.wav"),
      },
    ],

    Home: [
      {
        name: "Chamomile Among the Stars",
        artist: "Raydee99",
        track: getUri("Raydee99_ChamomileAmongtheStars.wav"),
      },
      {
        name: "Comfort",
        artist: "Dayna Ambrosio",
        track: getUri("DaynaAmbrosio_Comfort.wav"),
      },
      {
        name: "A Place to Stay",
        artist: "Ben Lipkin",
        track: getUri("Ben_APlaceToStay.wav"),
      },
    ],

    Space: [
      {
        name: "Landing On Mars",
        artist: "Madison Denbrock",
        track: getUri("Madison_LandingOnMars_02.wav"),
      },
      {
        name: "Observatory Deck",
        artist: "Brian Mowat",
        track: getUri("Space_BrianMowat_Audioventure_v02.wav"),
      },
      {
        name: "Drifting",
        artist: "Raydee99",
        track: getUri("Drifting%20-%20Mastered.wav"),
      },
    ],

    Cloudy: [
      {
        name: "Taking Flight",
        artist: "Raydee99",
        track: getUri("Raydee99_TakingFlight.wav"),
      },
      {
        name: "Hero's First Flight",
        artist: "Michelle Lugo",
        track: getUri("Michelle_Hero's_First_Flight.wav"),
      },
      {
        name: "Gliding Above the Cloud Sea",
        artist: "Achilles Jiang (Composerkiwi)",
        track: getUri("Gliding_Above_the%20Cloud_Sea.wav"),
      },
    ],

    Lazy: [
      {
        name: "Afternoon Lounging",
        artist: "Ben Lipkin",
        track: getUri("Ben_AfternoonLounging.wav"),
      },
      {
        name: "Lazy Tunes",
        artist: "Raydee99",
        track: getUri("Raydee99_LazyTunes.wav"),
      },
      {
        name: "Unwind",
        artist: "Dayna Ambrosio",
        track: getUri("DaynaAmbrosio_Unwind.wav"),
      },
    ],

    Pumped: [
      {
        name: "Level Up",
        artist: "Trey Rodman (KERO)",
        track: getUri("Trey_Level Up.wav"),
      },
      {
        name: "Chewy Water",
        artist: "Gregory Osborne",
        track: getUri("Greg_ChewyWater_FirstMix.wav"),
      },
      {
        name: "GALAXY☆FACTORY",
        artist: "dante / SoundCirclet",
        track: getUri("dante_GALAXY_FACTORY.wav"),
      },
    ],

    Sad: [
      {
        name: "Melan",
        artist: "Corvus Prudens",
        track: getUri("CorvusPrudens_Melan.wav"),
      },
      {
        name: "Remnants of the Past",
        artist: "Raydee99",
        track: getUri("Raydee99_RemnantsofthePast.wav"),
      },
      {
        name: "Allura",
        artist: "Caio M. Jiacomini",
        track: getUri("Caio_Allura.wav"),
      },
    ],

    Romantic: [
      {
        name: "Echo",
        artist: "Sydney Smith",
        track: getUri("sydney_echo.wav"),
      },
      {
        name: "Against the Wind",
        artist: "Madison Denbrock",
        track: getUri("Madison_Romantic01.wav"),
      },
      {
        name: "Timeless Love",
        artist: "Trey Rodman (KERO)",
        track: getUri("Trey_Timeless_Love.wav"),
      },
    ],

    Weird: [
      {
        name: "Woodpecker Disco",
        artist: "Dylan Ever | mudheart",
        track: getUri("dylan_woodpecker_disco.wav"),
      },
      {
        name: "Rip-Off Roo",
        artist: "Pascal Garoute",
        track: getUri("Pascal_Rip_Off_Roo.wav"),
      },
      {
        name: "Duck Tape Medicine",
        artist: "Gregory Osborne",
        track: getUri("Greg_DuctTapeMedicine_FirstMix.wav"),
      },
    ],

    Happy: [
      {
        name: "Can't Drag Me Down",
        artist: "FutureYou",
        track: getUri("FutureYou_Can't_Drag_Me_Down.wav"),
      },
      {
        name: "Sunbeam",
        artist: 'Remi "Candle" Chandler',
        track: getUri("CandleKing_Sunbeam.wav"),
      },
      {
        name: "A Happy Little Valley",
        artist: "Raydee99",
        track: getUri("Raydee99_AHappyLittleValley.wav"),
      },
    ],
  },

  BACKGROUND_IMAGE_HEIGHT: 867,
  BACKGROUND_IMAGE_WIDTH: 1542,
  BUTTON_BORDER_WIDTH: 7,
  GOOGLE_DOCS_TEXT_CONVERSION_RATIO: GOOGLE_DOCS_TEXT_CONVERSION_RATIO,
  TILE_FONT_SIZE: 24 * GOOGLE_DOCS_TEXT_CONVERSION_RATIO,
  SUBTITLE_FONT_SIZE: 24 * GOOGLE_DOCS_TEXT_CONVERSION_RATIO,
  CLOUDS_TITLE_FONT_SIZE: 19 * GOOGLE_DOCS_TEXT_CONVERSION_RATIO,
  CLICK_FONT_SIZE: 14 * GOOGLE_DOCS_TEXT_CONVERSION_RATIO,
  ENTRY_FONT_SIZE: 21 * GOOGLE_DOCS_TEXT_CONVERSION_RATIO,
  TIME_STAMP_FONT_SIZE: 7 * GOOGLE_DOCS_TEXT_CONVERSION_RATIO,
  LINE_SPACING: 1.15,
};

export default AppConstants;
