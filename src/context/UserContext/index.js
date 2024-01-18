import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const signin = async (user) => {
    // Xử lý đăng nhập và set thông tin người dùng
    await setCurrentUser(user);
  };

  const logout = async () => {
    // Xử lý đăng xuất và reset thông tin người dùng
    await setCurrentUser(null);
  };

  return <UserContext.Provider value={{ currentUser, signin, logout }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  return useContext(UserContext);
};
