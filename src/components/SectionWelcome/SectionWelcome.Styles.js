import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.secondary_2};
  height: auto;
  min-height: 100%;
  width: 100%;
  padding: 1rem;
  position: relative;
  @media screen and (min-width: 1400px) {
    height: 60vh;
  }
`;
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 1rem;
  padding: 10px 0;
  width: 80%;
  height: 100%;
  margin-bottom: 1rem;
  margin: auto;
  @media screen and (min-width: 1400px) {
    flex-direction: row;
    justify-content: center;
    position: absolute;

    width: 70%;
    height: 50%;
    right: 5px;
    top: 2rem;
  }
`;
