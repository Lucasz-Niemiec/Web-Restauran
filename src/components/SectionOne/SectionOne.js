//states
import { useContext } from "react";
import { myContext } from "../Context/context";
//styles
import { Wrapper, FlexContainer } from "./SectionOneStyles";
//components
import InfoCard from "../InfoCard/InfoCard";

//
function SectionOne() {
  const { dataMapping } = useContext(myContext);

  return (
    <Wrapper>
      <InfoCard />
      <FlexContainer>{dataMapping.mapSectionOne}</FlexContainer>
    </Wrapper>
  );
}

export default SectionOne;
