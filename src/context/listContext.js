import React, { useState, useEffect, createContext, useContext } from "react";
import { response } from "../mock/data";

const FetchListContext = createContext();

const FetchListProvider = ({ children }) => {
  const [listItems, setListItems] = useState([]);

  useEffect(() => {
    setListItems(response);
  }, [listItems]);

  return (
    <FetchListContext.Provider value={{ listItems }}>
      {children}
    </FetchListContext.Provider>
  );
};

const useFetchList = () => {
  const context = useContext(FetchListContext);
  return context;
};

export { FetchListProvider, useFetchList };
