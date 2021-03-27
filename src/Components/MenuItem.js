import React from 'react'


function MenuItem({ item }) {
    return (
        <li>
            <span>
                <i className="fas fa-headphones"></i>
                {item}
            </span>
        </li>
    )
}

export default MenuItem
