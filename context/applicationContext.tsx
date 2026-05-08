import { useContext, createContext } from "react";


const ApplicationContext = createContext();


export default function ApplicationContextProvider({ children }) {
  return (
    <ApplicationContext.Provider value={{}}>
      {children}
    </ApplicationContext.Provider>
  );
};