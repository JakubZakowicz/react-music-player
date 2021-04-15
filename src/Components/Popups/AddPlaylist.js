import React from 'react'
import { connect } from 'react-redux'
import { TOGGLE_PLAYLIST_FORM } from '../../Actions/PopupActions'
import { ADD_PLAYLIST_ITEM } from '../../Actions/ItemsActions'
import './PopupsStyles.css'

function AddPlaylist({ closePlaylistForm, addPlaylistItem }) {

    function hidePlaylistForm(e) { 
        if(e.target.tagName === 'DIV') closePlaylistForm()
    }

    function handleSubmit(e) {
        e.preventDefault()
        const input = document.getElementById('input')
        if(input.value !== '') {
            addPlaylistItem(input.value)
            input.value=''
        }
        closePlaylistForm()
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

function mapDispatchToProps(dispatch) {
    return {
        closePlaylistForm: () => dispatch({ type: TOGGLE_PLAYLIST_FORM, payload: { state: false } }),
        addPlaylistItem: val => dispatch({ type: ADD_PLAYLIST_ITEM, payload: { item: val } })
    }
}

export default connect(null, mapDispatchToProps) (AddPlaylist)