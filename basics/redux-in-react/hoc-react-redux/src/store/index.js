import {createStore, combineReducers, applyMiddleware} from "redux";
import {userState, userReducer} from "./user"
import applyMiddleAware, {logMiddleAware, reduxApplyAware, reduxLogMiddleAware, reduxThunkMiddleAware} from "./util";

const storeData = {
    user: userState
}

const reducers = combineReducers({
    user: userReducer
})

// module.exports = createStore(reducers,storeData,applyMiddleware(reduxLogMiddleAware))
let store = createStore(reducers, storeData)
// applyMiddleAware(store, logMiddleAware);

reduxApplyAware(store,reduxLogMiddleAware(),reduxThunkMiddleAware());
// 增加 中间件
// module.exports = store;
export default store;