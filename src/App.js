import React, { useState } from 'react'
import './App.css'
import Menu from './Components/Menu'
import Screen from './Components/Screen'
import AddPlaylist from './Components/AddPlaylist'
import MusicPlayer from './Components/MusicPlayer'
import MusicForm from './Components/MusicForm'

export const GlobalState = React.createContext()

function App() {

  const [playlistForm, setPlaylistForm] = useState(false)
  const [items, setItems] = useState({
      menu: ['explore', 'podcast'],
      myMusic: ['recently played', 'Favorite Songs'],
      playlists: ['rap playlist', 'chill playlist']
  })

  const [isMusicPlayer, setIsMusicPlayer] = useState({state: false, src: null})
  const [isAddForm, setIsAddForm] = useState(false)
  const [songIndex, setSongIndex] = useState(0)
  const [musicItems, setMusicItems] = useState([])

  return (
    <div className="app">
      <GlobalState.Provider value={{
          playlistForm, 
          setPlaylistForm, 
          setIsMusicPlayer, 
          setIsAddForm,
          musicItems,
          setMusicItems,
          songIndex,
          setSongIndex
        }} >
          <Menu items={items} />
          <Screen />
      
          { playlistForm 
            ?
              <AddPlaylist id="playlistForm" 
                setPlaylistForm={ setPlaylistForm } 
                items={items} 
                setItems={setItems} 
              /> 
            : 
              <></> 
            }

          { isMusicPlayer.state 
            ? 
              <MusicPlayer src={isMusicPlayer.src} /> 
            :
              <></> 
            }

          { isAddForm 
            ?
              <MusicForm />
            :
              <></>
          }
          
      </GlobalState.Provider> 
    </div>
  );
}

export default App;
