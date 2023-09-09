import React, {memo} from 'react';
import {HeaderLeftWrapper} from "./style";
import IconLogo from "../../../assets/svg/icon_logo";

export default memo(() => {
    return (
        <HeaderLeftWrapper>
            <span className={'logo'}>
                <IconLogo/>
            </span>
        </HeaderLeftWrapper>
    );
});