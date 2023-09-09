import React, {memo, useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {DetailWrapper} from "./style";
import DetailPictures from "./detail-pictures";
import {changeHeaderConfigAction} from "../../store/layout";

const Detail = memo((props) => {
    const {detailInfo} = useSelector((state) => ({
        detailInfo: state.detail.detailInfo
    }), shallowEqual)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(changeHeaderConfigAction({isFixed: false, isHome: false,isAlpha: false}))
    }, [dispatch])

    return (
        <DetailWrapper>
            <DetailPictures pictureUrls={detailInfo.picture_urls}/>
        </DetailWrapper>
    )
})

Detail.propTypes = {}

export default Detail