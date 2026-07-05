import type {
  ReactNode,
} from "react";

import {
  createContext,
  useState,
} from "react";

import authService from "@/services/authService";

import type {
  AuthContextType,
  LoginData,
  User,
} from "@/types/auth";

export const AuthContext =
  createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({
  children,
}: AuthProviderProps) {

  const [user, setUser] = useState<User | null>(() => {

    const storedUser =
        localStorage.getItem("user");

    return storedUser
        ? JSON.parse(storedUser)
        : null;

});

  async function login(data: LoginData) {

    const loggedUser =
      await authService.login(data);

    setUser(loggedUser);
    localStorage.setItem(
    "user",
    JSON.stringify(loggedUser)
    );
  }

  function logout() {

    authService.logout();

    setUser(null);
    localStorage.removeItem("user");

  }

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}