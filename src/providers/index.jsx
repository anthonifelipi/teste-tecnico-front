import { createContext, useState } from "react";

export const contactContext = createContext([]);

export const TesteProvider = ({ children }) => {
  const [contactsState, setContactsState] = useState([]);
  return (
    <contactContext.Provider value={{ contactsState, setContactsState }}>
      {children}
    </contactContext.Provider>
  );
};
