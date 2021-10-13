import styled from "styled-components";
import { spanBorders } from "../../themePropvider";
///
export const Wrapper = styled.div`
  width: 100vw;
  height: auto;
  min-height: 100%;
  padding: 1rem;
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
`;

export const ImgContainer = styled.div`
  max-height: auto;
  width: 90%;
  margin: 3rem 0;

  flex-shrink: 20rem;
`;

export const Img = styled.img`
  height: 20rem;
  width: 100%;
  object-fit: cover;
`;
export const Text = styled.p`
  margin-top: 5rem;
  margin-bottom: 3rem;
  font-size: 1.5rem; /////revisar tamaños de fuente
  text-align: left;

  h1 {
    color: ${({ theme }) => theme.prymary};
    font-size: ${({ theme }) => theme.title_h1};
    font-family: ${({ theme }) => theme.fonts_title};
    margin-bottom: 1rem;
  }
`;
