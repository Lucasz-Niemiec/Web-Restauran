//uses

//stytles

//components
import SectionWelcome from "../SectionWelcome/SectionWelcome";
import SectionInfo from "../SectionInfo/SectionInfo";
import SectionMenu from "../SectionMenu/SectionMenu";
import SectionConatct from "../SectionContact/SectionConatct";
import Footer from "../Footer/Footer";

//
function Home() {
  return (
    <>
      <SectionWelcome />

      <SectionInfo />

      <SectionMenu />

      <SectionConatct />

      <Footer />
    </>
  );
}

export default Home;
