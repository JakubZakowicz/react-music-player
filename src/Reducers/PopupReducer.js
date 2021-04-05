import {
    TOGGLE_MUSIC_PLAYER,
    TOGGLE_ADD_FORM,
    TOGGLE_PLAYLIST_FORM,
    TOGGLE_MENU
} from '../Actions/PopupActions'


const initialStore = {
    isMusicPlayer: false,
    isAddForm: false,
    isPlaylistForm: false,
    isMenu: false
}

function PopupReducer(state = initialStore, action) {

    switch(action.type) {
        case TOGGLE_MUSIC_PLAYER:
            return { ...state, isMusicPlayer: action.payload.state }
        case TOGGLE_ADD_FORM:
            return { ...state, isAddForm: action.payload.state }
        case TOGGLE_PLAYLIST_FORM:
            return { ...state, isPlaylistForm: action.payload.state }
        case TOGGLE_MENU:
            return { ...state, isMenu: !state.isMenu }
        default:
            return state
    }
}

export default PopupReducer