import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
  margin-top: 2rem;
`;
export const Spinner = styled.div`
  border: 5px solid ${({ theme }) => theme.secondary_2};
  border-top: 3px solid ${({ theme }) => theme.secondary_1};
  border-bottom: 3px solid ${({ theme }) => theme.prymary};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
