import { State } from "react-native-gesture-handler";

const States = {
    INITIAL: "INITIAL",
    PLAYING: "PLAYING",
    PAUSED: "PAUSED",
}

class MusicBox {

    _currentSongPath = null;
    _state = States.INITIAL;
    _setState = null
    _isLoaded = false;
    _index = 0;
    _setIndex = null;
    _length = 0;
    playlist = null;

    _onStartSong = null;
    _onEndSong = null

    soundPlayer = null;
    // setSoundPlayer = null;
    constructor(soundPlayer, playlist=[], createState, onStartSong=((i)=>{}), onEndSong=((i)=>{})) {
        this.soundPlayer = soundPlayer;
        this.playlist = playlist;
        this._length = this.playlist.length;

        const [state, setState] = createState(States.INITIAL);
        const [index, setIndex] = createState(0);

        this._index = index;
        this._setIndex = setIndex;
        this._state = state;
        this._setState = setState;
        this._onStartSong = onStartSong;
        this._onEndSong = onEndSong;
    }

    getCurrentSong() {
        return playlist[this._playlistIndex].name;
    }

    async _playNextSong(onFinishSong) {
        // this._index = this._index + 1;
        this._setIndex(this._index + 1)

        Promise.resolve(this._index).then(
            async (index) => {
                if (index >= this._length) {
                    // this._index = 0;
                    
                    this.pressStop();
                    
                    return;
                }
                await this.pressPlayPauseIndex(index, async () => {
                    await this._playNextSong(onFinishSong);
                    onFinishSong(index);
                })
            }
        )
        
    }

    async _startPlaylist(onFinishSong) {

        await this.pressPlayPauseIndex(0, async () => {

            await this._playNextSong(onFinishSong);
            onFinishSong(0);
        })
        
    } 

    async _startSong(onFinishSong) {
        await this.pressPlayPauseIndex(0, async () => {

            onFinishSong(0);
        })
    }

    async pressStop() {
        switch(this._state) {
            case States.PLAYING:
                await this.soundPlayer.stopAndUnloadAsync();
                break;
            case States.PAUSED:
                await this.soundPlayer.unloadAsync();
                break;
            
        }
        this._setIndex(0);
        this._setState(States.INITIAL);
        // this._state = States.INITIAL;
        return;
    }

    async pressSkip(onFinishSong) {
        switch(this._state) {
            case States.INITIAL:
                await this._startPlaylist(onFinishSong)
                return;
            case States.PLAYING:case States.PAUSED:
                await this._playNextSong();
                return;
            
        }
    }

    async pressPlayPause(onFinishSong=((x)=>{}), finishPlaylist=true) {
        switch(this._state) {
            case States.INITIAL:
                if (finishPlaylist) {
                    await this._startPlaylist(onFinishSong);
                } else {
                    await this._startSong(onFinishSong);
                }
                
                return;
            case States.PLAYING:case States.PAUSED:
                this.pressPlayPauseIndex(this._index, onFinishSong)
                return;
        }
    }

    async pressPlayPauseName (songName, onFinishSong=((x)=>{})){
        const songIndex = this.playlist.findIndex((element)=> element.name === songName);
        if (songIndex === -1) {
            console.warn("WARNING: song name not found in playlist")
            return;
        }
        await this.pressPlayPauseIndex(songIndex, onFinishSong);
    }

