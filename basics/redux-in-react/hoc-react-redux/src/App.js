import logo from './logo.svg';
import './App.css';
import WithRedux from "./hoc/WithRedux";
import store from './store'
import {createAsyncStart, createStart} from './store/actionCreator'
import Use from "./react-redux-comp-use/Use";
function App({message,dispatch}) {
  return (
    <div className="App">
      <h1>with redux for custom hoc</h1>

      <p>message: {message}</p>

        <div>
            {/*<button onClick={() => store.dispatch(createStart())}>修改Message 为 hello world</button>*/}

            {/*// 优化成 dispatch 直接传递过来*/}
            <button onClick={() => dispatch(createStart())}>修改Message 为 hello world</button>
            <button onClick={() => dispatch(createAsyncStart())}>异步修改Message 为 hello world</button>
        </div>
        <hr/>
        <div>
            <Use />
        </div>
    </div>
  );
}

export default WithRedux(state => state.user)(App);
