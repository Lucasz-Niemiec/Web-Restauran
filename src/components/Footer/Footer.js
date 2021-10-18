///
///
///styles
import { Wrapper, Content } from "./Footer.styled";
///

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <a href="/#">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="/#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="/#">
          <i className="fab fa-twitter-square"></i>
        </a>
      </Content>
      <p>Restaurant 2021 &copy;</p>
    </Wrapper>
  );
};

export default Footer;
