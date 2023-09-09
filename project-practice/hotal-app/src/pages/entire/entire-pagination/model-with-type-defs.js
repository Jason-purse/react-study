import {ComponentModel, useDataHook} from "../../../hooks/use-vue2-component-model";

export const useModel = (mixin) => {
    return useDataHook(Model, mixin)
}

class Model extends ComponentModel {


    useLogicHooks() {
        this.useInitHook();
    }

    useInitHook = () => {
        const count = Math.ceil(this.mixin.totalCount / 20)
        const start = this.mixin.currentPage * 20 + 1
        const end = (this.mixin.currentPage + 1) * 20

        this.variables.start = start
        this.variables.end = end
        this.variables.total = count


    }

    /**
     * 假设需要优化 pageChangeHandle
     * @param _
     * @param page
     */
    pageChangeHandle(page) {
        return (() => {
            this.mixin.onPageChangeCallback(page)
        })()
    }
}