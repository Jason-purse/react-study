import {createSlice} from "@reduxjs/toolkit"

const layoutSlice = createSlice({
    name: "layout",
    initialState: {
        headerConfig: {
            /**
             * 用来控制顶级Header 是否需要固定 ..
             */
            isFixed: false,
            /**
             * 是否为家目录
             */
            isHome: false,

            // false
            isAlpha: false
        }
    },
    reducers: {
        changeHeaderConfigAction(state, {payload}) {
            state.headerConfig = payload
        }
    }
})

export const {
    changeHeaderConfigAction
} = layoutSlice.actions
export default layoutSlice.reducer