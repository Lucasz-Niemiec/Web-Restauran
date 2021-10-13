import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.secondary_2};
  height: auto;
  min-height: 100%;
  width: 100vw;
  padding: 1rem;
`;
export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 0;
  width: 100%;
  height: 100%;
  margin-bottom: 1rem;
`;
