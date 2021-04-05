import React from 'react'
import Menu from './Menu/Menu'
import MusicView from './MusicView'
import AddPlaylist from './Popups/AddPlaylist'
import MusicPlayer from './Popups/MusicPlayer'
import MusicForm from './Popups/MusicForm'
import MenuBars from './Menu/MenuBars'
import { connect } from 'react-redux'

function MainView({ isMusicPlayer, isAddForm, isPlaylistForm }) {

    return (
        <>
          <Menu />
          <MusicView />
          
          { isPlaylistForm 
            ? <AddPlaylist /> 
            : <></> 
          }
          
          { isMusicPlayer
            ? <MusicPlayer /> 
            : <></> 
          }

          { isAddForm 
            ? <MusicForm />
            : <></> 
          }

          <MenuBars />
        </>
    )
}

function mapStateToProps(store) {
    const { isMusicPlayer, isAddForm, isPlaylistForm } = store.PopupReducer
    return { isMusicPlayer, isAddForm, isPlaylistForm }
}

export default connect(mapStateToProps) (MainView)
