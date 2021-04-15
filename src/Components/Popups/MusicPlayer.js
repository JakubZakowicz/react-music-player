import React, { useEffect, useRef } from 'react'
import { songs } from '../../songs.js'
import './PopupsStyles.css'
import { connect } from 'react-redux'
import { 
    NEXT_SONG, 
    PREVIOUS_SONG, 
    TOGGLE_PLAY,
    TOGGLE_MUTED,
    CHANGE_CURRENT_TIME,
    CHANGE_DURATION,
    CHANGE_VOLUME
} from '../../Actions/MusicPlayerActions'
import { TOGGLE_MUSIC_PLAYER } from '../../Actions/PopupActions'

function MusicPlayer(props) {

    const music = useRef(null)

    useEffect(() => {
        if(props.isPlaying) {
            music.current.play()
        } else {
            music.current.pause()
        }
    })
    
    const song = songs[props.index]

    function changeVolume(vol) {
        props.changeVol(vol)
        music.current.volume = vol
        if(vol === 0) props.toggleMuted(true)
        else props.toggleMuted(false)
    }

    function changeDuration(e) {
        music.current.currentTime = music.current.duration / 100 * e.target.value
    }

    function setTime(time) {
        let seconds = Math.floor(time % 60)
        if(seconds < 10) seconds = '0' + seconds
        let minutes = Math.floor(time / 60)
        return minutes + ':' + seconds
    }

    function checkSound() {
        if(props.isMuted) return <i className="fas fa-volume-mute"></i>
        if(props.volume < 0.5) return <i className="fas fa-volume-down"></i>
        return <i className="fas fa-volume-up"></i>
    }
    
   
    function changeCurrentTime(e) {
        props.changeCurrent(setTime(e.target.currentTime))
        const durationSlider = document.getElementById('duration-slider')
        durationSlider.value = e.target.currentTime / e.target.duration * 100
    }

    function initialControls(e) {
        props.changeDur(setTime(e.target.duration))
        music.current.volume = props.volume
    }

    return (
        <div className="music-player music-player-center">
            <audio 
                src={song.music_src} 
                ref={music}
                onTimeUpdate={changeCurrentTime}
                onCanPlay={initialControls}
                onEnded={props.nextSong}
            />
            <div className="music-width row music-player-center justify-content-around">
                <div className="music-player-info col-lg-2 music-player-center justify-content-center">
                    <img src={song.music_img} width="60" height="60" className="rounded-3" alt="music_image" />
                    <div className="ms-4">
                        <h5 className="font-weight-bold">{song.title}</h5>
                        <h6>{song.artist}</h6>
                    </div>
                </div>

                <div className="duration-slider col-lg-4">
                    <input id="duration-slider" type="range" min="0" max="100" defaultValue="0" className="w-100" onChange={changeDuration} />
                </div>

                <div className="music-player-controls col-lg-4">
                    <div className="row music-player-center">
                        <div className="col-lg-4">
                            <button className="skip-button" onClick={ props.previousSong}><i className="fas fa-backward" ></i></button>
                            <button id="play" className="skip-button" onClick={props.togglePlay}>{props.isPlaying ?<i className="fas fa-pause"></i> :<i className="fas fa-play"></i>}</button>
                            <button className="skip-button" onClick={props.nextSong}><i className="fas fa-forward"></i></button>
                        </div>
                        <span className="col-lg-3">
                            {props.currentTime} / {props.duration}
                        </span>
                        <span className="col-lg-1">
                            {checkSound()}
                        </span>
                        <div className="col-lg-1">
                            <input type="range" min="0" max="100" defaultValue={ props.volume * 100 } onChange={(e) => changeVolume(e.target.value / 100)} />
                        </div>
                    </div>
                </div>
            </div>

            <span className="close-icon" onClick={() => props.toggleMusicPlayer(false, props.index)}><i className="fas fa-times"></i></span>
        </div>     
    )
}

function mapStateToProps(store) {
    const { index, isPlaying, isMuted, currentTime, duration, volume } = store.MusicPlayerReducer
    return { index, isPlaying, isMuted, currentTime, duration, volume }
}

function mapDispatchToProps(dispatch) {
    return {
        nextSong: () => dispatch({ type: NEXT_SONG }),
        previousSong: () => dispatch({ type: PREVIOUS_SONG }),
        togglePlay: () => dispatch({ type: TOGGLE_PLAY }),
        toggleMuted: state => dispatch({ type: TOGGLE_MUTED, payload: { state } }),
        changeVol: volume => dispatch({ type: CHANGE_VOLUME, payload: { volume } }),
        changeCurrent: currentTime => dispatch({ type: CHANGE_CURRENT_TIME, payload: { currentTime } }),
        changeDur: duration => dispatch({ type: CHANGE_DURATION, payload: { duration } }),
        toggleMusicPlayer: (state, index) => dispatch({ type: TOGGLE_MUSIC_PLAYER, payload: { state, index } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (MusicPlayer)