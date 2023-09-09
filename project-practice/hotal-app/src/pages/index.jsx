import {Navigate, useLocation} from "react-router-dom";
import React from "react";
import Home from "./home";

/**
 * 做默认路由配置 ...
 * @returns {JSX.Element}
 */
export default function () {
    let pathname = useLocation().pathname;
    let push = (pathname === '/' || pathname ==='')
    return (
        <>
            <Home/>
            {/*通过元素 实现导航*/}
            <Navigate to={ push ? 'home' : pathname} replace={!push}/>
        </>
    )
}