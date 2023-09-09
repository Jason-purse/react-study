import {ComponentModel, useDataHook} from "@/hooks/use-vue2-component-model";
import api from "./api";
import {useEffect} from "react";
import {changeHeaderConfigAction} from "../../../store/layout";
import {useReduxHook} from "../../../hooks/use-vue2-component-model";

export function useModel() {
    // useHooks(model)
    return useDataHook(Home,{},[useReduxHook]);
}

/**
 * react 函数式组件
 *
 *
 * 1. 代码量更紧凑,视图和数据交互更强
 * 2. hooks 功能很强
 * 3. 生命周期
 * 4. 性能优化(scu) -> 类组件(shouldComponentUpdate) -> 对对象的一个属性的地址或者值的判断来决定是否更新组件..
 *
 * 5. 构建自定义hooks(或者执行自定义函数) 你的函数会依赖其他的state,那就会形成上下文参数(变量引用)
 *    不解决会有什么影响: jsx 文件视图和数据混乱,交叉存在
 *   1. 函数参数传参
 *   2. 作用域(with / this,window,global) -> 组件(类组件)
 *
 * state , (many state),one or many state => 组件更新 (hooks 每次都执行) -> 单一职责(观察者模式) ->选择性更新组件
 *
 * 缺点:
 * 1. 视图和数据交互更强(jsx 文件视图和数据混乱,交叉存在) jsx(混写视图和逻辑) 2000  / 5000 (视图长什么样子) ..
 *
 * this(利用this好处) ...
 *
 * 1. scope (作用域)
 * 2. 原型链(方法) -> scope的优惠
 * 3. 隐藏逻辑
 *
 * 视图职责: 触发action(或者渲染结果) -> 逻辑(像类组件那样,封装在类里面), 还不丢失hook给我的好处
 *
 *
 * 类组件的缺点
 * 1. state(其实关注点,你有时候只需要关注其中一个属性)...
 * 2. state(太过庞大), copy(浅复制) {...} 性能缺陷( 不可变的力量)
 * 3. 生命周期(钩子太多了), 根本记不住(也很难利用) .. 生命周期的流程会更模糊(相比于函数式组件) ->(性能优化认识会不到位)
 * 4. shouldComponentUpdate(肯定里面会有很多if-else) - 相比于直观的hooks执行(hooks 串行化性排列)
 * 5. 性能优化不明显(scu) - 相比于函数式组件进行优化要烦心的多(useMemo memo / useCallback, 观察者数组 ) -> render
 *
 * 优势: 作用域
 *
 * -> 组件初始化 -> 组件挂载 -> 组件更新 -> shouldComponentUpdate -> render -> 组件卸载(思维已经被固化了)..
 *
 *  模糊化: (hooks 每次都执行) -> (状态是否发生改变)单一职责(观察者模式) ->选择性更新组件(性能优化) -> useMemo memo / useCallback
 *
 *  尽可能的减少 组件刷新次数(性能优化 - dom 交互比较消耗性能)
 *
 *
 *  实现: 视图和数据逻辑的分离(data(){} ,methods{})  视图文件(很小) -> 视图的架构(大体层次) 一目了然(视图的action)也分常清晰 ..
 *
 *  // 和子组件的交互(数据 /函数(逻辑) => 演化成类似于数据 => 属性)
 *
 *
 *   hooks 约定是什么
 *   1. 不能for循环执行
 *   2. 只能在组件顶级内部执行
 *   3. 可以在其他hooks中执行
 *   4. 不能条件执行
 *   5. 不能在类组件中使用
 *   6. 只能在函数式组件使用
 *   7. 每次都会执行(内部逻辑到底执不执行另说)
 *   8. hooks 必须是一个纯函数
 *   9. 命名必须以 use开头
 */

// js 坏处是什么
    // 1. 类型不明确(1. 类到底有哪些属性,2.属性有什么含义)

// + ts


export class Home extends ComponentModel {
    static dataCreator() {
        return {
            // 货物信息(useState)
            goodPriceInfo: {
                // 标题
                title: '',
                // 货物详情
                list: []
            },
            disCounts: {
                title: '',
                subTitle: '',
                dest_list: []
            },
            highScores: {
                title: '',
                subTitle: '',
                list: []
            },
            recommends: {
                title: '',
                subTitle: '',
                dest_list: []
            },
            longForData: {
                title: '',
                subTitle: '',
                list: []
            },
            plusData: {
                title: '',
                subTitle: '',
                list: []
            }
        }
    }

    // 逻辑hook
    // 生命周期hooks useEffect(副作用hook) useState  hooks(other)
    // 组件挂载/更新时/卸载时都需要执行的hook
    useLogicHooks = () => {
        this.fetchDisCounts()
        this.fetchRecommends()
        this.fetchLongForData()
        this.fetchGoods()
        this.fetchHighScores()
        this.fetchPlusData()
        this.useStore()
    }

    // 查询货物信息(组件挂载,或者 查询条件更新时)
    fetchGoods = () => {
        useEffect(() => {
            api.fetchGoods()
                .catch(() => Home.dataCreator().goodPriceInfo)
                .then(this.setGoodPriceInfo)
        }, [])
    }

    // 查询 折扣信息
    fetchDisCounts = () => {
        useEffect(() => {
            api.fetchDisCounts()
                .catch(() => Home.dataCreator().disCounts)
                .then(this.setDisCounts)
        }, [])
    }

    fetchHighScores = () => {
        useEffect(() => {
            api.fetchHighScores().catch(() => Home.dataCreator().highScores)
                .then(this.setHighScores)
        }, [])
    }

    fetchRecommends = () => {
        useEffect(() => {
            api.fetchRecommends().catch(() => Home.dataCreator().recommends)
                .then(this.setRecommends)
        }, [])
    }

    fetchLongForData = () => {
        useEffect(() => {
            api.fetchLongForData().catch(() => Home.dataCreator().longForData)
                .then(this.setLongForData)
        }, [])
    }

    fetchPlusData = () => {
        useEffect(() => {
            api.fetchPlusData().catch(() => Home.dataCreator().plusData)
                .then(this.setPlusData)
        }, [])
    }

    useStore = () => {
        useEffect(() => {
            this.dispatch(changeHeaderConfigAction({isHome: true, isFixed: true}))
        }, [])
    }

}