import styled from "styled-components";
import { spanBorders } from "../../themePropvider";

export const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100%;
  background: ${({ theme }) => theme.secondary_1};
  color: ${({ theme }) => theme.fonts_color_ligth};
  padding: 1rem;
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
`;
