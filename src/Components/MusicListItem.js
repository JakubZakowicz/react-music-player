import React, { useContext } from 'react'
import unstoppable from '../images/img1.jpg'
import song from '../songs/song1.mp3'
import { GlobalState } from '../App'

function MusicListItem() {

    const { setIsMusicPlayer } = useContext(GlobalState)

    function playAudio() {
        setIsMusicPlayer({state: true, src: song})
    }

    return (
        <li className="music-list-item" onClick={playAudio}>
            <div className="row w-100 justify-content-between">
                <div className="col-1 d-flex align-items-center">
                    <img className="music-img" src={unstoppable} alt="unstoppable" width="50" height="50" />
                    <div className="ms-4 music-item-title">
                        <h5>Unstoppable</h5>
                        <p>The Score</p>
                    </div>
                </div>
                <div className="col-2 d-flex justify-content-between align-items-center">
                    <h6>4:46</h6>
                    <span className="music-list-icon"><i className="fas fa-plus"></i></span>
                    <span className="music-list-icon" ><i className="far fa-heart"></i></span>
                </div>
            </div>
        </li>
    )
}

export default MusicListItem
