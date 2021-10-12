//uses
//components
//styles
import {
  Wrapper,
  Content,
  Text,
  Img,
  ImgContainer,
} from "./sectionInfo.Styled";
import KitchenImage from "../../images/kitchen-731351_1280.jpg";
//

const SectionInfo = () => (
  <Wrapper>
    <Content>
      <ImgContainer>
        <Img src={KitchenImage} alt="kitchen " />
      </ImgContainer>

      <span></span>
      <Text>
        <h1>algo aglo restaurante </h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae est
        delectus placeat atque repudiandae dolore, consequuntur quos dolor vitae
        illo corrupti velit facere eligendi, voluptate aspernatur debitis ipsam
        nesciunt molestias fugiat, accusamus adipisci nam. Omnis nulla expedita
        laborum soluta commodi!
      </Text>
    </Content>
  </Wrapper>
);

export default SectionInfo;
