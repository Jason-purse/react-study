import RoomItem from '@/components/section-rooms/room-item'
import React, {memo} from 'react'
import {RoomsWrapper} from './style'
import {useModel} from "./model-with-type-defs";

const EntireRooms = memo(({data = []}) => {
    const {navigateItemDetailAction} = useModel()
    return (
        <RoomsWrapper>
            <div className='list'>
                {
                    data.map((item) => {
                        return (
                            <RoomItem
                                itemData={item}
                                itemWidth="20%"
                                key={item._id}
                                itemClick={navigateItemDetailAction}
                            />
                        )
                    })
                }
            </div>
            {/*{isLoading && <div className="cover"></div>}*/}
        </RoomsWrapper>
    )
})

export default EntireRooms