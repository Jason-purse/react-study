import React, {memo} from 'react';
import Header from "./header";
import Footer from "./footer";
import {Outlet} from "react-router-dom";

export default memo(() => {
    return (
        <div className={'home-area'}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
});