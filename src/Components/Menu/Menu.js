import React from 'react'
import MenuList from './MenuList'
import './MenuStyles.css'
import { connect } from 'react-redux'

function Menu({ isMenu, menuItems }) {
    
    return (
        <div className={`menu ${isMenu ? "" : "hide"}`}>
            <MenuList name={'Menu'} items={menuItems.menu} />
            <MenuList name={'My music'} items={menuItems.myMusic} />
            <MenuList name={'Playlists'} items={menuItems.playlists} />
        </div>
    )
}

const mapStateToProps = (store) => {
    const { isMenu } = store.PopupReducer
    const { menuItems } = store.ItemsReducer
    return { isMenu, menuItems }
}

export default connect(mapStateToProps) (Menu)
