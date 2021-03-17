import React from 'react'


function MenuItem({ item }) {
    return (
        <li>
            <i className="fas fa-headphones"></i>
            <span>{item}</span>
        </li>
    )
}

export default MenuItem
