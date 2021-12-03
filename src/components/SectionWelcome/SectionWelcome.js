//states
import { useContext } from "react";
import { myContext } from "../Context/context";
//styles
import { Wrapper, FlexContainer } from "./SectionWelcome.Styles";
//components
import InfoCard from "../InfoCard/InfoCard";

//
function SectionWelcome() {
  const { dataMapping, loadingHandling } = useContext(myContext);

  return (
    <Wrapper id="SectionWelcome">
      <InfoCard />

      <FlexContainer>
        {dataMapping.mapSectionOne} {loadingHandling.loading}
      </FlexContainer>
    </Wrapper>
  );
}

export default SectionWelcome;
