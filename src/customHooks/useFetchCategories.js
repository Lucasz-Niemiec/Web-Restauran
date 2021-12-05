///uses
import { useState, useEffect } from "react";
///components
///
///

export const useFetchCategories = () => {
  const API_URL = `https://www.themealdb.com/api/json/v1/1/categories.php`;

  const [categories, setCategories] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not recieve expected data");
        const data = await response.json();
        setCategories(data.categories);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      getData();
    }, 3000);
  }, []);
  return { categories, fetchError, isLoading };
};
