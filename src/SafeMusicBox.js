
export default class SafeMusicBox {

    playlist = null;
    onStartSong = null;
    onEndSong = null;
    soundPlayer = null;

    States = {
        INITIAL: "INITIAL",
        PLAYING: "PLAYING",
        PAUSED: "PAUSED",
        FINISHED: "FINISHED"
    }

    constructor(soundPlayer, playlist) {
        this.playlist = playlist;
        this.soundPlayer = soundPlayer;
    }
    
    getSongIndex(songName) {
        return this.playlist.findIndex((v) => v.name === songName);
    }

    forcePlay(songName) {
        
    }


}
export default SafeMusicBox; 