import styled from "styled-components";

export const Button = styled.button`
  width: 2rem;
  height: 2rem;
  left: 90%;
  position: fixed;
  border: transparent;
  background-color: ${({ theme }) => theme.secondary_1};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  z-index: 3;
  animation-name: goBackButton;
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;

  i {
    position: absolute;
    opacity: 0;

    font-size: 1.5rem;
  }

  @keyframes goBackButton {
    0% {
      left: 45%;
      transform: rotate(720deg);
    }
    100% {
      left: 90%;
    }
  }

  @keyframes animateToggleButtons {
    0% {
      left: 90%;
      transform: rotate(720deg);
    }

    100% {
      left: 45%;
      z-index: 3;
      background: ${({ theme }) => theme.prymary};
    }
  }

  &.Open {
    animation-name: animateToggleButtons;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    animation-timing-function: linear;

    i {
      opacity: 1;
      color: ${({ theme }) => theme.secondary_1};
      font-size: 1.5rem;
      margin-top: 6px;
    }
  }

  span {
    border-top: solid 3px;
    width: 100%;
    border-color: ${({ theme }) => theme.prymary};
    left: -0.1rem;
    margin-top: 6px;

    &.Open {
      border: transparent;
    }
  }
`;

export const Wrapper = styled.div`
  width: 90vw;
  height: 95vh;
  background: ${({ theme }) => theme.secondary_1};
  position: fixed;
  margin: 20px;
  z-index: 2;

  animation: openNav 0.7s linear both;

  @keyframes openNav {
    0% {
      width: 0vw;
      height: 0vh;
      overflow: hidden;
    }
    50% {
      width: 90vw;
      height: 0vh;
      overflow: hidden;
    }

    100% {
      width: 90vw;
      height: 95vh;
      overflow: hidden;
    }
  }
`;

export const Nav = styled.nav`
  width: 90%;
  height: 90%;

  padding: 1rem;
  margin: auto;
  margin-top: 20px;
  border: solid 2px;
  border-color: ${({ theme }) => theme.prymary}; ;
`;
export const NavContainer = styled.ul`
  width: 100%;
  height: 100%;
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
