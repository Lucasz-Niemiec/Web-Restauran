//components
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import GoToTop from "../GoToTop";
//uses
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "../../Context/context";
import { useFetchCategories } from "../../customHooks/useFetchCategories";
//styles
import { Wrapper, Content } from "./FoodInfo.styled";

//
const FoodInfo = () => {
  const { loadingHandler, errorHandler } = useContext(myContext);
  const { categories } = useFetchCategories();

  const { id } = useParams();

  const mappedArray = categories.filter(
    (category) => category.idCategory === id
  );
  const cardTitle = mappedArray.map((el) => el.strCategory);

  return (
    <>
      {<BreadCrumb title={cardTitle} />}

      <Wrapper>
        {mappedArray.map((el) => (
          <Content key={mappedArray["0"].idCategory}>
            <img
              src={mappedArray["0"].strCategoryThumb}
              alt={mappedArray["0"].strCategory}
            />
            <h1>{mappedArray["0"].strCategory}</h1>

            <p>{mappedArray["0"].strCategoryDescription}</p>
          </Content>
        ))}
        {loadingHandler.loading}
        {errorHandler.catchError}
      </Wrapper>
      <GoToTop />
    </>
  );
};

export default FoodInfo;
