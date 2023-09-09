import {forwardRef, memo, useImperativeHandle, useRef} from "react";

// const Child = memo(forwardRef((props, ref) => {
//     console.log("render")
//     return (
//         <input ref={ref}></input>
//     )
// }))
// 上述通过 memo 包裹没有任何性能优化
// 因为属性 / state 都没有发生变化(对于子组件来说)
// ref 保持不变 ..
// 控制父组件行为,看下一个组件
// const Child = forwardRef((props, ref) => {
//     console.log("render")
//     return (
//         <input ref={ref}></input>
//     )
// })


const Child = forwardRef((props, ref) => {
    // 主打的一个作用就是装饰/ 封闭/覆盖、代理的作用 ..
    // 通过这个,我们子组件可以选择,是否暴露确定的方法给外组件
    useImperativeHandle(ref, () => {
        const data = {}
        Object.defineProperty(data, 'value', {
            set(val) {
                console.log("set")
            },
            get() {
                console.log("get")
            }
        })

        return data
    })
    return (
        <input ref={ref}/>
    )
})

export default function (props) {
    const ref = useRef();

    return (
        <div>
            {/*// 我们发现这种方式 父组件的权利太大了*/}
            <button onClick={() => {
                ref.current && (ref.current.value = '')
            }
            }>清除
            </button>
            <button onClick={() => {
                ref.current && (ref.current.value = '赋值')
            }
            }>赋值
            </button>
            <Child ref={ref}/>
        </div>
    )
}