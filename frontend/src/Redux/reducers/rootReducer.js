
import recordsReducer from './recordsReducer';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['recordsReducer']
}

const {combineReducers} = require("redux")

const rootReducer = combineReducers({
    recordsReducer
})

export default persistReducer(persistConfig, rootReducer)