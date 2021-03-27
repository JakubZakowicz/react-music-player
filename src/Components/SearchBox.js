import React from 'react'

function SearchBox() {
    return (
        <div className="col-lg-8 col-12">
            <span className="search-icon"><i className="fas fa-search"></i></span>
            <input className="search-box form-control" placeholder="Search for music..." />
        </div>
    )
}

export default SearchBox
