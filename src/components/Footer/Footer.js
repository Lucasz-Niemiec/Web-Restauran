///
///
///styles
import { Wrapper, Content } from "./Footer.styled";
///

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <a href="#">
          <i class="fab fa-facebook"></i>
        </a>
        <a href="#">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i class="fab fa-twitter-square"></i>
        </a>
      </Content>
      <p>Meals 2021 &copy;</p>
    </Wrapper>
  );
};

export default Footer;
