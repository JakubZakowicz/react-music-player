import React from 'react'
import SearchBox from './SearchBox'
import AddButton from './AddButton'
import MusicList from './MusicList'


function Screen() {
    return (
        <div className="container-lg">
            <div className="row mt-5 justify-content-between">
                <SearchBox />
                <AddButton />
            </div>
            <div className="row">
                <div className="col-lg-9 col-md-12 col-12">
                    <MusicList />
                </div>
            </div>
        </div>
    )
}

export default Screen
