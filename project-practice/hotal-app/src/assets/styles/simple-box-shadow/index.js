import {css} from "styled-components";

/**
 * 可以声明通用样式,然后在其他组件中进行混入,但是这样的话,我们更希望的是其他形式 ..
 *
 * 查看 theme文件下的配置
 */
export default css`
  transition: box-shadow 200ms ease;

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, .18);
  }
`