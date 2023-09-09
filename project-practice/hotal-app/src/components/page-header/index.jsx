import React, {memo, useEffect, useRef, useState} from 'react';
import {HeaderWrapper, SearchAreaPlaceholder} from "./style";
import PageHeaderLeft from "./page-header-left";
import PageHeaderRight from "./page-header-right";
import PageHeaderCenter from "./page-header-center";
import {useModel} from "./model-with-type-defs";
import classNames from "classnames";
import {useScrollPosition} from "../../hooks/use-vue2-component-model";
import {useSelector, shallowEqual, useDispatch} from "react-redux";
import {ThemeProvider} from "styled-components";
import Theme from "../../assets/theme";
import {changeHeaderConfigAction} from "../../store/layout";

export default memo(() => {
    // const {
    //     searchBarClickHandle,
    //     data: {isSearch, isAlpha},
    //     setIsSearch,
    //     refs: {isFixedRef: {current: isFixed}}
    // } = useModel();
    const [isSearch, setIsSearch] = useState(false)

    /** redux中获取数据 */
    const {headerConfig} = useSelector((state) => ({
        headerConfig: state.layout.headerConfig
    }), shallowEqual)
    const {isFixed, isHome, isAlpha} = headerConfig

    /** 其他hooks的逻辑 */
    const {scrollY} = useScrollPosition()
    const dispatch = useDispatch()

    // 这些是固定逻辑 ..
    if (isHome && scrollY === 0 && !isSearch && !isAlpha) {
        dispatch(changeHeaderConfigAction({...headerConfig, isAlpha: true}))
        // setIsSearch(true)
    }

    if (isHome && scrollY !== 0 && !isSearch && isAlpha) {
        dispatch(changeHeaderConfigAction({...headerConfig, isAlpha: false}))
        // setIsSearch(true)
    }
    if (isHome && isAlpha && scrollY > 0 && isSearch) {
        dispatch(changeHeaderConfigAction({...headerConfig, isAlpha: false}))
        setIsSearch(false)
    }

    const prevY = useRef()
    useEffect(() => {
        prevY.current = 0
    }, [])

    // 仅当scrollY 发生变化,才进行处理
    // 由于react 严格模式,当我们根据滚动距离进行了 状态设置之后,
    // 它第二次执行相同代码的时候,使用之前的状态,但是此时不会大于30,导致状态设置失败 ..
    // 不一致 ..
    // 原因是  这些属于副作用,作为一个纯函数,应该保证每次执行产生一致效果 ..
    // 所以我们通过scrollY作为 监听项来 让第二次不执行此effect ..

    // 前面的三个if 不使用useEffect的原因是,它每次都是使用变量状态比较,而不需要观察某些变量是否发生变化才执行
    // 当然这些代码都可以放入useEffect,且通过scrollY变化来决定是否执不执行 ..
    // 这是一个react 严格模式,导致我们应该写出严格管理副作用的代码 ...
    useEffect(() => {

        // 仅有当前不是search 才记录 ..
        if (!isSearch) {
            prevY.current = scrollY
        }

        if (Math.abs(prevY.current - scrollY) > 30 && isSearch) {
            setIsSearch(false)
        }
    }, [scrollY])


    /** 事件处理逻辑 */
    function searchBarClickHandle() {
        setIsSearch(true)
        dispatch(changeHeaderConfigAction({...headerConfig, isAlpha: false}))
    }

    return (
        <HeaderWrapper className={classNames({fixed: isFixed})}>
            <ThemeProvider theme={{isAlpha}}>
                <div className={classNames('content', {isAlpha})}>
                    <div className={'top'}>
                        <PageHeaderLeft/>
                        <PageHeaderCenter searchBarClickHandle={searchBarClickHandle} isSearch={isSearch}/>
                        <PageHeaderRight/>
                    </div>
                    <SearchAreaPlaceholder isSearch={isSearch}/>
                </div>
                {isSearch && !isAlpha && <div className='cover' onClick={e => setIsSearch(false)}></div>}
            </ThemeProvider>
        </HeaderWrapper>
    );
});