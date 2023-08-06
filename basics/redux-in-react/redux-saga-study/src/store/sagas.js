import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'

// worker Saga : 将在 USER_FETCH_REQUESTED action 被 dispatch 时调用
function* fetchUser(action) {
    try {
        const user = yield new Promise(resolve => {
            setTimeout(() => {
                resolve("request success")
            }, 1000)
        })

        yield put({type: action.type + "-REAL", payload: user});
    } catch (e) {
        // pass
    }
}


/*
  也可以使用 takeLatest

  不允许并发，dispatch 一个 `USER_FETCH_REQUESTED` action 时，
  如果在这之前已经有一个 `USER_FETCH_REQUESTED` action 在处理中，
  那么处理中的 action 会被取消，只会执行当前的
*/
function* mySaga() {
    yield takeEvery("MANY", fetchUser);
    yield takeLatest("ONE", fetchUser);
}

export default mySaga;