import React from 'react'
import SearchBox from './SearchBox'
import AddButton from './AddButton'
import MusicList from './MusicList'


function Screen() {
    return (
        <div className="container-lg">
            <div className="row mt-5">
                <div className="d-flex justify-content-between">
                    <SearchBox />
                    <AddButton />
                </div>
            </div>
            <div className="row">
                <div className="col-9">
                    <MusicList />
                </div>
            </div>
        </div>
    )
}

export default Screen
