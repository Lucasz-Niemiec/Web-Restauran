import styled from "styled-components";
import { Link } from "react-router-dom";
import { Silde, slideDown } from "../../themePropvider";
///
export const CArdConatiner = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
///\\\
export const StyledLink = styled(Link)`
  text-decoration: none;
  outline: none;
  width: 90%;
  z-index: 1;

  h1 {
    opacity: 0;
  }

  &:focus {
    transform: translateX(-18%);
    transition: 0.6s ease-in-out;
    h1 {
      color: ${({ theme }) => theme.fonts_color_ligth};
      opacity: 1;
      z-index: 1;
      font-size: 1.5rem;
      transition: 0.4s ease-in-out;
    }
    @media screen and (max-width: 500px) {
      &:focus {
        transform: translateX(-14%);
      }
    }
    @media screen and (max-width: 400px) {
      font-size: 0.6rem;
      padding: 10px 10px 10px 2rem;
    }
  }
`;

///\\\
export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.prymary};
  width: 50%;
  height: 100%;
  margin: 20px 2px;
  border-bottom: solid 15px;
  border-color: ${({ theme }) => theme.secondary_1};
  padding: 5px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  transform: translateX(50%);

  ::after {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.secondary_1};
    width: 100%;
    height: 100%;
    top: 100%;
    left: 0;
    opacity: 0;
  }

  h1 {
    opacity: 0;
  }

  img {
    margin-top: 20px;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  :hover {
    transform: translateX(5rem);
    transition: 0.6s ease-in-out;
    border-right: solid 4px ${({ theme }) => theme.prymary};
    ::after {
      top: 0%;
      left: 0;
      opacity: 0.9;
      transition: 0.4s ease-in-out;
    }
    h1 {
      color: ${({ theme }) => theme.fonts_color_ligth};
      opacity: 1;
      z-index: 1;
      font-size: 1.5rem;
      transition: 0.4s ease-in-out;
    }
    img {
      max-width: 120%;
      height: auto;
      object-fit: cover;
      transition: 0.4s ease-in-out;
    }
  }
  @media screen and (min-width: 1400px) {
    background-color: ${({ theme }) => theme.prymary};
    width: 90%;
    height: 100%;
    transform: translateX(0%);
    :hover {
      transform: translateY(-1rem);
    }
    @media screen and (max-width: 400px) {
      :hover {
        transform: translateX(-1px);
      }
    }
  }
`;
///\\\
export const Slide = styled.div`
  top: 5%;
  left: 20%;
  &.slide {
    visibility: visible;
    position: absolute;
    background: ${({ theme }) => theme.secondary_1};
    width: 50%;
    height: 90%;
    padding: 10px 10px 10px 6rem;
    animation-name: ${Silde};
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
    overflow: hidden;
    color: ${({ theme }) => theme.fonts_color_ligth};

    @media screen and (min-width: 1400px) {
      animation-name: ${slideDown};
      animation-fill-mode: forwards;
      animation-duration: 0.6s;
    }
    @media screen and (max-width: 500px) {
      font-size: 0.6rem;
    }
    @media screen and (max-width: 400px) {
      font-size: 0.6rem;
      padding: 10px 10px 10px 2rem;
    }
    @media screen and (max-width: 390px) {
      background: transparent;
      color: transparent;
    }
  }
`;
