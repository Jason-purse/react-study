import A from "../components/a";
import B from "../components/b";
import C from "../components/c/c";
import {Outlet} from "react-router-dom";

export default [
    {
        path: '/',
        element: <A/>,
        children: [
            {
                path: '',
                element: <>
                    <div style={{border: 'solid 2px black'}}>
                        <Outlet/>
                    </div>
                </>,
                children: [
                    {
                        // index 表示默认子路由 ..
                        // 如果你在外层加了更多的默认子路由,那么记得设置路由出口 ...
                        index: true, // 设置B为默认子路由
                        path: '',
                        element: <B/>,
                    },
                    {
                        path: 'c',
                        element: <C/>,
                    },
                ]
            }
        ],
    },
];