const {createStore,combineReducers} = require("redux");
const {userState,userReducer} = require("./user")
const storeData = {
    user: userState
}

const reducers = combineReducers({
    user: userReducer
})

module.exports = createStore(reducers,storeData,e => e)