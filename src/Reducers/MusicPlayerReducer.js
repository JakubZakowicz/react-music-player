import {
    NEXT_SONG,
    PREVIOUS_SONG,
    TOGGLE_PLAY,
    TOGGLE_MUTED,
    CHANGE_CURRENT_TIME,
    CHANGE_DURATION,
    CHANGE_VOLUME
} from '../Actions/MusicPlayerActions'
import { TOGGLE_MUSIC_PLAYER } from '../Actions/PopupActions'

const initialStore = {
    isPlaying: false,
    currentTime: '0.00',
    duration: 0,
    volume: 1,
    isMuted: false,
    index: 0
}

function MusicPlayerReducer(state = initialStore, action) {
    let index
    switch(action.type) {
        case TOGGLE_PLAY:
            return {...state, isPlaying: !state.isPlaying}
        case NEXT_SONG:
            index = state.index
            if(index === 2) index = 0
            else index++
                
            return { ...state, index: index }
        case PREVIOUS_SONG:
            index = state.index
            if(index === 0) index = 2
            else index-- 

            return { ...state, index: index }
        case TOGGLE_MUTED: 
            return { ...state, isMuted: action.payload.state }
        case CHANGE_CURRENT_TIME:
            return { ...state, currentTime: action.payload.currentTime }
        case CHANGE_DURATION:
            return { ...state, duration: action.payload.duration }
        case CHANGE_VOLUME:
            return { ...state, volume: action.payload.volume }
        case TOGGLE_MUSIC_PLAYER:
            return { ...state, index: action.payload.index, isPlaying: false }
        default:
            return state
    }
}

export default MusicPlayerReducer