import ScrollView from '@/components/scroll-view'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, {memo, useState} from 'react'
import {TabsWrapper} from './style'
import ScrollItem from "../scroll-view/scroll-item";

const SectionTabs = memo((props) => {
    const {tabNames = [], tabClick} = props
    const [currentIndex, setCurrentIndex] = useState(0)

    function itemClickHandle(index, item) {
        setCurrentIndex(index)
        tabClick(index, item)
    }

    return (
        <TabsWrapper>
            <ScrollView>
                {
                    tabNames.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={classNames("item", {active: index === currentIndex})}
                                onClick={e => itemClickHandle(index, item)}
                            >
                                <ScrollItem>
                                    {item}
                                </ScrollItem>
                            </div>
                        )
                    })
                }
            </ScrollView>
        </TabsWrapper>
    )
})

SectionTabs.propTypes = {
    tabNames: PropTypes.array
}

export default SectionTabs