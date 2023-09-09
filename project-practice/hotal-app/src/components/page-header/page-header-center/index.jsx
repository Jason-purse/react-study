import React, {memo, useState} from 'react';
import {HeaderCenterWrapper} from "./style";
import IconSearchBar from "@/assets/svg/icon-search-bar";
import SearchTabs from "./search-tabs";
import SearchSections from "./search-sections";

import searchTitles from '@/assets/data/search_titles'
import {CSSTransition} from "react-transition-group";

export default memo(({searchBarClickHandle, isSearch}) => {
    const [currentTab, setCurrentTab] = useState(0)

    /** 过滤数据 */
    const titles = searchTitles.map(item => item.title)

    /** 事件处理 */
    function tabClickHandle(index) {
        setCurrentTab(index)
    }

    return (
        <div>
            <HeaderCenterWrapper>
                <CSSTransition
                    in={!isSearch}
                    classNames="bar"
                    timeout={250}
                    unmountOnExit={true}
                >
                    <div
                        onClick={searchBarClickHandle}
                        className='search-bar'>
                        <div className='text'>
                            搜索房源和体验
                        </div>
                        <div className='icon'>
                            <IconSearchBar/>
                        </div>
                    </div>
                </CSSTransition>

                <CSSTransition
                    in={isSearch}
                    classNames="detail"
                    timeout={250}
                    unmountOnExit={true}
                >
                    <div className='search-detail'>
                        <SearchTabs titles={titles} tabClick={tabClickHandle}/>
                        <div className='infos'>
                            <SearchSections searchInfos={searchTitles[currentTab].searchInfos}/>
                        </div>
                    </div>
                </CSSTransition>
            </HeaderCenterWrapper>
        </div>
    );
});