import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.prymary};
  height: auto;
  min-height: 100%;
  padding: 10rem 2rem;
  border-top: solid 5rem;
  border-bottom: solid 5rem;
  border-color: ${({ theme }) => theme.secondary_2_variation};
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  img {
    min-width: 25rem;
    width: 30;
    align-self: center;
    padding-bottom: 3rem;
  }
  h1 {
    margin: 1rem;
    text-align: left;
    font-size: 3rem;
  }

  p {
    text-align: left;
    font-size: 1.5rem;
  }
`;
