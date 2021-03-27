import React from 'react'
import MenuList from './MenuList'

function Menu({ items, isMenu }) {
    
    return (
        <div className={isMenu ? "menu" : "menu hide"}>
            <MenuList name={'Menu'} items={items.menu} />
            <MenuList name={'My music'} items={items.myMusic} />
            <MenuList name={'Playlists'} items={items.playlists} />
        </div>
    )
}

export default Menu
