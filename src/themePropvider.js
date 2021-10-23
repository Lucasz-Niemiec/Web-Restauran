///imports
import React from "react";
import { ThemeProvider } from "styled-components";
import { css } from "styled-components";
/// mixins

export const spanBorders = css`
  border-top: solid 3px;
  border-bottom: solid 5px;
  border-color: ${({ theme }) => theme.prymary};
`;
export const buttons = css`
  border: transparent;
  width: 20%;
  height: 6rem;
  height: 3rem;
  width: 30%;
  margin: 2rem 0;
  font-size: 1.5rem;
  background: ${({ theme }) => theme.secondary_1};
  color: ${({ theme }) => theme.prymary};
  transition: ${({ theme }) => theme.ease_in_out};
  border: transparent;
  cursor: pointer;
  padding: 0.2rem;

  :hover {
    transform: scale(1.1);
    outline: none;
    opacity: 0.9;
    border: solid 4px;
    border-color: ${({ theme }) => theme.prymary};
  }

  :focus {
    transform: scale(1.1);
    outline: none;
    opacity: 0.9;
    border: solid 1px;
    border-color: ${({ theme }) => theme.prymary};
  }
`;
///
const theme = {
  prymary: "#dcb700 ",
  prymary_varition: "#45340A",
  secondary_1: "#000",
  secondary_2: "#999999",
  secondary_2_variation: "#808080",
  fonts_color_ligth: "#fff",

  //fonts
  font_large: "2rem",
  font_medium: "1.5rem",
  font_small: "1.5rem",

  //animation
  ease_in_out: "ease-in-out 0.1s",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
