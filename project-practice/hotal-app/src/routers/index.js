import React from "react";

const Home = React.lazy(() => import('@/pages'))
const Main = React.lazy(() => import('@/pages/home/main'))
const Detail = React.lazy(() => import('@/pages/detail'))
const Entire = React.lazy(() => import('@/pages/entire'))

const routers = [
    {
        path: '/',
        element: <Home/>,
        children: [
            {
                path: '/home',
                index: true,
                element: <Main/>
            },
            {
                path: 'detail',
                element: <Detail/>
            },
            {
                path: 'entire',
                element: <Entire/>
            }
        ]
    }
]

export default routers;