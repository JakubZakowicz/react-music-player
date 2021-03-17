import React from 'react'
import MenuList from './MenuList'

function Menu({ items }) {
    
    return (
        <div className="menu">
            <MenuList name={'Menu'} items={items.menu} />
            <MenuList name={'My music'} items={items.myMusic} />
            <MenuList name={'Playlists'} items={items.playlists} />
        </div>
    )
}

export default Menu
