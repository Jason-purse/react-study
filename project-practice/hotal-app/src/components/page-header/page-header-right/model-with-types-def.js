import {ComponentModel, useDataHook} from "@/hooks/use-vue2-component-model";

/**
 * 自定义封装一下,万一有特殊要求 ..
 * @returns {*}
 */
export default function useModel() {
    return useDataHook(Model)
}

export class Model extends ComponentModel {

    // data() {} 函数
    static dataCreator() {
        return {showPanel: false}
    }

    // methods 直接反馈到类上,如果通过 ts,那么一切类型都存在定义
    showPanelAction = () => {
        this.setShowPanel(!this.data.showPanel)
    }

    // 逻辑Hooks
    useLogicHooks() {
        // 请求
    }

    // 注册
    registerAction(event) {
        alert("注册")
    }


    loginAction(event) {
        alert("登录")
    }

}

