import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

// 异步action 依赖于 redux-thunk, 然后这个toolkit给我们提供了工具包 ..

// 虽然建议我们通过返回 payload 来通过extraReducer 进行处理,
// 但是 thunkAPI已经提供了 dispatch 所以,我们可以直接派发需要设置store的动作 ..
let asyncThunkAction = createAsyncThunk('getUserInfo', (payload, thunkAPI) => {

    console.log('执行')
    setTimeout(() => {
        thunkAPI.dispatch(
            slice.actions.add(10)
        )
    }, 3000)

    // 直接返回
    // 异步派发,redux-toolkit 分为3个阶段,挂起(pending),完成(fulfilled), 异常(reject)
    // 然后我们需要根据这个action ,去写这三个阶段的回调函数,来处理 数据到 store的设置 ..
    return Promise.resolve(['to-extra-reducer'])
})


let slice = createSlice({
    // redux-devtools 中显示的名称
    name: 'counter',
    initialState: {
        value: 0
    },
    // actions with execute
    reducers: {
        add(state, {payload}) {
            state.value = state.value + payload
        },
        sub(state, {payload}) {
            state.value -= payload
        }
    },
    extraReducers: {
        // 这里的payload 就是前面异步函数执行完毕的结果
        // 但是由于这个是pending,所以payload 是最开始 action 派发传递过来的负载
        [asyncThunkAction.pending]: (state, payload) => {
            console.log("pending ", payload)
        },
        // payload 已经返回成功 ..
        [asyncThunkAction.fulfilled]: (state, payload) => {
            console.log("fulfilled ", payload)
            // 这里我们也可以直接更新 state ..
        },
        // payload 获取失败,reject
        [asyncThunkAction.rejected]: (state, payload) => {
            console.log("rejected ", payload)
        }
    },
    // extraReducers 也可以接受一个builder函数,将这些 action 处理函数 链式配置 ..

    // extraReducers: builder => {
    //     builder.addCase(asyncThunkAction.pending,(state,action) => {
    //         ....
    //     })
    // }
});

export const {add, sub} = slice.actions

export const add10 = asyncThunkAction

export default slice.reducer