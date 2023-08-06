import {useContext, useEffect, useState} from "react";
import ReduxContext from "../context/ReduxContext";

// 如果用store,那么强耦合 store,发布成包,无法被使用 ..
// 但是我们通过react 钩子,那么就没有这些问题 ..
// 通过上下文 动态传入 store ...
/**
 * 高阶函数 ..
 *
 * 用于处理 state 映射
 * @param fun
 * @returns {function(*): function(*): *}
 */
export default function (fun) {
    return function (Component) {
        return function (props) {
            const context = useContext(ReduxContext);
            let state = fun(context.getState())
            const [value,setValue] = useState(state)
            useEffect(() => {
                // 返回这个函数(用于卸载)
                return context.subscribe(() => {
                    // 重新更新值 ..
                    setValue(fun(context.getState()))
                });
            },[value])
            return (
                // 传递 dispatch 方法 ..
                <Component {...value} {...props} dispatch={context.dispatch} />
            )
        }
    }
}