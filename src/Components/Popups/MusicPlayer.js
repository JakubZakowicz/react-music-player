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

function MusicPlayer({index, isPlaying, isMuted, currentTime, duration, volume, dispatch}) {

    const music = useRef(null)

    useEffect(() => {
        if(isPlaying) {
            music.current.play()
        } else {
            music.current.pause()
        }
    })
    
    const song = songs[index]

    function changeVolume(vol) {
        dispatch({ type: CHANGE_VOLUME, payload: { volume: vol }})
        music.current.volume = vol
        if(vol === 0) dispatch({ type: TOGGLE_MUTED, payload: { state: true }})
        else dispatch({ type: TOGGLE_MUTED, payload: { state: false }})
    }

    function changeDuration() {
        
    }

    function setTime(time) {
        let seconds = Math.floor(time % 60)
        if(seconds < 10) seconds = '0' + seconds
        let minutes = Math.floor(time / 60)
        return minutes + ':' + seconds
    }

    function checkSound() {
        if(isMuted) return <i className="fas fa-volume-mute"></i>
        if(volume < 0.5) return <i className="fas fa-volume-down"></i>
        return <i className="fas fa-volume-up"></i>
    }
    
   
    function changeCurrentTime(e) {
        dispatch({ type: CHANGE_CURRENT_TIME, payload: { time: setTime(e.target.currentTime) }})
        const durationSlider = document.getElementById('duration-slider')
        durationSlider.value = currentTime / duration * 100
    }

    function initialControls(e) {
        dispatch({ type: CHANGE_DURATION, payload: { duration: setTime(e.target.duration) } })
        music.current.volume = volume
    }

    return (
        <div className="music-player music-player-center">
            <audio 
                src={song.music_src} 
                ref={music}
                onTimeUpdate={changeCurrentTime}
                onCanPlay={initialControls}
                onEnded={() => dispatch({ type: NEXT_SONG })}
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
                            <button className="skip-button" onClick={() => dispatch({ type: PREVIOUS_SONG })}><i className="fas fa-backward" ></i></button>
                            <button id="play" className="skip-button" onClick={() => dispatch({ type: TOGGLE_PLAY })}>{isPlaying ?<i className="fas fa-pause"></i> :<i className="fas fa-play"></i>}</button>
                            <button className="skip-button" onClick={() => dispatch({ type: NEXT_SONG })}><i className="fas fa-forward"></i></button>
                        </div>
                        <span className="col-lg-3">
                            {currentTime} / {duration}
                        </span>
                        <span className="col-lg-1">
                            {checkSound()}
                        </span>
                        <div className="col-lg-1">
                            <input type="range" min="0" max="100" defaultValue={ volume * 100 } onChange={(e) => changeVolume(e.target.value / 100)} />
                        </div>
                    </div>
                </div>
            </div>

            <span className="close-icon" onClick={() => dispatch({ type: TOGGLE_MUSIC_PLAYER, payload: { state: false } })}><i className="fas fa-times"></i></span>
        </div>     
    )
}

function mapStateToProps(store) {
    const { index, isPlaying, isMuted, currentTime, duration, volume } = store.MusicPlayerReducer
    return { index, isPlaying, isMuted, currentTime, duration, volume }
}

export default connect(mapStateToProps) (MusicPlayer)