import { ADD_PLAYLIST_ITEM } from '../Actions/ItemsActions'

const initialStore = {
    menuItems: {
        menu: ['explore', 'podcast'],
        myMusic: ['recently played', 'favourite songs'],
        playlists: ['rap playlist', 'chill playlist']
    }
}

const ItemsReducer = (state = initialStore, action) => {
    switch(action.type) {
        case ADD_PLAYLIST_ITEM:
            return { ...state, menuItems: { ...state.menuItems, playlists: [...state.menuItems.playlists, action.payload.item]} }
        default:
            return state
    }
}

export default ItemsReducer 