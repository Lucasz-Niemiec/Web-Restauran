//Uses
import { useState } from "react";
//styled
import { Wrapper, Slide } from "./CardsStyles";
//router
import { Link } from "react-router-dom";
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
      <Link to={id}>
        <Wrapper
          onMouseEnter={() => ClassChangeHandler()}
          onMouseLeave={() => mouseOutHandler()}
        >
          <h1>{title}</h1>

          <img src={img} alt={title} />
        </Wrapper>
      </Link>
      {isMouseOver && (
        <Slide>
          <span className="slide">
            <article className="text-slide">{description}</article>
          </span>
        </Slide>
      )}
    </>
  );
};

export default Cards;
