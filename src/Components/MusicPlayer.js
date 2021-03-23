import React, { useState, useContext, useEffect, useRef } from 'react'
import { GlobalState } from '../App'
import { songs } from '../songs.js'

function MusicPlayer() {

    const { setIsMusicPlayer, songIndex, setSongIndex } = useContext(GlobalState)
    const music = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [musicCurrentTime, setMusicCurrentTime] = useState('0.00')
    const [musicDuration, setMusicDuration] = useState(0)
    const [musicVolume, setMusicVolume] = useState(0.2)
    const [isMuted, setIsMuted] = useState(false)

    useEffect(() => {
        if(isPlaying) {
            music.current.play()
        } else {
            music.current.pause()
        }
    })
    
    const song = songs[songIndex]

    function changeVolume(vol) {
        setMusicVolume(vol)
        music.current.volume = vol
        if(vol === 0) setIsMuted(true)
        else setIsMuted(false)
    }

    function changeDuration(e) {
        let duration = e.target.value
        music.current.currentTime = music.current.duration / 100 * duration
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

    function setTime(time) {
        let seconds = Math.floor(time % 60)
        if(seconds < 10) seconds = '0' + seconds
        let minutes = Math.floor(time / 60)
        return minutes + ':' + seconds
    }

    function checkSound() {
        if(isMuted) return <i className="fas fa-volume-mute"></i>

        if(musicVolume < 0.5) return <i className="fas fa-volume-down"></i>

        return <i className="fas fa-volume-up"></i>
    }
    
    const durationSlider = document.getElementById('duration-slider')
    function changeCurrentTime(e) {
        setMusicCurrentTime(setTime(e.target.currentTime))
        durationSlider.value = e.target.currentTime / e.target.duration * 100
    }

    function initialControls(e) {
        setMusicDuration(setTime(e.target.duration))
        music.current.volume = musicVolume
    }

    return (
        <div className="music-player music-player-center">
            <audio 
                src={song.music_src} 
                ref={music}
                onTimeUpdate={changeCurrentTime}
                onCanPlay={initialControls}
                onEnded={nextSong}
            />
            <div className="music-width music-player-center justify-content-between">
                <div className="music-player-info music-player-center justify-content-center">
                    <img src={song.music_img} width="60" height="60" className="rounded-3" alt="music_image" />
                    <div className="ms-4">
                        <h5 className="font-weight-bold">{song.title}</h5>
                        <h6>{song.artist}</h6>
                    </div>
                </div>

                <div className="duration-slider w-25 ms-5">
                    <input id="duration-slider" type="range" min="0" max="100" defaultValue={musicDuration} className="w-100" onChange={changeDuration} />
                </div>

                <div className="music-player-controls music-player-center justify-content-between">
                    <div>
                        <button className="skip-button" onClick={previousSong}><i className="fas fa-backward" ></i></button>
                        <button id="play" className="skip-button" onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ?<i className="fas fa-pause"></i> :<i className="fas fa-play"></i>}</button>
                        <button className="skip-button" onClick={nextSong}><i className="fas fa-forward"></i></button>
                    </div>
                    <span>
                        {musicCurrentTime} / {musicDuration}
                    </span>
                    <span>
                        {/* <i className="fas fa-volume-up"></i> */}
                        {checkSound()}
                    </span>
                    <div>
                        <input type="range" min="0" max="100" defaultValue={musicVolume} onChange={(e) => changeVolume(e.target.value / 100)} />
                    </div>
                </div>
            </div>

            <span className="close-icon" onClick={() => setIsMusicPlayer(false)}><i className="fas fa-times"></i></span>
        </div>     
    )
}

export default MusicPlayer