import styled from "styled-components";
import plate1 from "../../images/header1.jpg";

export const Wrapper = styled.div`
  background: url(${plate1}) center top no-repeat;
  background-size: cover;

  width: 100%;
  height: 100%;
  min-height: 30vh;

  transition: ${({ theme }) => theme.ease_in_out};
  @media screen and (min-width: 900px) {
    height: 80vh;
  }
`;

export const Logo = styled.img``;
