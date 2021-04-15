import React from 'react'
import Menu from './Menu/Menu'
import MusicView from './MusicView'
import AddPlaylist from './Popups/AddPlaylist'
import MusicPlayer from './Popups/MusicPlayer'
import MusicForm from './Popups/MusicForm'
import MenuBars from './Menu/MenuBars'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

function MainView({ isMusicPlayer, isAddForm, isPlaylistForm, isMenu }) {

    const [width, setWidth] = React.useState(window.innerWidth)
    React.useEffect(() => {

        function handleResize() {
            if((width > 991 && window.innerWidth < 991) || (width < 991 && window.innerWidth > 991))
                setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)

        return _ =>
            window.removeEventListener('resize', handleResize)
    })

    return (
        <>
          {(window.innerWidth < 991)
            ?<CSSTransition in={isMenu} timeout={300} classNames="menu-display" unmountOnExit>
              <Menu />
            </CSSTransition>
            : <Menu />
          }
          
          <MusicView />

          <CSSTransition in={isPlaylistForm} timeout={100} classNames="add-playlist" unmountOnExit>
            <AddPlaylist />
          </CSSTransition>

          <CSSTransition in={isMusicPlayer} timeout={200} classNames="music" unmountOnExit>
            <MusicPlayer />
          </CSSTransition>

          <CSSTransition in={isAddForm} timeout={100} classNames="add-form" unmountOnExit>
            <MusicForm />
          </CSSTransition>
          
          <MenuBars />
        </>
    )
}

function mapStateToProps(store) {
    const { isMusicPlayer, isAddForm, isPlaylistForm, isMenu } = store.PopupReducer
    return { isMusicPlayer, isAddForm, isPlaylistForm, isMenu }
}

export default connect(mapStateToProps) (MainView)
