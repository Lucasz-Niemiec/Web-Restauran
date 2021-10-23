///Uses
import { useState, useEffect } from "react";
///components
///styles
import { Button } from "./GoTopButton.styled";
///

const GoTopButton = () => {
  const [scrollButton, setScollButton] = useState(false);

  const showButton = () => {
    window.scrollY >= 500 ? setScollButton(true) : setScollButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", showButton);
  });

  const onTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Button
      scrollButton={scrollButton}
      aria-label="go to top Button"
      onClick={() => {
        onTop();
      }}
    >
      <i></i>
    </Button>
  );
};

export default GoTopButton;
