import PropTypes from 'prop-types'
import React, {memo, useCallback, useMemo} from 'react'
import {Rating} from '@mui/material'
import {ItemWrapper} from './style'
import {useModel} from "./model-with-type-defs";
import classNames from "classnames";
import Indicator, {IndicatorItem} from "../../indicator";
import IconArrowLeft from "../../../assets/svg/icon-arrow-left";
import IconArrowRight from "../../../assets/svg/icon-arrow-right";
import {Carousel} from "antd";

const RoomItem = memo((props) => {
    const {
        data: {selectIndex},
        optionalItemClickHandle,
        controlClickHandle,
        refs: {swiperRef},
        mixin: {itemData, itemWidth}
    } = useModel(props);

    return (
        <ItemWrapper onClick={optionalItemClickHandle}
                     itemWidth={itemWidth}
                     verifyColor={itemData?.verify_info?.text_color || "#39576a"}>
            <div className='inner'>
                {
                    !itemData.picture_urls ? (
                            <div className='cover'>
                                <img src={itemData.picture_url} alt=""/>
                            </div>
                        ) :
                        (
                            <div className='slider'>
                                <div className='control'>
                                    <div className="btn left" onClick={e => controlClickHandle(e, false)}>
                                        <IconArrowLeft width="24" height="24"/>
                                    </div>
                                    <div className="btn right" onClick={e => controlClickHandle(e, true)}>
                                        <IconArrowRight width="24" height="24"/>
                                    </div>
                                </div>
                                <div className='indicator'>
                                    <Indicator selectIndex={selectIndex}>
                                        {
                                            itemData.picture_urls.map((item, index) => {
                                                return (
                                                    <IndicatorItem key={item}>
                                                        <div className='item'>
                                                            <span
                                                                className={classNames("dot", {active: selectIndex === index})}/>
                                                        </div>
                                                    </IndicatorItem>
                                                )
                                            })
                                        }
                                    </Indicator>
                                </div>
                                <Carousel dots={false} ref={swiperRef}>
                                    {
                                        itemData.picture_urls.map((item, index) => {
                                            return (
                                                <div key={index} className="cover">
                                                    <img src={item} alt=""/>
                                                </div>
                                            )
                                        })
                                    }
                                </Carousel>
                            </div>
                        )
                }
                <div className='desc'>{itemData.verify_info.messages.join("·")}</div>
                <div className='name'>{itemData.name}</div>
                <div className='price'>¥{itemData.price}/晚</div>
                <div className='bottom'>
                    <Rating readOnly
                            value={itemData.star_rating ?? 5}
                            precision={0.1} size="small"
                            sx={{fontSize: "12px", color: "#00848A", marginRight: "-2px"}}/>
                    <span className='count'>{itemData.reviews_count}</span>
                    {itemData.bottom_info && <span>·{itemData.bottom_info.content}</span>}
                </div>
            </div>
        </ItemWrapper>
    )
})

RoomItem.propTypes = {
    itemData: PropTypes.object
}

export default RoomItem