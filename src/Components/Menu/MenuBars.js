import React from 'react'
import { connect } from 'react-redux'
import { TOGGLE_MENU } from '../../Actions/PopupActions'

function MenuBars({ dispatch }) {
    return (
        <span className="menu-bars" onClick={() => dispatch({ type: TOGGLE_MENU })}>
            <i className="fas fa-bars"></i>
        </span>
    )
}

export default connect() (MenuBars)
