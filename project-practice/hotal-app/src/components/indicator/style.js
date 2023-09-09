import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  overflow: hidden;

  .scroll {
    position: relative;
    display: flex;
    transition: transform 200ms ease;
    align-items: center;

    > * {
      flex-shrink: 0;
    }
  }
`