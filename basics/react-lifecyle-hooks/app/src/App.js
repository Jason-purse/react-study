import logo from './logo.svg';
import './App.css';
import TableContainer from './component-to-slot/TabContainer'
import ThemeContext from "./context-api/ThemeContext";
import ContextUser from "./context-api/ContextUser"
import Hello from "./class-component/Hello"

function App(props) {
    return (
        <div className="App">
            <TableContainer/>
            <ThemeContext.Provider value={"123"}>
                <ContextUser />
            </ThemeContext.Provider>

            <Hello />
        </div>
    );
}

export default App;
