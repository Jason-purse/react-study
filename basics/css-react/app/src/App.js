import logo from './logo.svg';
import './App.css';
import DivWrapper from "./components/div-wrapper";
import {CSSTransition, SwitchTransition} from "react-transition-group";
import {useState} from "react";

function App() {
    const [isShow, setShow] = useState(true)

    return (
        <div className="App">
            {/*<DivWrapper/>*/}

            <SwitchTransition mode={'out-in'}>
                {/*<CSSTransition  in={isShow} appear={true} classNames={'tr'} timeout={3000}>*/}
                {/*当结合switch Transition的时候,通过key 来实现两个组件的切换效果 .. 也就是其实创建了两个dom */}
                <CSSTransition key={isShow ? 'show' : 'close'} appear={true} classNames={'tr'} timeout={3000}>
                    <div onClick={() => {
                        console.log("点击")
                        setShow(!isShow)
                    }}>
                        哈哈哈哈
                    </div>
                </CSSTransition>
            </SwitchTransition>
        </div>
    );
}

export default App;
