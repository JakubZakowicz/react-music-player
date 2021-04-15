import React from 'react'
import { connect } from 'react-redux'
import { CHANGE_SEARCH_BOX } from '../Actions/ItemsActions'

function SearchBox({ changeInput }) {
    return (
        <div className="col-lg-8 col-12">
            <span className="search-icon"><i className="fas fa-search"></i></span>
            <input className="search-box form-control" placeholder="Search for music..." onChange={(e) => changeInput(e.target.value.toLowerCase())} />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        changeInput: value => dispatch({ type: CHANGE_SEARCH_BOX, payload: { value } })
    }
}

export default connect(null, mapDispatchToProps) (SearchBox)
