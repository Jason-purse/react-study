import styled, {css} from "styled-components";

const isAlphaWrapper = css`
    color: white;
  `


export const HeaderLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  color: ${props => props.theme.color.primaryColor};

  .logo {
    cursor: pointer;
    margin-left: 24px;
    width: fit-content;
  }

  ${props => props.theme.isAlpha ? isAlphaWrapper: ''}
`