import { combineReducers } from "redux";
import MusicPlayerReducer from './Reducers/MusicPlayerReducer'
import PopupReducer from './Reducers/PopupReducer'
import ItemsReducer from './Reducers/ItemsReducer'

export default combineReducers({
    MusicPlayerReducer,
    PopupReducer,
    ItemsReducer
})