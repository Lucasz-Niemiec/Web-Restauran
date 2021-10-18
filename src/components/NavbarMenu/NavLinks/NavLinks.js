///Uses
import { useNavigate } from "react-router-dom";
///
///styles
import { LinkScroll, Li } from "./NavLinks.styled";
///

const NavLinks = ({ path, title, open }) => {
  const navigate = useNavigate();
  const goToLink = () => {
    navigate(`/${path}`, { replace: true });
  };
  console.log(path);
  return (
    <Li onClick={open}>
      <LinkScroll smooth to={path} onClick={() => goToLink()}>
        <h2>{title}</h2>
      </LinkScroll>
    </Li>
  );
};

export default NavLinks;
