import PropTypes from 'prop-types'
import React, {memo} from 'react'

import SectionHeader from '@/components/section-header'
import {SectionV3Wrapper} from './style'
import RoomItem from '@/components/section-rooms/room-item'
import ScrollView from '@/components/scroll-view'
import SectionFooter from '@/components/section-footer'
import ScrollItem from "../../../../../components/scroll-view/scroll-item";

const HomeSectionV3 = memo((props) => {
    const {infoData} = props
    return (
        <SectionV3Wrapper>
            <SectionHeader title={infoData.title} subtitle={infoData.subtitle}/>
            <div className='room-list'>
                <ScrollView>
                    {
                        infoData.list.map(item => {
                            return (
                                <ScrollItem key={item.id} itemWidth={'20%'}>
                                    <RoomItem itemData={item} itemWidth="100%" />
                                </ScrollItem>
                            )
                        })
                    }
                </ScrollView>
            </div>
            <SectionFooter name="plus"/>
        </SectionV3Wrapper>
    )
})

HomeSectionV3.propTypes = {
    infoData: PropTypes.object
}

export default HomeSectionV3