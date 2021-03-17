import React, { useState, useContext, useEffect, useRef } from 'react'
import { GlobalState } from '../App'
import { songs } from '../songs.js'
import image from '../images/img1.jpg'

function MusicPlayer({src}) {

    const { setIsMusicPlayer } = useContext(GlobalState)
    const music =  useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        console.log(isPlaying)
        if(isPlaying) {
            music.current.play()
            
        } else {
            music.current.pause()
        }
    }, [isPlaying])
    
    const song = songs[0]
       

    return (
        <div className="music-player music-player-center">
            <audio src={song.music_src} ref={music} />
            <div className="music-width music-player-center justify-content-between">
                <div className="music-player-song music-player-center justify-content-center">
                    <img src={image} width="60" height="60" className="rounded-3" alt="music_image" />
                    <div className="ms-4">
                        <h5 className="font-weight-bold">Unstoppable</h5>
                        <h6>The Score</h6>
                    </div>
                </div>

                <div className="duration-slider w-25">
                    <input type="range" min="0" max="100" className="w-100"/>
                </div>

                <div className="w-25 music-player-center justify-content-between">
                    <div>
                        <button className="skip-button"><i className="fas fa-backward"></i></button>
                        <button id="play" className="skip-button" onClick={() => setIsPlaying(!isPlaying)}>{isPlaying ?<i className="fas fa-pause"></i> :<i className="fas fa-play"></i>}</button>
                        <button className="skip-button"><i className="fas fa-forward"></i></button>
                        
                    </div>
                    <div>
                        0:0 / 2:46
                    </div>
                    <span>
                        <i className="fas fa-volume-up"></i>
                    </span>
                    <div>
                        <input type="range" min="0" max="100" />
                    </div>
                </div>
            </div>

            <span className="close-icon" onClick={() => setIsMusicPlayer(false)}><i className="fas fa-times"></i></span>
        </div>

            
    )
}

export default MusicPlayer
