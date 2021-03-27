import React from 'react'

function MenuBars({ setIsMenu}) {
    return (
        <span className="menu-bars" onClick={() => setIsMenu(prevState => !prevState)}>
            <i className="fas fa-bars"></i>
        </span>
    )
}

export default MenuBars
