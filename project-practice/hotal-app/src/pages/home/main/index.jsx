import {IndexWrapper} from "./style";
import HomeBanner from "./home-banner";
import {memo} from "react";
import {useModel} from "./model-with-types-def";
import HomeSectionV2 from "./sections/v2";
import HomeSectionV1 from "./sections/v1";
import HomeLongfor from "./home-longfor";
import HomeSectionV3 from "./sections/v3";

// main wrapper
export default memo(function () {

    // 数据(解构)(数据的输出 <-> 视图的输入) / 视图的动作 -> 数据的输入
    // 逻辑是不是隐藏的 ..
    let {data: {goodPriceInfo,disCounts,highScores,recommends,longForData,plusData}} = useModel();
    return (
        <IndexWrapper>
            <HomeBanner/>
            <div className='content'>
                <HomeSectionV2 infoData={disCounts}/>
                <HomeSectionV2 infoData={recommends} />
                <HomeLongfor infoData={longForData} />
                <HomeSectionV1 infoData={highScores}/>
                <HomeSectionV1 infoData={goodPriceInfo} />
                <HomeSectionV3 infoData={plusData}/>
            </div>
        </IndexWrapper>
    )
})