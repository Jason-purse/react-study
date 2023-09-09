import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css'
import '@/assets/css/index.less'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

import store from "./store";
import {ThemeProvider} from "styled-components";
import {ThemeProvider as MUIThemeProvider, THEME_ID} from '@mui/material/styles'
import theme, {muiTheme, antDesignTheme} from "./assets/theme";
import {ConfigProvider} from "antd";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ConfigProvider theme={antDesignTheme}>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <MUIThemeProvider theme={{[THEME_ID]: muiTheme}}>
                        <HashRouter>
                            <App/>
                        </HashRouter>
                    </MUIThemeProvider>
                </ThemeProvider>
            </Provider>
        </ConfigProvider>
    </React.StrictMode>
)
;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
