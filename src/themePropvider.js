import React from "react";
import { ThemeProvider } from "styled-components";
import { css } from "styled-components";

export const spanBorders = css`
  border-top: solid 3px;
  border-bottom: solid 5px;
  border-color: ${({ theme }) => theme.prymary};
`;

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
  ease_in_out: "ease-in-out 0.2s",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
