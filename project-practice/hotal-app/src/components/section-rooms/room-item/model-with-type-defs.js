import {ComponentModel, useDataHook} from "../../../hooks/use-vue2-component-model";
import {useCallback, useRef} from "react";

export const useModel = (mixin) => {
    let dataHook = useDataHook(Model, mixin);
    // 尝试缓存
    let callback = useCallback(() => {
        dataHook.oldOptionalItemClickHandle(dataHook.mixin.itemData)
    }, []);
    if (callback !== dataHook.optionalItemClickHandle) {
        dataHook.oldOptionalItemClickHandle = dataHook.optionalItemClickHandle
        dataHook.optionalItemClickHandle = callback
    }
    return dataHook
}

class Model extends ComponentModel {

    static dataCreator() {
        return {
            selectIndex: 0
        }
    }

    useLogicHooks() {
        this.useInitHook()
    }

    useInitHook = () => {
        this.refs.swiperRef = useRef()
    }


    /**
     * 可选事件处理 ..
     */
    optionalItemClickHandle = (e) => {
        this.mixin.itemClick && this.mixin.itemClick(e)
    }

    controlClickHandle = (event, isNext = true) => {
        event.stopPropagation()
        if (isNext) {
            this.refs.swiperRef.current.next()
        } else {
            this.refs.swiperRef.current.prev()
        }

        let newIndex = isNext ? this.data.selectIndex + 1 : this.data.selectIndex - 1

        // 边缘范围判断
        if (newIndex < 0) {
            newIndex = this.mixin.itemData.picture_urls.length - 1
        }
        if (newIndex > this.mixin.itemData.picture_urls.length - 1) {
            newIndex = 0
        }
        // 刷新视图
        this.setSelectIndex(newIndex)
    }

}