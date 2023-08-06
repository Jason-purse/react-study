import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counter";

export default configureStore({
    reducer: {
        counter: counterReducer
    },
    devTools: true,
    // 自动集成了redux-thunk
    // middleware

    // 初始状态state,可以在服务端渲染的时候水合一些数据
    // preloadedState
})