import styled from "styled-components";

export const Wrapper = styled.article`
  background: ${({ theme }) => theme.secondary_2_variation};
  padding: 0.9rem;
  margin-right: 2rem;
  margin-left: 1rem;
  max-width: 25rem;
  width: auto;
  margin-top: 3rem;

  h1 {
    color: ${({ theme }) => theme.prymary};
    margin: 0.5rem;
    font-size: ${({ theme }) => theme.title_h1};
  }
  p {
    color: ${({ theme }) => theme.fonts_color_ligth};
    font-size: ${({ theme }) => theme.normal_text};
  }
`;
