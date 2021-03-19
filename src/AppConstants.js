const GOOGLE_DOCS_TEXT_CONVERSION_RATIO =  2.14285714;

const getUri = function(fileName) {
    
    return {uri: `https://yahtzeerage.github.io/CYOA-Assets/assets/${fileName}`}
}

const AppConstants = {

    // HomeScreenImage: {height: 2880, width: 5120, src: getUri("031_cover_noword.png")},
    HomeScreenImage: {height: 2880, width: 5120, src: {uri: "https://raw.githubusercontent.com/YahtzeeRage/CYOA-Assets/master/assets/031_cover_noword.png?token=AIGD4GKSBNO4H24F2L7M2JDALJC2Y"}},
    // HomeScreenImage: {height: 2880, width: 5120, src: {uri: require('./assets/031_cover_noword.png')}},
    themeImage: {
        Sad: {height: 2880, width: 5120, src: getUri("028_sad1.png")},
        Pumped: {height: 2880, width: 5120, src: getUri("032_pumped.png")},
        Cloudy: {height: 2880, width: 5120, src: getUri("034_cloud.png")},
        Romantic: {height: 2880, width: 5120, src: getUri("036_romantic.png")},
        Icy: {height: 2880, width: 5120, src: getUri("038_snow.png")},
        Party: {height: 2880, width: 5120, src: getUri("039_party.png")},
        Beach: {height: 2880, width: 5120, src: getUri("042_beach.png")},
        Weird: {height: 2880, width: 5120, src: getUri("043_weirdagain.png")},
        Home: {height: 2880, width: 5120, src: getUri("044_home.png")},
        Space: {height: 2880, width: 5120, src: getUri("045_space.png")},
        Happy: {height: 2880, width: 5120, src: getUri("046_happy.png")},
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
        Happy: "Happy"
    },

    icons: {
        Back: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/back.png", name: "Back"},
        Home: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/home.png", name: "Home"},
        Cloudy: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/clouds.png", name: "cloudy"},
        Beach: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/beach.png", name: "Beach"},
        Party: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/party.png", name: "Party"},
        Icy: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/cold%20updated.png", name: "Icy"},
        Space: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/space.png", name: "Space"},
        Random: {uri: "https://yahtzeerage.github.io/CYOA-Assets/assets/random.png", name: "Random"}
    
    },

    themePlaylists: {
        Beach: [
            { name: 'Limonada Fria', artist: "FutureYou", track: getUri("FutureYou_Limonada%20Fria.wav")},
            { name: 'Verano En Playa Azul', artist: "Michelle Lugo", track: getUri("Michelle_VeranoEnPlayaAzul.wav")},
            { name: 'By the Bay', artist: "Raydee99", track: getUri("BytheBay.wav")}
        ]


    },


    BACKGROUND_IMAGE_HEIGHT: 867,
    BACKGROUND_IMAGE_WIDTH: 1542,
    BUTTON_BORDER_WIDTH: 7,
    GOOGLE_DOCS_TEXT_CONVERSION_RATIO: GOOGLE_DOCS_TEXT_CONVERSION_RATIO,
    TILE_FONT_SIZE: 24 * GOOGLE_DOCS_TEXT_CONVERSION_RATIO,
    SUBTITLE_FONT_SIZE: 21 * GOOGLE_DOCS_TEXT_CONVERSION_RATIO,
    CLICK_FONT_SIZE: 14 * GOOGLE_DOCS_TEXT_CONVERSION_RATIO,
    LINE_SPACING: 1.15
};

export default AppConstants;