import React, { createContext, useState, useCallback, useEffect } from "react";

import Cards from "../Cards/Cards";
export const myContext = createContext();

export const AppContext = ({ children }) => {
  const [categories, setCategories] = useState([]);

  const fetchCategoriesData = useCallback(() => {
    const getData = async (errMsg = null) => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/categories.php`
        );
        const data = await response.json();
        if (!response.ok) throw Error("something went wrong");
        setCategories(data.categories);
      } catch (err) {
        errMsg = err.message;
      }
    };
    getData();
  }, []);

  useEffect(() => {
    fetchCategoriesData();
  }, [fetchCategoriesData]);

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

  return (
    <myContext.Provider
      value={{ fetchCategoriesData, dataMapping, categories }}
    >
      {children}
    </myContext.Provider>
  );
};
