import styled from "styled-components";

const Comp = styled.div.attrs(props => {
    return {
        height: props.height || 300
    }
})`
  display: flex;
  flex-direction: column;
  height: 100%;

  section {
    flex: 1;
    background-color: #61dafb;

    &:first-of-type {

      color: ${props => props.theme.primaryColor};
      // 动态计算 ..
      max-height: calc(100% - ${props => props.height}px);
      overflow: auto;
    }

    &:last-of-type {
      background-color: #282c34;
      height: ${props => props.height}px;
    }
  }
`

export default function () {
    return (
        <Comp height={300}>
            <section>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
                <p>sdfsdklfksddddfkjrweklrjl收到李开复老师的就发了上课就发了看手机老师肯德基冯老师肯德基法律思考电极法老师肯德基付了款聚少离多f</p>
            </section>
            <section>2</section>
        </Comp>
    )
}