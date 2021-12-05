import { useFetchCategories } from "../customHooks/useFetchCategories";
import { createContext } from "react";

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

  const loadingHandler = { loading: isLoading && <p>is loading..</p> };

  const errorHandler = { catchError: fetchError && <p>error</p> };

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
