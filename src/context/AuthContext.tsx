import React, { createContext, useCallback, useContext } from "react";
import { AuthContextType } from "../features/auth/types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const loginAuth = async (
    username: string,
    password: string
  ): Promise<void> => {
    alert("Login işlemi yaptık :)");
  };
  const logoutAuth = useCallback((): void => {
    alert("Çıkış işlemi yaptık :)");
  }, []);
  const value = { loginAuth, logoutAuth };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};