import React, {memo} from 'react'
import EntireFilter from './entire-filters'
import EntirePagination from './entire-pagination'
import EntireRooms from './entire-rooms'
import {EntireWrapper} from './style'
import {useModel} from "./model-with-type-defs";

const Entire = memo((props) => {
    const {data: {entireRooms, currentPage}, fetchEntireRoomsByPageChange} = useModel()

    return (
        <EntireWrapper>
            <EntireFilter/>
            <EntireRooms data={entireRooms.list}/>
            <EntirePagination
                currentPage={currentPage}
                totalCount={entireRooms.totalCount}
                onPageChangeCallback={fetchEntireRoomsByPageChange}/>
        </EntireWrapper>
    )
})

Entire.propTypes = {}

export default Entire