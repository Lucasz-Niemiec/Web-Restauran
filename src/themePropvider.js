import React from "react";
import { ThemeProvider } from "styled-components";
import styled, { css } from "styled-components";

export const spanBorders = css`
  border-top: solid 3px;
  border-bottom: solid 5px;
  border-color: ${({ theme }) => theme.prymary};
`;

const theme = {
  prymary: "#dcb700 ",
  secondary_1: "#000",
  secondary_2: "#999999",
  secondary_2_variation: "#808080",
  fonts_color_ligth: "#fff",

  //fonts
  title_h1: "2rem",
  normal_text: "1rem",
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
