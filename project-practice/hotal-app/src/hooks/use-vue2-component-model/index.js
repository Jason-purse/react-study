import {useCallback, useEffect, useMemo, useRef, useState} from "react";

export {default as useReduxHook} from "./use-redux-hook";
export * from "./use-scroll-top"
export * from "./use-scroll-position"

/**
 * 模版方法 ...
 */
export class ComponentModel {
    /**
     * 名称
     */
    static label = 'ComponentModel';

    /**
     * 内部 data
     */
    #data;

    /**
     * 常量值
     */
    #constants;

    /**
     * mixin
     */
    #mixin;

    /**
     * refs
     */
    #refs;


    /**
     * variables
     */
    #variables;

    constructor(data, mixin = {}, constants = {}) {
        this.#data = data;
        this.#constants = constants;
        this.#mixin = mixin;
        this.#refs = {}
        this.#variables = {}
    }


    /**
     * 拿取 refs
     */
    get refs() {
        return this.#refs;
    }

    get variables() {
        return this.#variables;
    }


    /**
     * 查看 dataCreator 函数了解更多 ..
     * @see dataCreator
     * @returns {*}
     */
    get data() {
        return this.#data;
    }


    get mixin() {
        return this.#mixin;
    }

    get constants() {
        return this.#constants;
    }


    // 逻辑 hooks
    useLogicHooks() {

    }


    static dataCreator() {
        return {}
    }

    static constantsCreator() {
        return {}
    }
}

/**
 * 通过它实现将视图和 模型分离,将方法写入类中,利用this的优势 ..
 *
 * 但是同时不丢失函数式组件的优雅 ..
 * @param clazz (包含了业务处理逻辑的class)
 * @param mixin 混合参数
 * @param pluginHooks pluginHooks 数量必须一致 ..
 * @returns {*}
 */
export function useDataHook(clazz, mixin = {}, pluginHooks = []) {
    if (!clazz.dataCreator) {
        clazz.dataCreator = () => ({})
    }
    if (!clazz.constantsCreator) {
        clazz.constantsCreator = () => ({})
    }
    let dataInitState = useMemo(clazz.dataCreator, [])
    let constants = useMemo(clazz.constantsCreator, [])

    // 通过for循环的方式替代 eval ..
    // let keys = Object.keys(dataInitState);
    // if (!clazz.prototype.useHookFunc) {
    //     let evalFunc = `
    //     (function hooksDefine(useState,useMemo) {
    //     let data = useRef(null);
    //     let methods = useRef(null);
    //     if(data == null) {
    //         data.current = {}
    //         methods.current = {}
    //     `
    //     // 通过下面这种方式将变量融入字符串
    //     for (let i = 0; i < keys.length; i++) {
    //         let dataInitStateKey = keys[i];
    //         evalFunc += `
    //          let [value${i}, setValue${i}] = useState(JSON.parse(\`${JSON.stringify(dataInitState[keys[i]])}\`));
    //          data.${dataInitStateKey} = value${i};
    //          methods.set${dataInitStateKey[0].toUpperCase()}${dataInitStateKey.substring(1)} = setValue${i};
    //        `
    //     }
    //     // 评估函数
    //     evalFunc += `
    //     }
    //     return [
    //         data.current,
    //         methods.current
    //     ];
    //     })
    // `;
    //     // 函数 ...
    //     clazz.prototype.useHookFunc = eval(evalFunc)
    // }
    // let [data, methods] = clazz.prototype.useHookFunc(useState, useMemo);
    // let [data, methods] = clazz.prototype.useHookFunc(useState, useMemo);
    const dataRef = useRef({})
    const methodRef = useRef({})
    Object.keys(dataInitState).forEach((e, index) => {
        // 一个 hook
        (function useExec() {
            let [value, setValue] = useState(dataInitState[e])
            dataRef.current[e] = value
            methodRef.current[`set${e[0].toUpperCase()}${e.substring(1)}`] = setValue
        })()
    })
    const mixinRef = useRef({});
    Object.assign(mixinRef.current, mixin)
    let [data, methods] = [dataRef.current, methodRef.current]
    const model = useMemo(() => {
        // 组件挂载时执行,实现方法绑定 ...
        // 每一个组件需要具有不同的原型链处理(例如重复利用的组件)
        // 组件状态处理
        let obj = new clazz.prototype.constructor(data, mixinRef.current, constants);
        methods.__proto__ = obj.__proto__
        obj.__proto__ = methods
        return obj;
    }, [])


    // forEach 执行hooks
    pluginHooks.forEach(e => (() => {
        // 执行hooks
        e(model)
    })())


    // 执行逻辑hooks函数
    model.useLogicHooks();

    return model;
}

