import {ComponentModel, useDataHook, useReduxHook} from "../../../hooks/use-vue2-component-model";
import {useNavigate} from "react-router-dom";
import {changeDetailInfoActon} from "../../../store/detail";

export const useModel = () => {
    return useDataHook(Model, null,[useReduxHook])
}

class Model extends ComponentModel {

    useLogicHooks() {
        this.useInitHook()
    }

    useInitHook = () => {
        // 每次都更新
        this.refs.navigate = useNavigate()
    }


    navigateItemDetailAction = (item) => {
        // 放入store..
        // 假的正常情况不会这样玩
        this.dispatch(changeDetailInfoActon(item))
        // 导航到详情页面 ..
        this.refs.navigate('../detail')
    }
}