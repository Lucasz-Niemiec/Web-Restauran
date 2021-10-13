import styled from "styled-components";

export const Wrapper = styled.footer`
  background: ${({ theme }) => theme.secondary_2};
  width: 100vw;
  height: auto;
  height: 100%;
  padding: 1rem;
  margin: 0;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 0.9rem;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 5rem;
  margin: 0;

  i {
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.secondary_1};

    :hover {
      color: ${({ theme }) => theme.prymary};
    }
    :focus {
      color: ${({ theme }) => theme.prymary};
      outline: none;
    }
  }
  a:focus {
    outline: none;
    i {
      color: ${({ theme }) => theme.prymary};
    }
  }
`;
