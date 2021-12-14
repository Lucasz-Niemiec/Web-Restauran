import { useEffect } from "react";
import { useLocation } from "react-router-dom";
//sets the navigation to the top of view port
const GotoTop = () => {
  const routePath = useLocation();

  const onTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    onTop();
  }, [routePath]);
  return null;
};

export default GotoTop;
