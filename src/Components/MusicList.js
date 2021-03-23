import React from 'react'
import MusicListItem from './MusicListItem'
import { songs } from '../songs'

function MusicList() {
    return (
        <ul className="list-unstyled mt-5 music-list">
            {songs.map((song, index)=> (
                <MusicListItem 
                    id={Math.random()} 
                    song={song}
                    index={index}      
                />
            ))}
            
        </ul>
    )
}

export default MusicList
