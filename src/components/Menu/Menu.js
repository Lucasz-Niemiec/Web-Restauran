//uses
import { useContext } from "react";
import { myContext } from "../Context/context";
//styles
import { Wrapper, Content } from "./Menu.styles";
//compnents
import GotoTop from "../GoToTop";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
//

const Menu = () => {
  const { dataMapping } = useContext(myContext);

  return (
    <Wrapper>
      <BreadCrumb />
      <Content>{dataMapping.mapMenu} </Content>
      <GotoTop />
    </Wrapper>
  );
};

export default Menu;
