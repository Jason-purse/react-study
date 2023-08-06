import React from 'react'
export default class Index  extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: 'hello world'
        }
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // 可以和旧的属性进行比较
        // 例如 this.props this.state
        // 基于 消息是否发生了改变来进行组件更新判断
        // if(this.state.message == nextState.message) {
        //     return false;
        // }
        // return true;
    }

    render() {
        return <div>Hello world</div>
    }

}