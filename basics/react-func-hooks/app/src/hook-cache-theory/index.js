import {useState} from "react";
import useCustomHook from "./custom-hook";

/**
 * 这个示例证明, custom-hook 是根据你的调用顺序来缓存的,跟你的值的改变没有关系 ...
 * @type {number}
 */
let count = 0;
export default function () {
    let [countData, setCountData] = useCustomHook()
    return (
        <>
            {countData}
            <button onClick={() => setCountData(countData + 10)}>跟新count</button>
        </>
    )
}