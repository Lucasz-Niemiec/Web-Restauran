import styled from "styled-components";
import { Link } from "react-router-dom";

export const CArdConatiner = styled.div`
  background-color: red;
  position: relative;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
///\\\\\
export const StyledLink = styled(Link)`
  text-decoration: none;
  outline: none;
  width: 90%;
`;

///\\\\\
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
  &.slide {
    visibility: visible;
    position: absolute;
    top: 5%;
    left: 45%;
    background: ${({ theme }) => theme.secondary_1};
    width: 50%;
    height: 90%;
    padding: 10px 10px 0 15px;
    opacity: 0.9;

    overflow: hidden;
    color: ${({ theme }) => theme.fonts_color_ligth};
    animation-duration: 0.5s;

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
