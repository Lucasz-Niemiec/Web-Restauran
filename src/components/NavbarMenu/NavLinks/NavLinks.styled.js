import styled from "styled-components";

import { HashLink } from "react-router-hash-link";

export const Li = styled.li`
  list-style: none;
  background: black;
  width: 100%;
  height: 100%;
  border: solid 1px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LinkScroll = styled(HashLink)`
  color: #fff;
  position: absolute;
  width: 95%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.prymary};
  text-decoration: none;
  :hover {
    background-color: ${({ theme }) => theme.prymary_varition};
  }
  :focus {
    background-color: ${({ theme }) => theme.prymary_varition};
  }
  @media screen and (min-width: 1500px) {
    font-size: 1rem;
    width: 100%;
    height: 100%;
  }
`;