    async handlePlayPauseState(currentSongIndex, newSongIndex, currentState, onFinishSong) {

        const songPath = this.playlist[newSongIndex].track;
        console.log(States.PLAYING === this._state);

        

        switch(currentState) {
            case States.INITIAL:
                this._onStartSong(newSongIndex);
                await this.soundPlayer.loadAsync(songPath)
                await this.soundPlayer.playAsync();

                this.soundPlayer._onPlaybackStatusUpdate = (async (status) => {
                    if (status.didJustFinish === true) {
                        await this.soundPlayer.unloadAsync();
                        
                        this._onEndSong(newSongIndex);
                        onFinishSong(newSongIndex);
                        // this._state = States.INITIAL;
                        this._setState(States.INITIAL);
                    }
                });

                return States.PLAYING;
            case States.PLAYING:
                if (currentSongIndex === newSongIndex) {
                    await this.soundPlayer.pauseAsync();
                    return States.PAUSED;
                } else {
                    this._onEndSong(currentSongIndex);
                    this._onStartSong(newSongIndex);
                    await this.soundPlayer.unloadAsync();
                    await this.soundPlayer.loadAsync(songPath)
                    await this.soundPlayer.playAsync();
                    this.soundPlayer._onPlaybackStatusUpdate = (async (status) => {
                        if (status.didJustFinish === true) {
                            await this.soundPlayer.unloadAsync();
                            
                            this._onEndSong(newSongIndex);
                            onFinishSong(newSongIndex);
                            this._setState(States.INITIAL);
                        }
                    });
                    return States.PLAYING;
                }
            case States.PAUSED:
                if (currentSongIndex === newSongIndex) {
                    await this.soundPlayer.playAsync();
                    return States.PLAYING;
                } else {
                    this._onEndSong(currentSongIndex);
                    this._onStartSong(newSongIndex);
                    await this.soundPlayer.unloadAsync();
                    await this.soundPlayer.loadAsync(songPath)
                    await this.soundPlayer.playAsync();
                    this.soundPlayer._onPlaybackStatusUpdate = (async (status) => {
                        if (status.didJustFinish === true) {
                            await this.soundPlayer.unloadAsync();
                            
                            this._onEndSong(newSongIndex);
                            onFinishSong(newSongIndex);
                            this._setState(States.INITIAL);
                        }
                    });
                    return States.PLAYING;
                }




        }
    }

    async pressPlayPauseIndex(index, onFinishSong) {
        console.log("PRESS PLAY PAUSE")
        // console.log()
        Promise.resolve(this._state).then(
            (value) => {
                console.log(value);
                this._setState(this.handlePlayPauseState(this._index, index, value, onFinishSong));
                // this._state = ;
                this._index = index;
            }
        )
        
        
        
        // console.log(index)
        // console.log(this._state)
        // const songPath = this.playlist[index].track;
        // switch(this._state) {
        //     case States.INITIAL:
        //         this._onStartSong(index);
        //         this._index = index;
        //         await this.soundPlayer.loadAsync(songPath)
        //         await this.soundPlayer.playAsync();
        //         this._state = States.PLAYING;
        //         this.soundPlayer._onPlaybackStatusUpdate = (async (status) => {
        //             if (status.didJustFinish === true) {
        //                 await this.soundPlayer.unloadAsync();
        //                 this._state = States.INITIAL;
        //                 this._onEndSong(this._index);
        //                 onFinishSong(this._index);
        //             }
        //         });
        //         return;
        //     case States.PLAYING:
        //         if (this._index === index) {
        //             await this.soundPlayer.pauseAsync();
        //             this._state = States.PAUSED;
        //         }
        //         else {
        //             this._onEndSong(this._index);
        //             this._onStartSong(index);
        //             await this.soundPlayer.unloadAsync();
        //             await this.soundPlayer.loadAsync(songPath)
        //             await this.soundPlayer.playAsync();
        //             this._index = index;
        //             this.soundPlayer._onPlaybackStatusUpdate = (async (status) => {
        //                 if (status.didJustFinish === true) {
        //                     await this.soundPlayer.unloadAsync();
        //                     this._state = States.INITIAL;
        //                     this._onEndSong(this._index);
        //                     onFinishSong(this._index);
        //                 }
        //             });
        //         }
        //         return;
        //     case States.PAUSED:
        //         if (songPath === this._currentSongPath) {
        //             await this.soundPlayer.playAsync();
        //             this._state = States.PLAYING;
        //         }
        //         else {
        //             this._onEndSong(this._index);
        //             this._onStartSong(index);
        //             this._index = index;
        //             await this.soundPlayer.unloadAsync();
        //             await this.soundPlayer.loadAsync(songPath)
        //             await this.soundPlayer.playAsync();
        //             this.soundPlayer._onPlaybackStatusUpdate = (async (status) => {
        //                 if (status.didJustFinish === true) {
        //                     await this.soundPlayer.unloadAsync();
        //                     this._state = States.INITIAL;
        //                     this._onEndSong(this._index);
        //                     onFinishSong(this._index);
        //                 }
        //             });
        //         }
        //         return;
                

                
    }
}




export default MusicBox;