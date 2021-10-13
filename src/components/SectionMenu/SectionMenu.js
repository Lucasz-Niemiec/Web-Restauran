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
} from "./SectionMenu.styled";
///

const SectionMenu = () => {
  return (
    <Wrapper>
      <Content>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed labore
          sit cumque. Accusantium nemo eligendi voluptate sed itaque nisi
          nesciunt unde iste asperiores. Consequatur asperiores similique
          impedit necessitatibus tempore doloribus tempora quo neque nulla
          incidunt beatae, voluptate, temporibus sed cum!
        </Text>
        <StyleLink to="/Menu">Menu</StyleLink>
        <BeforeImage>
          <ButtonImage to="/Menu"></ButtonImage>
        </BeforeImage>
      </Content>
    </Wrapper>
  );
};
export default SectionMenu;
