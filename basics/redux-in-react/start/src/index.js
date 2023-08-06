import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import ReduxContext from "./context/ReduxContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
// 全局定义一次,没必要取消订阅
store.subscribe(() => {
    root.render(
        <React.StrictMode>
            <ReduxContext.Provider value={store.getState()}>
                <App />
            </ReduxContext.Provider>
        </React.StrictMode>
    );
})

// 写两个 ..
// 这是最笨的形式 ..
root.render(
    <React.StrictMode>
        <ReduxContext.Provider value={store.getState()}>
            <App />
        </ReduxContext.Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
