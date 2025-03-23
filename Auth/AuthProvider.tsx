"use client";
import axiosInstance from "@/lib/axiosInstance";
import React, { createContext, ReactNode, useEffect, useState } from "react";

interface AuthContextType {
  user: any;
  loading: boolean;
  register: any;
  login: any;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const register = async () => {
    try {
      const response = await axiosInstance.post("auth/register");
      return response.data;
    } catch (error) {
      console.log("something went wrong..");
    }
  };

  const login = async () => {
    try {
      const response = await axiosInstance.post("auth/login");
      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      console.log("Login Failed..");
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
