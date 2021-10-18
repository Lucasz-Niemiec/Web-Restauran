//uses
import { useContext } from "react";
import { myContext } from "../Context/context";
//styles
import { Wrapper, Content } from "./Menu.styles";
//compnents
import GotoTop from "../GoToTop";
//

const Menu = () => {
  const { dataMapping } = useContext(myContext);

  return (
    <Wrapper>
      <Content>{dataMapping.mapMenu} </Content>
      <GotoTop />
    </Wrapper>
  );
};

export default Menu;
