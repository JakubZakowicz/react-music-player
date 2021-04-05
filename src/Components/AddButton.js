import React from 'react'
import { connect } from 'react-redux'
import { TOGGLE_ADD_FORM } from '../Actions/PopupActions'

function AddButton({ dispatch }) {

    return (
        <div className="add-music col-lg-2 col-sm-12 " onClick={() => dispatch({ type: TOGGLE_ADD_FORM, payload: { state: true } })}>
            <span className="add-icon"><i className="fas fa-plus"></i></span>
            <button className="add-button">Add Music</button>
        </div>
    )
}

export default connect() (AddButton)
