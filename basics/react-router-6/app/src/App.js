import './App.css';
import {Link, Navigate, Route, Routes, useRoutes, useSearchParams} from "react-router-dom";
import router from "./router";
import {useState} from "react";

function App() {

    //
    const [userouter, setUseRouter] = useState(false)

    return (
        <div className="App">
            <div className={'navs'}>
                <Link to={'?b=true'}>点击去b</Link>
                <Link to={'/c'}>点击去c</Link>
            </div>
            <div>
                <button onClick={e => setUseRouter(true)}>点击去C</button>
            </div>
            {useRoutes(router)}

            {/*这里可以假设一个场景,当b 表示登录页面,登录成功之后,永远返回c组件*/}
            {userouter && <Navigate to={'/c'}/>}
        </div>
    );
}

export default App;
