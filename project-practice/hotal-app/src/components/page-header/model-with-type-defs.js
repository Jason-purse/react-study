import {ComponentModel, useDataHook, useReduxHook, useScrollPosition} from "../../hooks/use-vue2-component-model";
import {useEffect, useRef} from "react";

export function useModel() {
    return useDataHook(Model, {}, [useReduxHook])
}


export class Model extends ComponentModel {

    static dataCreator() {
        return {
            isSearch: false,
            isAlpha: false
        }
    }

    useLogicHooks = () => {
        this.useBannerPosition()
    }

    useBannerPosition = () => {
        const {isHome, isFixed} = this.getState().layout.headerConfig;
        this.useStore(isFixed)
        const {isSearch, isAlpha} = this.data
        console.log(isSearch)
        /** 其他hooks的逻辑 */
        const {scrollY} = useScrollPosition()
        // 非滚动时且在顶部(且非搜索) 那么就透明
        if (isHome && scrollY === 0 && !isSearch) {
            this.setIsAlpha(true)
            this.setIsSearch(true)
        }
        // 当滚动位置大于0,并且是搜索的时候,则不透明(并且设置非搜索)
        if (isHome && isAlpha && scrollY > 0 && isSearch) {
            this.setIsAlpha(false)
            this.setIsSearch(false)
        }

        // 记录之前在Y轴上滚动的位置
        const prevY = useRef(0)
        // 如果没有开启搜索,则记录之前的位置
        if (!isSearch) prevY.current = scrollY

        // 判断上一次和当前滚动距离是否大于30(并且它是在搜索状态下),那么就不搜索 ..
        if (Math.abs(prevY.current - scrollY) > 30 && isSearch) {
            console.log("关闭")
            this.setIsSearch(false)
        }
    }

    useStore = (fixed) => {
        const isFixedRef = useRef(false)
        this.refs.isFixedRef = isFixedRef;
        isFixedRef.current = fixed
    }

    /** 事件处理逻辑 */
    searchBarClickHandle = () => {
        this.setIsSearch(true)
    }

}