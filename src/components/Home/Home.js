//uses

//stytles

//components
import SectionWelcome from "../SectionWelcome/SectionWelcome";
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionMenu from "../SectionMenu/SectionMenu";
import SectionConatct from "../SectionContact/SectionConatct";
import Footer from "../Footer/Footer";
import GoTopButton from "../GoTopButton/GoTopButton";
import GoToTop from "../GoToTop";

//
function Home() {
  return (
    <>
      <GoTopButton />

      <SectionWelcome />

      <SectionInfo />

      <SectionMenu />

      <SectionConatct />
      <GoToTop />
      <Footer />
    </>
  );
}

export default Home;
