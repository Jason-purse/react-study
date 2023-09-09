import React, {memo} from 'react';
import {HeaderRightWrapper} from "./style";
import IconAvatar from "../../../assets/svg/icon_avatar";
import IconGlobal from "../../../assets/svg/icon_global";
import IconMenu from "../../../assets/svg/icon_menu";
import useModel from "./model-with-types-def";

export default memo(() => {
    // data,methods
    let {
        data: {showPanel},
        showPanelAction,
        registerAction,
        loginAction
    } = useModel();

    // 1. 条件判断(触发组件的是否渲染) foreach 渲染
    return (
        <HeaderRightWrapper>
            <div className='btns'>
                <span className='btn'>登录</span>
                <span className='btn'>注册</span>
                <span className='btn'>
                     <IconGlobal/>
                </span>
            </div>

            <div className='profile' onClick={showPanelAction}>
                <IconMenu/>
                <IconAvatar/>
                {showPanel && (
                    <div className='panel'>
                        <div className='top'>
                            <div className='item register' onClick={registerAction}>注册</div>
                            <div className='item login' onClick={loginAction}>登录</div>
                        </div>
                        <div className='bottom'>
                            <div className='item'>出租房源</div>
                            <div className='item'>开展体验</div>
                            <div className='item'>帮助</div>
                        </div>
                    </div>
                )}
            </div>
        </HeaderRightWrapper>
    );
});