import React from 'react'

function AddPlaylist({ setPlaylistForm, items, setItems }) {

    function hidePlaylistForm(e) { 
        if(e.target.tagName === 'DIV') setPlaylistForm(prevState => !prevState)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const input = document.getElementById('input')
        if(input.value !== '') {
            setItems({...items, playlists: [...items.playlists, input.value]})
            input.value=''
        }
        setPlaylistForm(prevState => !prevState)
    }
    
    return (
        
        <div className="position-absolute w-100 h-100" onClick={hidePlaylistForm}>
            <form className="add-playlist input-group" onSubmit={handleSubmit}>
                <input id="input" className="form-control" placeholder="Add playlist's name..." />
                <input type="submit" className="btn add-playlist-button input-group-text" value="Add Playlist" />
            </form>
        </div>
    )
}

export default AddPlaylist
