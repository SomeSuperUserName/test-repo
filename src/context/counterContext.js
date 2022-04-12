import React, { useState, useEffect, createContext, useContext } from "react";
import { useFetchList } from "./listContext";

const CounterContext = createContext();

const CounterContextProvider = ({ children }) => {
  const [checkedItemsCount, setCheckedItemsCount] = useState(0);
  const { listItems } = useFetchList();

  useEffect(() => {
    if (listItems.length) {
      const checkedItemsArray = listItems.filter((item) => item.is_unread);
      setCheckedItemsCount(checkedItemsArray.length);
    }
  }, [listItems]);

  return (
    <CounterContext.Provider
      value={{ setCheckedItemsCount, checkedItemsCount }}
    >
      {children}
    </CounterContext.Provider>
  );
};

const useCounter = () => {
  const context = useContext(CounterContext);
  return context;
};

export { CounterContextProvider, useCounter };
