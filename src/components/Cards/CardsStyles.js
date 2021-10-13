import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  :focus {
    outline: none;

    div {
      transform: translate(-50px, 0px);
      transition: 0.4s ease-in-out;
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
        margin: 0%;
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
  }
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.prymary} /* */;
  max-width: 15rem;
  min-height: 15rem;
  margin: 20px 0 20px 0;
  border-bottom: solid 15px;
  border-color: ${({ theme }) => theme.secondary_1};
  padding: 5px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 1;
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
    margin: 0%;
    font-size: 0;
  }

  img {
    margin-top: 20px;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  :hover {
    transform: translate(-50px, 0px);
    transition: 0.4s ease-in-out;
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
      margin: 0%;
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
`;
export const Slide = styled.div`
  align-self: center;
  position: relative;

  @keyframes slide {
    0% {
      visibility: hidden;
      opacity: 0;
      transform: translate(-5rem, -15rem);
    }

    100% {
      opacity: 0.9;
      transform: translate(1rem, -15rem);
      visibility: visible;
    }
  }

  .slide {
    top: auto;
    visibility: visible;
    opacity: 0;
    position: absolute;
    background: ${({ theme }) => theme.secondary_1};
    min-width: 15rem;
    max-height: 15rem;
    padding: 10px 10px 0 15px;
    border-bottom: solid 5px #000;
    overflow: hidden;
    color: ${({ theme }) => theme.fonts_color_ligth};
    animation-duration: 0.5s;
    animation-fill-mode: both;
    animation-timing-function: linear;
    animation-name: slide;
    .text-slide {
      font-size: 1rem;
      margin-left: 50px;
      margin-right: 5px;
      text-align: left;
      color: #fff;
      opacity: 0.9;
    }
  }
`;
