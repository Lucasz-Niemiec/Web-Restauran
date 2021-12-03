import { useFetchCategories } from "../../customHooks/useFetchCategories";
import React, { createContext } from "react";

import Cards from "../Cards/Cards";
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

  const loadingHandling = { loading: isLoading && <p>is loading..</p> };

  return (
    <myContext.Provider
      value={{
        dataMapping,
        loadingHandling,
        categories,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
