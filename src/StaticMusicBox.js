

export default class StaticMusicBox {

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

    async playPause(currentState, currentSongName, newSongName, songFinishCallback=(n)=>{}) {
        
        const index = this.getSongIndex(newSongName)
        switch(currentState) {
            case this.States.INITIAL:
                await this.soundPlayer.loadAsync(this.playlist[index].track)
                await this.soundPlayer.playAsync();
                this.soundPlayer._onPlaybackStatusUpdate = (async (status) => {
                    if (status.didJustFinish === true) {
                        await this.soundPlayer.unloadAsync();
                        songFinishCallback(newSongName);
                    }
                });
                return this.States.PLAYING;

            case this.States.PLAYING:
                if (currentSongName === newSongName) {
                    await this.soundPlayer.pauseAsync();
                    return this.States.PAUSED;
                }

                await this.soundPlayer.unloadAsync();
                
                await this.soundPlayer.loadAsync(this.playlist[index].track)
                await this.soundPlayer.playAsync();
                this.soundPlayer._onPlaybackStatusUpdate = (async (status) => {
                    if (status.didJustFinish === true) {
                        await this.soundPlayer.unloadAsync();
                        songFinishCallback(newSongName);
                    }
                });

                return this.States.PLAYING;
            case this.States.PAUSED:
                if (currentSongName === newSongName) {
                    await this.soundPlayer.playAsync();
                    return this.States.PLAYING;
                }

                await this.soundPlayer.unloadAsync();
                // const index = this.getSongIndex(newSongName)
                await this.soundPlayer.loadAsync(this.playlist[index].track)
                await this.soundPlayer.playAsync();
                this.soundPlayer._onPlaybackStatusUpdate = (async (status) => {
                    if (status.didJustFinish === true) {
                        await this.soundPlayer.unloadAsync();
                        songFinishCallback(newSongName);
                    }
                });

                return this.States.PLAYING;

            case this.States.FINISHED:
                console.log("Song Finished");
                return this.States.FINISHED;
        }
    }

    async skipToSong(currentState, newSongName, songFinishCallback=(n)=>{}) {
        const index = this.getSongIndex(newSongName)
        switch(currentState) {
            case this.States.INITIAL:
                await this.soundPlayer.loadAsync(this.playlist[index].track)
                await this.soundPlayer.playAsync();
                this.soundPlayer._onPlaybackStatusUpdate = (async (status) => {
                    if (status.didJustFinish === true) {
                        await this.soundPlayer.unloadAsync();
                        songFinishCallback(newSongName);
                    }
                });

            case this.States.PLAYING:
                await this.soundPlayer.unloadAsync();
                // const index = this.getSongIndex(newSongName)
                await this.soundPlayer.loadAsync(this.playlist[index].track)
                await this.soundPlayer.playAsync();
                this.soundPlayer._onPlaybackStatusUpdate = (async (status) => {
                    if (status.didJustFinish === true) {
                        await this.soundPlayer.unloadAsync();
                        songFinishCallback(newSongName);
                    }
                });
                return this.States.PLAYING;
            case this.States.PAUSED:
                await this.soundPlayer.unloadAsync();
                // const index = this.getSongIndex(newSongName)
                await this.soundPlayer.loadAsync(this.playlist[index].track)
                await this.soundPlayer.playAsync();
                this.soundPlayer._onPlaybackStatusUpdate = (async (status) => {
                    if (status.didJustFinish === true) {
                        await this.soundPlayer.unloadAsync();
                        songFinishCallback(newSongName);
                    }
                });
                return this.States.PLAYING;
            case this.States.FINISHED:
                console.log("Song Finished");
                return this.States.FINISHED;

        }
    }

}