//uses
import { useContext } from "react";
import { myContext } from "../Context/context";
//styles
import { Wrapper, Content } from "./Menu.styles";
//compnents

const Menu = () => {
  const { dataMapping } = useContext(myContext);

  return (
    <Wrapper>
      <Content>{dataMapping.mapMenu} </Content>
    </Wrapper>
  );
};

export default Menu;
