import React from 'react'
import MusicListItem from './MusicListItem'
import { songs } from '../../songs'
import { connect } from 'react-redux'
import './MusicStyles.css'

function MusicList({ searchBox }) {

    const filterSongs = (song) => {
        if(song.title.toLowerCase().indexOf(searchBox) > -1 ||
            song.artist.toLowerCase().indexOf(searchBox) > -1) return true
        return false
    }

    return (
        <ul className="list-unstyled mt-5 music-list">
            {songs.map((song, index) => (
                filterSongs(song)
                ?
                    <MusicListItem 
                        key={Math.random()} 
                        song={song}
                        songIndex={index}      
                    />
                :
                    <></>
                     
            ))}
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        searchBox: state.ItemsReducer.searchBox
    }
}

export default connect(mapStateToProps) (MusicList)
