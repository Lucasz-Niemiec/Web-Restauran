import styled from "styled-components";
import { buttons } from "../../themePropvider";
///
export const Background = styled.div`
  background: black;
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0.8;
`;

export const Wrapper = styled.div`
  z-index: 3;
  position: fixed;
  padding: 2rem;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 1000px) {
    padding: 0 5rem;
  }
`;
export const CloseButton = styled.button`
  ${buttons}
  background: transparent;
  width: 2rem;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    border: none;
  }

  :before {
    content: "";
    border: solid 1px yellow;
    transform: rotate(45deg);
    display: inline-block;
    width: 2rem;
    position: absolute;
  }
  :after {
    content: "";
    border: solid 1px yellow;
    transform: rotate(-45deg);
    display: inline-block;
    width: 2rem;
    position: absolute;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  @media screen and (min-width: 1000px) {
    width: 50%;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.fonts_color_ligth};
  h1 {
    font-size: 3rem;
  }
  label {
    width: 100%;
    margin: 1rem;
  }

  textarea {
    width: 100%;
    height: 80%;
    padding: 1rem;
    color: black;
    font-family: "Open Sans", sans-serif;
    :focus {
      outline: none;
      border: solid 4px;
      border-color: ${({ theme }) => theme.prymary};
    }
    @media screen and (min-width: 1000px) {
      width: 50%;
      label {
        width: 50%;
      }
    }
  }
`;
export const StyledInput = styled.input`
  width: 100%;
  height: 2rem;
  margin-top: 5px;
  :focus {
    outline: none;
    border: solid 4px;
    border-color: ${({ theme }) => theme.prymary};
  }
`;

export const Submit = styled.input`
  ${buttons}
`;
