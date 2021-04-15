import React from 'react'
import MenuItem from './MenuItem'
import { connect } from 'react-redux'
import { TOGGLE_PLAYLIST_FORM } from '../../Actions/PopupActions'

function MenuList({ name, items, openPlaylistForm }) {

    return (
        <div className="mt-5">
            <div className="d-flex align-items-center menu-list-header">
                <h3>{ name }</h3>
                {name === 'Playlists' 
                    ?<span className="menu-list-plus-icon" onClick={openPlaylistForm}><i className="fas fa-plus"></i></span>
                    :<></>
                }
                
            </div>
            
            <ul className="menu-list list-unstyled ps-4 pt-1">
                {items.map(item => (
                    <MenuItem key={Math.random(1000)} item={item} />
                ))}
            </ul>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        openPlaylistForm: () => dispatch({ type: TOGGLE_PLAYLIST_FORM, payload: { state: true }})
    }
}

export default connect(null, mapDispatchToProps) (MenuList)
