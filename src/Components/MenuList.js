import React, { useContext } from 'react'
import MenuItem from './MenuItem'
import { GlobalState } from '../App'

function MenuList({ name, items }) {

    const { setPlaylistForm } = useContext(GlobalState) 

    return (
        <div>
            <div className="d-flex align-items-center menu-list-header">
                <h3>{ name }</h3>
                {name === 'Playlists' 
                    ?<span className="menu-list-plus-icon" onClick={() => setPlaylistForm(prevState => !prevState)}><i className="fas fa-plus"></i></span>
                    :<></>
                }
                
            </div>
            
            <ul className="menu-list">
                {items.map(item => (
                    <MenuItem key={Math.random(1000)} item={item} />
                ))}
            </ul>
        </div>
    )
}

export default MenuList
