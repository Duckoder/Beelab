import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    // Các hành động khác khi currentUser thay đổi
  }, [currentUser]);

  const signin = async (user) => {
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
