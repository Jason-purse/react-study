import {useStore} from "react-redux";

const useReduxHook = (model) => {
    let proto = model.__proto__;
    let store = useStore();
    // 修改此Model的原型链
    model.__proto__ = {
        ...store,
        __proto__: proto
    }
}
export default useReduxHook