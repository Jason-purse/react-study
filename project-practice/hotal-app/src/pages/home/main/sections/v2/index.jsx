import PropTypes from 'prop-types'
import React, {memo, useState, useCallback, useRef, useEffect} from 'react'

/**
 * 此组件就是一个简单的组件 ..
 *
 * 通过vue2 组件形式写法,能够更加简洁 ..
 */

import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTabs from '@/components/section-tabs'
import {SectionV2Wrapper} from './style'
import SectionFooter from '@/components/section-footer'
import {useModel} from "./model-with-types-def";

const HomeSectionV2 = memo((props) => {
    // /** 从props获取数据 */
    const {infoData} = props
    // /** 定义内部的state */
    // const initialName = Object.keys(infoData.dest_list)?.[0] || ''
    //
    // // -------------------- 开始 ----------------------------
    // // 以下这两个代码 就是为了解决 使用useEffect 渲染3次的问题 ..
    // // 当然还有其他解决方式,例如只渲染一次,也就是在父组件中,进行条件判断(也就是没数据,那就不需要渲染了,取决于你的习惯)来决定是否需要显示 ..
    // // 但是那样的话,组件里面的title 就无法渲染了 ..
    // let nameRef = useRef();
    // let [_,setNameState] = useState()
    // if(!nameRef.current) {
    //     nameRef.current = initialName;
    // }
    // // ------------------- 结束  -----------------------------
    //
    // const tabNames = infoData.dest_address?.map(item => item.name)
    //
    // /** 事件处理函数 */
    // const tabClickHandle = useCallback(function (index, name) {
    //     nameRef.current = name
    //     setNameState(name)
    // }, [])
    //
    const {switchCityTabsAction, refs: {nameRef, cityTabsRef}} = useModel(props)


    return (
        <SectionV2Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
            <SectionTabs tabNames={cityTabsRef.current} tabClick={switchCityTabsAction}/>
            <SectionRooms roomList={infoData.dest_list?.[nameRef.current]} itemWidth={'33.33333%'}/>
            <SectionFooter name={nameRef.current}/>
        </SectionV2Wrapper>
    )
})

HomeSectionV2.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV2