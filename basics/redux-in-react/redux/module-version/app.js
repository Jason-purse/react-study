const store = require("./store")
const {createEnd,createStart,createStarting} = require("./store/actionCreator")
const unSubscribe = store.subscribe(() => {
    console.log(store.getState())
})

console.log(store.getState());

store.dispatch(createEnd())
store.dispatch(createStarting())
store.dispatch(createStart())


unSubscribe()