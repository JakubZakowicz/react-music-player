import React from 'react'
import MenuList from './MenuList'
import './MenuStyles.css'
import { connect } from 'react-redux'

function Menu({ menuItems }) {

    return (
        <div className="menu">
            <MenuList name={'Menu'} items={menuItems.menu} />
            <MenuList name={'My music'} items={menuItems.myMusic} />
            <MenuList name={'Playlists'} items={menuItems.playlists} />
        </div>
    )
}

const mapStateToProps = (store) => {
    const { menuItems } = store.ItemsReducer
    return { menuItems }
}

export default connect(mapStateToProps) (Menu)
