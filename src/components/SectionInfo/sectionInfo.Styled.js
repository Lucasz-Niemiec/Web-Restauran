import styled from "styled-components";
import { spanBorders } from "../../themePropvider";
///
export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100%;
  padding: 1rem;

  @media screen and (min-width: 1500px) {
    height: 60vh;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    ${spanBorders}
    height: 0.7rem;
    width: 100%;
  }
  @media screen and (min-width: 1500px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 1rem 5rem;
    height: 100%;
    span {
      width: 50%;
      transform: rotate(90deg);
    }
  }
`;

export const ImgContainer = styled.div`
  max-height: auto;
  width: 90%;
  margin: 3rem 0;
  flex-shrink: 20rem;
  @media screen and (min-width: 1500px) {
    max-height: 90%;
    width: 100%;
    margin-bottom: 2rem;
  }
`;

export const Img = styled.img`
  height: 20rem;
  width: 100%;
  object-fit: cover;
`;
export const Text = styled.div`
  margin-top: 5rem;
  margin-bottom: 3rem;
  font-size: 1.5rem; /////revisar tamaños de fuente
  text-align: left;

  h1 {
    color: ${({ theme }) => theme.prymary};
    font-size: ${({ theme }) => theme.title_h1};
    margin-bottom: 1rem;
  }
  @media screen and (min-width: 1500px) {
    max-height: 90%;
    width: 100%;
    margin: 0;
  }
`;
