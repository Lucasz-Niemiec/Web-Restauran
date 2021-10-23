///USes

import { useState } from "react";
///components
import NavLinks from "./NavLinks/NavLinks";

///styles
import {
  Wrapper,
  Button,
  Nav,
  NavContainer,
  ButtonReservation,
} from "./NavbarMenu.styled";
///

const NavbarMenu = ({ openReservtion }) => {
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
      <Wrapper className={`${isMenuOpen ? "open" : ""}`}>
        <Nav>
          <NavContainer>
            <NavLinks
              title="Home"
              path="#SectionWelcome"
              open={() => OpenMenu()}
            />

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
            <ButtonReservation
              onClick={() => {
                OpenMenu();
                openReservtion();
              }}
            >
              Reservations
            </ButtonReservation>
          </NavContainer>
        </Nav>
      </Wrapper>
    </>
  );
};

export default NavbarMenu;
