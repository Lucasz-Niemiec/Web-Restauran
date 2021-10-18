///components
import { Link } from "react-router-dom";
///styled
import styled from "styled-components";
///

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.secondary_1};
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  div {
    display: flex;
  }
  h2 {
    color: ${({ theme }) => theme.prymary};
    font-size: 2rem;
  }
  span {
    width: 0.5rem;
    height: 2;
    border-right: solid 2px;
    border-left: solid 3px;
    border-color: ${({ theme }) => theme.prymary};
    margin: 0 10px;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;

  color: ${({ theme }) => theme.prymary};
  font-size: 2rem;
`;
