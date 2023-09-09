import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import App1 from "./App1";
import UseImperativeHandle from "./use-imperative-handle";
import UseLayoutEffect from "./use-layout-effect";
import HookCacheTheory from "./hook-cache-theory";
import RenderUpdate from "./render-update";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
   <>
       {/*<App />*/}
       {/*  <App1/>*/}
       {/*  <UseImperativeHandle/>*/}
       {/*<UseLayoutEffect />*/}
       {/*<HookCacheTheory/>*/}
       {/*<RenderUpdate />*/}
   </>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
