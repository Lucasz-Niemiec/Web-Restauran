///USes
import { useNavigate } from "react-router-dom";

import { useState } from "react";
///components
import NavLinks from "./NavLinks/NavLinks";

///styles
import { Wrapper, Button, Nav, NavContainer } from "./NavbarMenu.styled";
///

const NavbarMenu = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const OpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Button
        aria-label="menu"
        onClick={() => OpenMenu()}
        className={`${isMenuOpen && "Open"}`}
      >
        <span className={`${isMenuOpen && "Open"}`}></span>
        <span className={`${isMenuOpen && "Open"}`}></span>
        <span className={`${isMenuOpen && "Open"}`}></span>
        <i className="fas fa-utensils"></i>
      </Button>
      {isMenuOpen && (
        <Wrapper>
          <Nav>
            <NavContainer>
              <NavLinks
                title="Home"
                path="#SectionWelcome"
                open={() => OpenMenu()}
              />
              {console.log(navigate)}
              <NavLinks
                title="About Us"
                path="#SectionInfo"
                open={() => OpenMenu()}
              />
              <NavLinks
                title="Menu"
                path="#SectionMenu"
                open={() => OpenMenu()}
              />
              <NavLinks
                title="Contact"
                path="#SectionConatct"
                open={() => OpenMenu()}
              />
              <NavLinks
                title="Reservation"
                path="#SectionMenu"
                open={() => OpenMenu()}
              />
            </NavContainer>
          </Nav>
        </Wrapper>
      )}
    </>
  );
};

export default NavbarMenu;
