import styled from "styled-components";
import { Link } from "react-router-dom";
import plate2 from "../../images/carissa-gan-RwoKbjJdYvE-unsplash.jpg";
///
export const Wrapper = styled.div`
  background: ${({ theme }) => theme.prymary};
  width: 100%;
  height: auto;
  min-height: 100%;
  padding: 1rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  margin-top: 3rem;
  font-size: 1.5rem;
`;

export const StyleLink = styled(Link)`
  height: 3rem;
  width: 30%;
  margin: 2rem 0;
  font-size: 2rem;
  background: ${({ theme }) => theme.secondary_1};
  color: ${({ theme }) => theme.prymary};
  transition: ${({ theme }) => theme.ease_in_out};
  border: transparent;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  :hover {
    height: 3.2rem;
    outline: none;
    opacity: 0.9;
  }

  :focus {
    height: 3.2rem;
    outline: none;
    opacity: 0.9;
  }
`;

export const BeforeImage = styled.div`
  width: 100%;
  min-height: 25rem;
  margin: 0 0 3rem 0;
  background: url(${plate2}) center top no-repeat;
  position: relative;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${({ theme }) => theme.ease_in_out};

  :hover {
    height: 26rem;
  }

  :focus {
    height: 26rem;
    outline: none;
  }
`;
export const ButtonImage = styled(Link)`
  height: 13rem;
  width: 90%;
  min-height: 20rem;
  filter: drop-shadow(10px 20px 10px);
  background: url(${plate2}) center top no-repeat;
  background-size: cover;
  border: transparent;
  position: absolute;
  transition: ${({ theme }) => theme.ease_in_out};
  text-decoration: none;
  color: ${({ theme }) => theme.secondary_1};

  :hover {
    height: 22rem;
    outline: none;
  }
  :focus {
    height: 22rem;
    outline: none;
  }
`;
