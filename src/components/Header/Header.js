////uses
////components
import GotoTop from "../GoToTop";
////styles
import { Wrapper, Logo } from "./HeaderStyles";
///

const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <GotoTop />
    </Wrapper>
  );
};

export default Header;
