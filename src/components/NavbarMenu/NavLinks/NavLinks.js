///Uses
///
///styles
import { LinkScroll, Li } from "./NavLinks.styled";
///

const NavLinks = ({ path, title, open, onClick }) => {
  return (
    <Li>
      <LinkScroll smooth to={path} onClick={open} onClick={onClick}>
        <h2>{title}</h2>
      </LinkScroll>
    </Li>
  );
};

export default NavLinks;
