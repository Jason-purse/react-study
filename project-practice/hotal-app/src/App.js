import './App.less';
import routes from '@/routers'
import {Outlet, useRoutes} from "react-router-dom";
import {Suspense} from "react";
import PageLoading from "./components/page-loading";
import PageHeader from "./components/page-header";

function App() {
    return (
            <div className="App">
                <PageHeader/>
                <Suspense fallback={<PageLoading/>}>
                    {useRoutes(routes)}
                </Suspense>
                <Outlet/>
            </div>
    );
}

export default App;
