///uses
///components

///styles

import {
  Wrapper,
  Text,
  Content,
  ButtonImage,
  BeforeImage,
  StyleLink,
  ImageConatiner,
} from "./SectionMenu.styled";
///

const SectionMenu = () => {
  return (
    <Wrapper id="SectionMenu">
      <Content>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed labore
          sit cumque. Accusantium nemo eligendi voluptate sed itaque nisi
          nesciunt unde iste asperiores. Consequatur asperiores similique
          impedit necessitatibus tempore doloribus tempora quo neque nulla
          incidunt beatae, voluptate, temporibus sed cum!
        </Text>
        <ImageConatiner>
          <StyleLink to="/Menu">Menu</StyleLink>
          <BeforeImage>
            <ButtonImage to="/Menu"></ButtonImage>
          </BeforeImage>
        </ImageConatiner>
      </Content>
    </Wrapper>
  );
};
export default SectionMenu;
