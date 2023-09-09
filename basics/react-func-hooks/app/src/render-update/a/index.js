import {useState} from "react";

export default function (props) {
    console.log("a")
    let [state, setState] = useState(0)
    return (
        <>
            <div>
                <div>a</div>
                <button onClick={() => setState(Math.random())}>点击,更新a</button>
            </div>
        </>
    )
}