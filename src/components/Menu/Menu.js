//uses
import { useContext } from "react";
import { myContext } from "../../Context/context";
//styles
import { Wrapper, Content } from "./Menu.styles";
//compnents
import GotoTop from "../GoToTop";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
//

const Menu = () => {
  const { dataMapping, loadingHandler, errorHandler } = useContext(myContext);

  return (
    <Wrapper>
      <BreadCrumb />
      <Content>
        {dataMapping.mapMenu} {loadingHandler.loading}
        {errorHandler.catchError}
      </Content>
      <GotoTop />
    </Wrapper>
  );
};

export default Menu;
