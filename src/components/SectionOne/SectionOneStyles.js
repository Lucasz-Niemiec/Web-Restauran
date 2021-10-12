import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.secondary_2};
  width: 100vw;
  height: auto;
  min-height: 100%;
  padding: 1rem;
`;
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;
