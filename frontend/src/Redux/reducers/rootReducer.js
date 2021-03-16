
import recordsReducer from './records'
const {combineReducers} = require("redux")

const rootReducer = combineReducers({
    recordsReducer
})

export default rootReducer