import React, { useContext } from 'react'
import { GlobalState } from '../App'

function MusicForm() {

    const { setIsAddForm, musicItems, setMusicItems } = useContext(GlobalState)

    function validate(e) {
        e.preventDefault()
        const audioFile = document.getElementById('audio-file')
        const title = document.getElementById('title').value
        const author = document.getElementById('author').value
        const imageFile = document.getElementById('image-file')

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
            setMusicItems([
                ...musicItems,
                { 
                    src: '',
                    title: title,
                    author: author
                }
            ])
        }

        console.log(audioFile)
    }

    function closeWindow() {
        setIsAddForm(false)
    }

    return (
        <div className="position-absolute w-100 h-100 d-flex justify-content-center align-items-center" name="musicForm">
            <form className="music-form d-flex flex-column position-relative" onSubmit={validate}>
                <h1 className="text-center mb-5">Add Music</h1>

                <div className="input">
                    <label htmlFor="audio-file">Audio file:</label>
                    <input type="file" className="form-control" id="audio-file" accept="audio/*" name="audio-file" />
                    <small id="audio-file-alert" className="music-form-alert">You have to choose a file*</small>
                </div>
                <div className="input">
                    <label htmlFor="title" className="form-label">Title:</label>
                    <input type="text" className="form-control" id="title" placeholder="title..." name="title"></input>
                    <small id="title-alert" className="music-form-alert">You have to enter a title*</small>
                </div>
                <div className="input">
                    <label htmlFor="author" className="form-label">Author:</label>
                    <input type="text" className="form-control" id="author" placeholder="Author..." name="author"></input>
                    <small id="author-alert" className="music-form-alert">You have to enter an author*</small>
                </div>
                
                <label htmlFor="image-file" className="form-label">Image(optional):</label>
                <input type="file" className="form-control mb-4" id="image-file" accept="image/*" name="image-file"></input>
                <input type="submit" className="form-control mt-4" value="Add Music" />

                <span className="music-form-close-icon" onClick={closeWindow}>
                    <i class="fas fa-times-circle"></i>
                </span>
            </form>

            
        </div>
    )
}

export default MusicForm
