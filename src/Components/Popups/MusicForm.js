import React from 'react'
import './PopupsStyles.css'
import { connect } from 'react-redux'
import { TOGGLE_ADD_FORM } from '../../Actions/PopupActions'

function MusicForm({ dispatch }) {

    function validate(e) {
        e.preventDefault()
        const audioFile = document.getElementById('audio-file')
        const title = document.getElementById('title').value
        const author = document.getElementById('author').value
        //const imageFile = document.getElementById('image-file')

        const audioFileAlert = document.getElementById('audio-file-alert')
        const titleAlert = document.getElementById('title-alert')
        const authorAlert = document.getElementById('author-alert')


        let canSubmit = true

        if(audioFile.files.length === 0) {
            audioFileAlert.className = "d-block"
            canSubmit = false
        }
        if(title === '') {
            titleAlert.className="d-block"
            canSubmit = false
        }

        if(author === '') {
            authorAlert.className="d-block"
            canSubmit = false
        }

        if(canSubmit) {
            dispatch({ type: TOGGLE_ADD_FORM, payload: { state: false } })
        }
    }

    return (
        <div className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center">
            <form className="music-form d-flex flex-column position-relative" onSubmit={validate}>
                <h1 className="text-center mb-5">Add Music</h1>

                <div className="input">
                    <label htmlFor="audio-file">Audio file:</label>
                    <input type="file" className="form-control" id="audio-file" accept="audio/*" />
                    <small id="audio-file-alert" className="music-form-alert">You have to choose a file*</small>
                </div>
                <div className="input">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" className="form-control" id="title" placeholder="title..."></input>
                    <small id="title-alert" className="music-form-alert">You have to enter a title*</small>
                </div>
                <div className="input">
                    <label htmlFor="author" className="form-label">Author:</label>
                    <input type="text" className="form-control" id="author" placeholder="Author..."></input>
                    <small id="author-alert" className="music-form-alert">You have to enter an author*</small>
                </div>
                
                <label htmlFor="image-file" className="form-label">Image(optional):</label>
                <input type="file" className="form-control mb-4" id="image-file" accept="image/*"></input>
                <input type="submit" className="form-control mt-4" value="Add Music" />

                <span className="music-form-close-icon" onClick={() => dispatch({ type: TOGGLE_ADD_FORM, payload: { state: false } })}>
                    <i className="fas fa-times-circle"></i>
                </span>
            </form> 
        </div>
    )
}

export default connect() (MusicForm)
