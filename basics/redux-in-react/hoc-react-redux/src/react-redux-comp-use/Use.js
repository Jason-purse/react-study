import {connect} from "react-redux";
import {createStart} from "../store/actionCreator";

export default connect(
    state => ({
        message: state.user.message
    }),
    dispatch => {
        return {
            handleBegin: () => dispatch(createStart())
        }
    })(function ({message, handleBegin}) {
    return (
        <div>
            <h1>with react-redux use connect</h1>
            <p>message: {message}</p>
            <div>
                <button onClick={() => handleBegin()}>点击切换为hello world</button>
            </div>
        </div>
    )
})