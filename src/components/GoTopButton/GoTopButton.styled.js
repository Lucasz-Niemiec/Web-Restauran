import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

export const Button = styled.button`
  width: 50px;
  height: 50px;

  position: fixed;
  right: 85%;
  top: 86%;
  opacity: ${({ scrollButton }) => (scrollButton ? 0.9 : 0)};
  box-shadow: -2px 5px;
  z-index: 1;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  background: ${({ theme }) => theme.prymary};

  &:hover {
    transform: scale(1.1);
    opacity: 1;
  }

  i {
    border-top: solid;
    border-right: solid;
    border-color: ${({ theme }) => theme.seconfdary_1};
    border-width: 0.5rem 0.5rem 0 0;
    display: inline-block;
    width: 2rem;
    height: 2rem;
    transform: rotate(-45deg);
    margin-top: 1rem;
  }
  @media screen and (max-width: 400px) {
    right: 80%;
  }
  @media screen and (min-width: 1000px) {
    right: 95%;
    top: 45rem;
  }
`;

export const StyledHashLink = styled(HashLink)``;
