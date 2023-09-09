import styled, {css} from "styled-components";

export  const HeaderCenterWrapper = styled.div`
  width: fit-content;

  .search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 48px;
    box-sizing: border-box;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    cursor: pointer;
    ${props => props.theme.boxShadow.simple};
    
    .text {
      padding: 0 16px;
      color: ${props => props.theme.isAlpha ? 'white': '#222'};
      font-weight: 600;
    }
    

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      color: #fff;
      background-color: ${props => props.theme.color.primaryColor};
    }
  }

  .search-detail {
    position: relative;
    transform-origin: center center;
    // x,y
    will-change: transform, opacity;
    /* transition: all 250ms linear; */

    .infos {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  


  // 样式

  .detail-exit {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    .infos {
      transform: translateX(-50%) translateY(-50%);
    }
  }

  .detail-exit-active {
    transition: all 250ms ease;
    transform: scale(0.35, 0.727273) translateY(-100%);
    opacity: 0;
  }

  .detail-enter {
    transform: scale(0.35, 0.727273) translateY(-100%);
    opacity: 0;
  }

  .detail-enter-active {
    transform: scale(1.0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-enter {
    transform: scale(2.85714, 1.375) translateY(100%);
    opacity: 0;
  }

  .bar-enter-active {
    transition: all 250ms ease;
    transform: scale(1.0) translateY(42%);
    opacity: 1;
  }
  .bar-exit-active {
    // 加一个绝对值,否则会卡 另一个组件的位置
    position: absolute;
  }

  .bar-exit {
    opacity: 0;
  }
`