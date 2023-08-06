const {createStore} = require("redux");
const storeData = {
    counter: 10,
    name: 'jasonj',
    message: null
}

// 这里只用了一个reducer
// 但是现实项目中,存在复合的reducer ..

// 所以我们需要高阶函数,组合reducer ..

// 所以我们尝试改进,并且仅有第一次 才使用初始化状态

// module.exports = createStore((store,action) => storeData)

// 所以reducer的格式是

function globalReducer(state =  storeData,action) {
    // 实际上我们可能需要根据 action 来产生新的state 并返回
    return {...state, ... handleAction(state,action)};
}


function handleAction(state,{type,payload}) {
    switch (type) {
        case 'begin':
            return {
                message: "begin"
            }
        case 'starting':
            return {
                message: "starting"
            }

        case 'end':
            return {
                message: "end"
            }
    }
}

module.exports = createStore(globalReducer)