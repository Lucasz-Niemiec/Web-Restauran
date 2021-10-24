import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background: ${({ theme }) => theme.secondary_2};
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1400px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;
