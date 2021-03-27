import React, { useContext } from 'react'
import { GlobalState } from '../App'

function MusicListItem({ song, index }) {

    const { isMusicPlayer, setIsMusicPlayer, setSongIndex } = useContext(GlobalState)

    function playAudio() {
        if(!isMusicPlayer) setIsMusicPlayer({state: true, src: ''})
        setSongIndex(index)
    }

    return (
        <li className="music-list-item" onClick={playAudio}>
            <div className="row w-100 justify-content-between">
                <div className="col-6 d-flex align-items-center">
                    <img className="music-img" src={song.music_img} alt="unstoppable" width="50" height="50" />
                    <div className="ms-4 music-item-title">
                        <h5>{song.title}</h5>
                        <p>{song.artist}</p>
                    </div>
                </div>
                <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-5 row justify-content-between align-items-center">
                    <h6 className="col-4">4:46</h6>
                    <span className="music-list-icon col-4"><i className="fas fa-plus"></i></span>
                    <span className="music-list-icon col-4" ><i className="far fa-heart"></i></span>
                </div>
            </div>
        </li>
    )
}

export default MusicListItem
