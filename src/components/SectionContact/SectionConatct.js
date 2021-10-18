import {
  Wrapper,
  Content,
  TextInfo,
  TextLocations,
  Img,
} from "./SectionContact.styled";
import location_2 from "../../images/toa-heftiba-TwtUYtDOv6w-unsplash.jpg";
import location_1 from "../../images/mathew-schwartz-GjzJFMnJZYg-unsplash.jpg";
const SectionConatct = () => {
  return (
    <Wrapper id="SectionConatct">
      <Content>
        <h1>Contact</h1>
        <TextInfo>
          <div>
            <h3>phone</h3>
            <p>xxxxxxxxx</p>
          </div>
          <div>
            <h3>phone</h3>
            <p>xxxxxxxxx</p>
          </div>
          <div>
            <h3>phone</h3>
            <p>xxxxxxxxx</p>
          </div>
        </TextInfo>
        <span />
        <TextLocations>
          <div>
            <h3>location 1</h3>
            <p>xxxxxxxxx</p>
            <Img src={location_1} />
          </div>
          <div>
            <h3>location 2</h3>
            <p>xxxxxxxxx</p>
            <Img className="location_2" src={location_2} />
          </div>
        </TextLocations>
      </Content>
    </Wrapper>
  );
};

export default SectionConatct;
