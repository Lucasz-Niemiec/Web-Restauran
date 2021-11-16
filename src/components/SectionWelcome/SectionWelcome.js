//states
import { useContext } from "react";
import { myContext } from "../Context/context";
//styles
import { Wrapper, FlexContainer } from "./SectionWelcome.Styles";
//components
import InfoCard from "../InfoCard/InfoCard";

//
function SectionWelcome() {
  const { dataMapping, fetchError, isLoading } = useContext(myContext);

  return (
    <Wrapper id="SectionWelcome">
      <InfoCard />
      <FlexContainer>{dataMapping.mapSectionOne}</FlexContainer>
    </Wrapper>
  );
}

export default SectionWelcome;
