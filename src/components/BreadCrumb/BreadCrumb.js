///Uses
///components

import { Wrapper, StyledLink } from "./BreadCrumb.styled";
///Styles

///

const BreadCrumb = ({ title }) => {
  return (
    <Wrapper>
      <div>
        <StyledLink to="/">Home</StyledLink>
        <span></span>
        <h2>{title}</h2>
      </div>
      <StyledLink to="/Menu">Menu</StyledLink>
    </Wrapper>
  );
};

export default BreadCrumb;
