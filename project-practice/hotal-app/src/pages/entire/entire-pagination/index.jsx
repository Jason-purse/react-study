import React, {memo} from 'react'
import Pagination from '@mui/material/Pagination';

import {PaginationWrapper} from './style'
import {useModel} from "./model-with-type-defs";

const EntirePagination = memo((props) => {
    const {pageChangeHandle, variables: {total, start, end},mixin: {totalCount}} = useModel(props)

    return (
        <PaginationWrapper>
            <div className='page-info'>
                <Pagination count={total} onChange={pageChangeHandle}/>
                <div className='info'>
                    第 {start} - {end} 个房源, 共超过 {totalCount} 个
                </div>
            </div>
        </PaginationWrapper>
    )
})

export default EntirePagination