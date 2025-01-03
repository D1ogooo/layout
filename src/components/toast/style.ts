import styled from "styled-components";

export const ToastStyle = styled.div`
  background: #4A4D60;
  position: absolute;
  margin-top: 12.5rem;
  margin-right: 6.25rem;
  right: 0;
  z-index: 999;
  width: 23.75rem;
  height: 5.625rem;
  top: 0;
  /* padding-right: 2rem; */

  .CloseIcon {
    color: #fff;
    width: 28px;
    height: 28px;
    
     position: absolute;
     right: 0;
     margin-right: .3125rem;
     /* top: 0; */
    margin-top: -.75rem;
  }

  section:nth-child(1) {
    display: flex;
    align-items: center;
    padding: 0.5rem;

    .hr_style {
     margin-top: -8px;
     margin-left: 8px;
     width: 1px;
     height: 90px;
     display: block;
     background: #6D7B95;
     border: none; 
     transform: rotate(1deg);
    }

    img {
      width: 27px;
      height: 25px;
      color: rgb(37, 197, 58);
      margin-left: 3px;
    }

    p {
      color: #fff;
      padding-left: 10px;
      font-weight: 500;
      font-size: .9rem;
      font-family: 'Roboto';
    }
  }

  section:nth-child(2) {
    position: absolute;
    left: 0.25rem;
    bottom: 0.25rem;
    width: calc(100% - 0.5rem);
    height: 0.1875rem;
    transform: scaleX(0);
    transform-origin: left;
    background: linear-gradient(to right, rgb(63, 162, 84), rgb(19, 234, 187));
    border-radius: inherit;
  }

  @keyframes progress {
    to {
      transform: scaleX(1);
    }
  }
`;
