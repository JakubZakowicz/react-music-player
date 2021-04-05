import React from 'react'

function MenuItem({ item }) {
    return (
        <li className="pb-2">
            <span className="text-capitalize">
                <i className="fas fa-headphones"></i>
                {item}
            </span>
        </li>
    )
}

export default MenuItem