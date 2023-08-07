const {BEGIN, STARTING, END, ASYNC_BEGIN} = require('./actionConstriant')
module.exports = {
    createStart() {
        return {
            type: BEGIN
        }
    },
    createStarting() {
        return {
            type: STARTING
        }
    },
    createEnd() {
        return {
            type: END
        }
    },
    createAsyncStart() {
        return (dispatch) => {
            setTimeout(() => {
                dispatch(next => {
                    return next({
                        type: ASYNC_BEGIN
                    })
                })
            }, 2000)
        }
    }
}