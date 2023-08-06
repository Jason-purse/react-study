import {connect} from "react-redux";
import {add, sub, add10} from "../store/counter";

export default connect(
    state => {
        return {
            value: state.counter.value
        }
    },
    dispatch => {
        return {
            add: (value) => dispatch(add(value)),
            sub: (value) => dispatch(sub(value)),
            add10: value => dispatch(add10())
        }
    })(
    function ({value, add, sub, add10}) {
        return (
            <div>
                <h1>计数器</h1>
                <div>
                    <span>{value}</span>
                </div>
                <div>
                    <span onClick={e => add(1)} style={{margin: '5px 10px', cursor: 'pointer'}}>+</span>
                    <span onClick={e => sub(1)} style={{cursor: "pointer"}}>-</span>
                    <span onClick={add10} style={{margin: '5px 10px', cursor: "pointer"}}>-10</span>
                </div>
            </div>
        )
    }
)