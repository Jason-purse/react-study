import {IndicatorItemWrapper} from "./style";

export default function ({children,itemWidth}) {
    return (
        <IndicatorItemWrapper itemWidth={itemWidth}>
            {children}
        </IndicatorItemWrapper>
    )
}