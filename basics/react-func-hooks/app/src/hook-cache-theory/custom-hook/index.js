import {useCallback, useMemo, useState} from "react";

export default function useCustomHook() {
    let [count, setCount] = useState(0)


    // return [count, (param) => {
    //     setCount(param)
    //
    //     // 还可以做其他的事情 ..
    //     console.log("更新成功")
    // }]


    // 我就是缓存第一个函数 ..
    const func = useCallback((param) => {
        setCount(param)
        console.log("更新成功")
    }, [])

    return [count, func]
}