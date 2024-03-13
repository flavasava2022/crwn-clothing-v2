import { createContext, useState } from "react";

export const cartDropdownContext = createContext({
  dropDownOpen: false,
  setDropDownOpen: () => {},
});

export const CartDropdownProvider = ({ children }) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const value = { dropDownOpen, setDropDownOpen };

  return (
    <cartDropdownContext.Provider value={value}>
      {children}
    </cartDropdownContext.Provider>
  );
};
