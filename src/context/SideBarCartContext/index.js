import { useState, createContext } from 'react';

export const SideBarCartContext = createContext();

export const SideProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SideBarCartContext.Provider value={{ isOpen, setIsOpen, handleClose }}>{children}</SideBarCartContext.Provider>
  );
};
