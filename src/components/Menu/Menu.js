//uses
import { useContext } from "react";
import { myContext } from "../Context/context";
//styles
//compnents

const Menu = () => {
  const { dataMapping } = useContext(myContext);

  return <div>{dataMapping.mapMenu}</div>;
};

export default Menu;
