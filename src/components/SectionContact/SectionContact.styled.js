import styled from "styled-components";
import { spanBorders } from "../../themePropvider";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100%;
  background: ${({ theme }) => theme.secondary_1};
  color: ${({ theme }) => theme.fonts_color_ligth};
  padding: 1rem;
  @media screen and (min-width: 1000px) {
    height: 80%;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 3rem 0;
  width: 100%;
  h1 {
    align-self: flex-start;
  }
  span {
    height: 1rem;
    width: 50%;
    ${spanBorders}
  }
  @media screen and (min-width: 1000px) {
    display: flex;
    align-items: center;
    flex-direction: row;
    padding: 1rem;
    height: 100%;
    font-size: ${({ theme }) => theme.font_medium};
    span {
      transform: rotate(90deg);
      width: 30%;
    }
  }
`;
export const TextInfo = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  flex-wrap: wrap;
  div {
    margin: 2rem;
  }
`;
export const TextLocations = styled.div`
  display: flex;
  flex-direction: column;
  div {
    margin: 2rem;
    .location_2 {
      margin-left: 4rem;
    }
  }
`;

export const Img = styled.img`
  height: 10rem;
  width: auto;
  margin: 0.5rem 0;
  @media screen and (min-width: 1000px) {
    height: 15rem;
    width: auto;
  }
`;
