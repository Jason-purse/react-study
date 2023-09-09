import ScrollItemWrapper from "./style";

export default function (props) {
    const {children,itemWidth} = props
    return (
        <ScrollItemWrapper itemWidth={itemWidth}>
            {children}
        </ScrollItemWrapper>
    )
}