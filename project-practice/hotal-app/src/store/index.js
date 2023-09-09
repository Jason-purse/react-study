import {configureStore} from "@reduxjs/toolkit";
import DetailReducer from './detail'
import EntireReducer from './entire'
import HomeReducer from './home'
import LayoutReducer from './layout'

export default configureStore({
    reducer: {
        'detail': DetailReducer,
        'entire': EntireReducer,
        'home': HomeReducer,
        'layout': LayoutReducer
    }
})