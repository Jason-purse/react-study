import {useEffect, useLayoutEffect, useState} from "react";

export default function () {
    useLayoutEffect(() => {
        console.log("use layout effect")
    })

    useEffect(() => {
        console.log("use effect")
    })
    console.log("render")

    const [value,setValue] = useState(0)
    return(
        <div style={{border: 'solid black 1px'}} onClick={() => setValue(Math.random())}>
            use layout effect,{value}
        </div>
    )
}