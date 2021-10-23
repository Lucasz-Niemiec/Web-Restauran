//Uses
import { useState } from "react";
//styled
import { Wrapper, Slide, StyledLink, CArdConatiner } from "./CardsStyles";
//router

//
const Cards = ({ id, img, title, description }) => {
  const [isMouseOver, seIsMouseOver] = useState(false);
  const ClassChangeHandler = () => {
    seIsMouseOver(true);
  };
  const mouseOutHandler = () => {
    seIsMouseOver(false);
  };

  return (
    <>
      <CArdConatiner>
        <StyledLink
          to={id}
          onFocus={() => ClassChangeHandler()}
          onBlur={() => mouseOutHandler()}
        >
          <Wrapper
            onMouseEnter={() => ClassChangeHandler()}
            onMouseLeave={() => mouseOutHandler()}
          >
            <h1>{title}</h1>
            <img src={img} alt={title} />
          </Wrapper>{" "}
        </StyledLink>
        {isMouseOver && (
          <Slide className="slide">
            <p>{description}</p>
          </Slide>
        )}
      </CArdConatiner>
    </>
  );
};

export default Cards;
