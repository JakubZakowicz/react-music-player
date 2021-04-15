import { ADD_PLAYLIST_ITEM, CHANGE_SEARCH_BOX } from '../Actions/ItemsActions'

const initialStore = {
    menuItems: {
        menu: ['explore', 'podcast'],
        myMusic: ['recently played', 'favourite songs'],
        playlists: ['rap playlist', 'chill playlist']
    },
    searchBox: ''
}

const ItemsReducer = (state = initialStore, action) => {
    switch(action.type) {
        case ADD_PLAYLIST_ITEM:
            return { ...state, menuItems: { ...state.menuItems, playlists: [...state.menuItems.playlists, action.payload.item]} }
        case CHANGE_SEARCH_BOX:
            return { ...state, searchBox: action.payload.value }
        default:
            return state
    }
}

export default ItemsReducer 