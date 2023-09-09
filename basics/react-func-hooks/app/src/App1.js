import {useRef, useState} from "react";

// 那么由于它被整个应用 程序共享,我们就需要一种新的形式, 来唯一的持有一块缓存 ..
// 那么useRef 就是这个最佳选择 ...
const data = {
    count: 0
}
export default function (props) {
    const [count, setCount] = useState(0)

    const countRef = useRef(count)
    //
    // // 每次将最新的值 掌握在手里...
    countRef.current = count
    // data.count = count;
    const onChange = () => {
        setCount(data.count + 10)
    }

    const [pagination, setPagination] = useState({
        onChange,
        setPagination: onChange,
    });

    return (
        <div>
            {count}
            <div>
                <button onClick={e => pagination.onChange()} style={{cursor: 'pointer'}}>+</button>
            </div>
        </div>
    );
}