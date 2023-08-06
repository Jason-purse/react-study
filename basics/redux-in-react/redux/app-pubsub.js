const store = require("./store")

let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch({
    type: 'begin'
})


store.dispatch({
    type: 'starting'
})


// 取消订阅
// 根据返回的函数去取消订阅
unsubscribe()


// 这个action 还可以继续优化(枚举化所有需要的actions)

// 以及通过函数创建action 减少修改代码的范围

// 查看 module-version 下的版本
