import styled from "styled-components";
import { buttons } from "../../themePropvider";
///
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
  z-index: 1;
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
  @media screen and (min-width: 900px) {
    visibility: hidden;
  }
`;

export const Wrapper = styled.div`
  opacity: 0;
  position: fixed;

  @media screen and (min-width: 900px) {
    opacity: 1;
    background: black;
    transition: ${({ theme }) => theme.ease_in_out};
    width: 100%;
    height: 5rem;
    margin: auto;
    z-index: 2;
  }
  @media screen and (min-width: 1500px) {
    height: 5rem;
  }
  &.open {
    opacity: 1;
    background: ${({ theme }) => theme.secondary_1};
    width: 95vw;
    height: 95vh;
    margin: 20px;
    z-index: 2;

    @media screen and (min-width: 900px) {
      opacity: 1;
      background: black;
      transition: ${({ theme }) => theme.ease_in_out};
      width: 100vw;
      height: 5rem;
      margin: auto;
    }
    @media screen and (min-width: 1500px) {
      height: 5rem;
    }
  }

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
      width: 90%;
      height: 95vh;
      overflow: hidden;
    }
  }
`;

export const Nav = styled.nav`
  width: 90%;
  height: 90%;
  margin: auto;
  padding: 1rem;
  margin-top: 20px;
  border: solid 2px;
  border-color: ${({ theme }) => theme.prymary};
  @media screen and (min-width: 900px) {
    margin: auto;
    border: none;
    width: 100%;
    height: 100%;
  }
`;
export const NavContainer = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  @media screen and (min-width: 1500px) {
    li {
      width: 10rem;
      height: 100%;
    }
  }
`;

export const ButtonReservation = styled.button`
  ${buttons}
  width: 100%;
  font-weight: 900;
  :hover {
    border: none;
    transform: scale(1);
    background-color: ${({ theme }) => theme.prymary_varition};
  }
  @media screen and (min-width: 900px) {
    margin: auto;
  }
  @media screen and (min-width: 900px) {
    width: 10rem;
    margin: 0%;
    font-size: 1rem;
    height: 100%;
  }
`;
