/**
 * 产生中间件函数 ...
 */

export default function applyMiddleAware(store, ...middlewares) {
    middlewares.forEach(e => {
        e(store)
    })
}

export function logMiddleAware(store) {
    const dispatch = store.dispatch;

    store.dispatch = function (arg) {
        console.log("dispatch before,args: " + arg)
        dispatch(arg)
        console.log("dispatch after")
    }
}


export function reduxLogMiddleAware() {
    return next => {
        return action => {
            console.log("dispatch before - redux, action: " + action)
            next(action)
            console.log("dispatch after - redux")
        }
    }
}

export function reduxThunkMiddleAware() {
    return next => {

        // 这里为什么需要将next 函数记录一下 ..
        // 因为action 执行的函数(有可能继续派发 函数式action),那么如果使用 raw(原始next) 则无法处理 ..
        // 于是,我们通过 将新的next 记录,让它继续使用新的next 来解析函数式action
        // 才能够使得流程正确 ...
        // 这也是为什么 中间件是一个柯里化函数 ..
        // 因为就是monkey patching ..
        const raw = next;
        next = action => {
            if (action instanceof Function || typeof action === 'function') {
                console.log("函数 action")
                action(next)
            } else {
                // 执行 ...
                console.log("普通action")
                raw(action)
            }
        }

        return next;
    }
}


// 将柯里化中间件 执行重组 dispatch 函数 ...
export function reduxApplyAware(store, ...func) {
    let dispatch = store.dispatch;

    func.forEach(e => {
        store.dispatch = e(dispatch)
        // 继续交替 ...
        dispatch = store.dispatch
    })
}