import styled from "styled-components";

const ScrollItemWrapper = styled.div`
  flex-shrink: 0;
  width: ${props => props.itemWidth || 'fit-content'};
  width: ${props => props.itemWidth || '-moz-fit-content'};
`

export default ScrollItemWrapper