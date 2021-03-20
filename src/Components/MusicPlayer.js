import React, { useState, useContext, useEffect, useRef } from 'react'
import { GlobalState } from '../App'
import { songs } from '../songs.js'

function MusicPlayer() {

    const { setIsMusicPlayer } = useContext(GlobalState)
    const music = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [songIndex, setSongIndex] = useState(0)
    const [musicCurrentTime, setMusicCurrentTime] = useState(0)
    const [musicTotalTime, setMusicTotalTime] = useState(0)
    const [sliderPosition, setSliderPosition] = useState(0)
    const [isMuted, setIsMuted] = useState(false)

    function songInit(e) {
        console.log(e.target)
        console.log(e.target.duration)
        setMusicTotalTime(setTime(music.current.duration))
    }

    useEffect(() => {
        if(isPlaying) {
            music.current.play()
        } else {
            music.current.pause()
        }
    })
    
    const song = songs[songIndex]

    function changeVolume(e) {
        let volume = e.target.value/100
        music.current.volume = volume
    }

    function changeDuration(e) {
        let duration = e.target.value
        music.current.currentTime = music.current.duration / 100 * duration
        console.log(music.current.duration)
    }

    function previousSong() {
        if(songIndex === 0) {
            setSongIndex(songs.length-1)
        } else {
            setSongIndex(songIndex - 1)
        }
    }

    function nextSong() {
        if(songIndex === songs.length-1) {
            setSongIndex(0)
        } else {
            setSongIndex(songIndex + 1)
        }
    }

    if(music.current !== null && isPlaying) {
        setInterval(() => {
            setSliderPosition(sliderPosition + 1)
            setMusicCurrentTime(setTime(music.current.currentTime))
        }, 1000)
    }

    function setTime(time) {
        let seconds = Math.floor(time % 60)
        let minutes = Math.floor(time / 60)
        return minutes + ':' + seconds
    }


    return (
        <div className="music-player music-player-center">
            <audio id='audio' src={song.music_src} ref={music} />
            <div className="music-width music-player-center justify-content-between">
                <div className="music-player-info music-player-center justify-content-center">
                    <img src={song.music_img} width="60" height="60" className="rounded-3" alt="music_image" />
                    <div className="ms-4">
                        <h5 className="font-weight-bold">{song.title}</h5>
                        <h6>{song.artist}</h6>
                    </div>
                </div>

                <div className="duration-slider w-25 ms-5">
                    <input type="range" min="0" max="100" defaultValue="0" className="w-100" onChange={changeDuration} />
                </div>

                <div className="music-player-controls music-player-center justify-content-between">
                    <div>
                        <button className="skip-button" onClick={previousSong}><i className="fas fa-backward" ></i></button>
                        <button id="play" className="skip-button" onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ?<i className="fas fa-pause"></i> :<i className="fas fa-play"></i>}</button>
                        <button className="skip-button" onClick={nextSong}><i className="fas fa-forward" ></i></button>
                        
                    </div>
                    <span onLoadStart={songInit}>
                        {(musicCurrentTime !== null) ?musicCurrentTime : 0.0} / 
                        {musicTotalTime}
                    </span>
                    <span>
                        <i className="fas fa-volume-up"></i>
                    </span>
                    <div>
                        <input type="range" min="0" max="100" defaultValue="100" onChange={changeVolume} />
                    </div>
                </div>
            </div>

            <span className="close-icon" onClick={() => setIsMusicPlayer(false)}><i className="fas fa-times"></i></span>
        </div>

            
    )
}

export default MusicPlayer
