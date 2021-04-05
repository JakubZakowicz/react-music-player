import React from 'react'
import { connect } from 'react-redux'
import { TOGGLE_PLAYLIST_FORM } from '../../Actions/PopupActions'
import { ADD_PLAYLIST_ITEM } from '../../Actions/ItemsActions'
import './PopupsStyles.css'

function AddPlaylist({ dispatch }) {

    function hidePlaylistForm(e) { 
        if(e.target.tagName === 'DIV') dispatch({ type: TOGGLE_PLAYLIST_FORM, payload: { state: false } })
    }

    function handleSubmit(e) {
        e.preventDefault()
        const input = document.getElementById('input')
        if(input.value !== '') {
            dispatch({ type: ADD_PLAYLIST_ITEM, payload: { item: input.value } })
            input.value=''
        }
        dispatch({ type: TOGGLE_PLAYLIST_FORM, payload: { state: false }})
    }
    
    return (
        
        <div className="position-absolute w-100 h-100 add-playlist-background" onClick={hidePlaylistForm}>
            <form className="add-playlist input-group" onSubmit={handleSubmit}>
                <input id="input" className="form-control" placeholder="Add playlist's name..." />
                <input type="submit" className="btn add-playlist-button input-group-text" value="Add Playlist" />
            </form>
        </div>
    )
}

export default connect() (AddPlaylist)