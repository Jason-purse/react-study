import logo from './logo.svg';
import './App.css';
import {useContext} from "react";
import ReduxContext from "./context/ReduxContext";
import store from './store'
import {createStart} from './store/actionCreator'

function App() {

  let context = useContext(ReduxContext);
  return (
    <div className="App">
     <h1>redux usage</h1>
      <p>{context.user.message}</p>
      <div>
        <button onClick={() => store.dispatch(createStart())}>设置为Hello world</button>
      </div>
    </div>
  );
}

export default App;
