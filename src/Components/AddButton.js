import React from 'react'
import { connect } from 'react-redux'
import { TOGGLE_ADD_FORM } from '../Actions/PopupActions'

function AddButton({ openMusicForm }) {

    return (
        <div className="add-music col-lg-2 col-sm-12 " onClick={openMusicForm}>
            <span className="add-icon"><i className="fas fa-plus"></i></span>
            <button className="add-button">Add Music</button>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        openMusicForm: () => dispatch({ type: TOGGLE_ADD_FORM, payload: { state: true } })
    }
}

export default connect(null, mapDispatchToProps) (AddButton)
