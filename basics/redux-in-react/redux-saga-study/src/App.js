import logo from './logo.svg';
import './App.css';
import {connect} from "react-redux";
import UserComponent from './components/UserComponent'

function App({dispatch, oneResults, allResults}) {
    return (
        <div className="App">
            <UserComponent dispatch={dispatch} allResults={allResults} oneResults={oneResults}/>
        </div>
    );
}

export default connect(state => {
    return {
        oneResults: state.one,
        allResults: state.many
    }
})(App)
