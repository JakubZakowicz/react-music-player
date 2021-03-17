import React, { useContext } from 'react'
import { GlobalState } from '../App'

function AddButton() {

    const { setIsAddForm } = useContext(GlobalState)

    return (
        <div onClick={() => setIsAddForm(true)}>
            <span className="add-icon"><i className="fas fa-plus"></i></span>
            <button className="add-button">Add Music</button>
        </div>
    )
}

export default AddButton
