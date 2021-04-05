import React from 'react'
import MusicListItem from './MusicListItem'
import { songs } from '../../songs'
import './MusicStyles.css'

function MusicList() {
    return (
        <ul className="list-unstyled mt-5 music-list">
            {songs.map((song, index)=> (
                <MusicListItem 
                    key={Math.random()} 
                    song={song}
                    songIndex={index}      
                />
            ))}
            
        </ul>
    )
}

export default MusicList
