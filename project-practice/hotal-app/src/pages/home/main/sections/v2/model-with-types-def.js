import {ComponentModel, useDataHook} from "../../../../../hooks/use-vue2-component-model";
import {useRef} from "react";

export function useModel(props) {
    return useDataHook(Model, props)
}

class Model extends ComponentModel {

    static label = 'home-section-v2'

    static dataCreator() {
        // 需要一些属性
        return {
            // 属性切换 ..
            name: ''
        }
    }


    useLogicHooks = () => {
        // 记录 当前 tab 名称(并保存 ref 用于后续动作处理而引起的动作)
        this.useNameRefWithState()
        this.fetchCityTabs()
    }

    // 用来保存 父组件传递的属性
    useNameRefWithState = () => {
        let {infoData} = this.mixin;
        const initialName = Object.keys(infoData.dest_list)?.[0] || ''

        // -------------------- 开始 ----------------------------
        // 以下这两个代码 就是为了解决 使用useEffect 渲染3次的问题 ..
        // 当然还有其他解决方式,例如只渲染一次,也就是在父组件中,进行条件判断来决定是否需要显示 ..
        // 但是那样的话,组件里面的title 就无法渲染了 ..
        let nameRef = useRef();
        // console.log(nameRef)
        if (!nameRef.current) {
            nameRef.current = initialName;
        }
        // nameRef
        this.refs.nameRef = nameRef;

        // console.log(this)
    }

    fetchCityTabs = () => {
        const cityTabsRef = useRef();
        this.refs.cityTabsRef = cityTabsRef
        cityTabsRef.current = this.mixin.infoData.dest_address?.map(item => item.name);
    }

    /**
     * 切换 city tabs 动作
     */
    switchCityTabsAction = (index, name) => {
        console.log(name)
        this.refs.nameRef.current = name
        console.log(this.refs.nameRef)
        // 触发更新
        this.setName(name)
    }
}