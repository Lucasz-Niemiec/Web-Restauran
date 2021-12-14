//states
import { useContext } from "react";
import { myContext } from "../../Context/context";
//styles
import { Wrapper, FlexContainer } from "./SectionWelcome.Styles";
//components
import InfoCard from "../InfoCard/InfoCard";
import Loading from "../Loading/Loading";

//
function SectionWelcome() {
  const { dataMapping, loadingHandler, errorHandler } = useContext(myContext);

  return (
    <Wrapper id="SectionWelcome">
      <InfoCard />

      <FlexContainer>
        {dataMapping.mapSectionOne} {loadingHandler.loading}
        {errorHandler.catchError}
      </FlexContainer>
    </Wrapper>
  );
}

export default SectionWelcome;
