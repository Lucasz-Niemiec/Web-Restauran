import { useFetchCategories } from "../customHooks/useFetchCategories";
import { createContext } from "react";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Erorr";
import Cards from "../components/Cards/Cards";
export const myContext = createContext();

export const AppContext = ({ children }) => {
  const { categories, fetchError, isLoading } = useFetchCategories();

  const dataMapping = {
    mapMenu: categories.map((category) => (
      <Cards
        id={category.idCategory}
        key={category.idCategory}
        img={category.strCategoryThumb}
        title={category.strCategory}
        description={category.strCategoryDescription}
      />
    )),
    mapSectionOne: categories
      .slice(0, 4)
      .map((category) => (
        <Cards
          id={category.idCategory}
          key={category.idCategory}
          img={category.strCategoryThumb}
          title={category.strCategory}
          description={category.strCategoryDescription}
        />
      )),
  };

  const loadingHandler = { loading: isLoading && <Loading /> };

  const errorHandler = { catchError: fetchError && <Error /> };

  return (
    <myContext.Provider
      value={{
        dataMapping,
        loadingHandler,
        categories,
        errorHandler,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
