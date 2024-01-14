import React, { createContext, useContext, useState } from "react";
const ServiceProvider = createContext();

const ServiceContextProvider = ({ children }) => {
  const [slideIndexValue, setSlideIndexValue] = useState(0);
  return (
    <ServiceProvider.Provider value={{ slideIndexValue, setSlideIndexValue }}>
      {children}
    </ServiceProvider.Provider>
  );
};

export default ServiceContextProvider;

export const useService = () => {
  return useContext(ServiceProvider);
};
