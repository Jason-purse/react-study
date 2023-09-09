import './App.css';
import {useCallback, useRef, useState} from "react";

function App() {
    const [count, setCount] = useState(0)

    console.log("render" + count)
    const callback = () => {
        console.log("onChange", count)
        setCount(count + 10)
    }

    // useCallback 它的本质是,受后面的变量的影响,而每次选择是使用 之前缓存的函数,还是新传入的函数
    // 用来解决 闭包陷阱
    // 还有一个性能优化的地方 ..
    // 组件 会根据state / props 变化而实现render 函数调用(那么减少render函数调用,就是性能优化)
    // 那么如果总是使用之前的函数,那么如果这个函数传递给子组件,那么仅有函数变化,才会重新渲染组件 ...
    const onChange = useCallback(callback, [count]);
    const [pagination, setPagination] = useState({
        onChange,
        setPagination: onChange,
    });

    // 表示有刷新

    if (callback === onChange) {
        setPagination({
            onChange,
            setPagination: onChange
        })
    }

    return (
        <div>
            {count}
            <div>
                <button onClick={e => pagination.onChange()} style={{cursor: 'pointer'}}>+</button>
            </div>
        </div>
    );
}

export default App;
