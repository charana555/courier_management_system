import React, { useContext, useState } from "react";

import axios from "axios";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);

  const Signin = async (name, phone, email, password) => {
    try {
      const result = await axios.post(
        "http://127.0.0.1:5000/api/v1/user/signup",
        {
          name,
          phone,
          email,
          password,
        }
      );
      return result;
    } catch (error) {
      return error.response;
    }
  };

  const Login = async (phone, password) => {
    try {
      const result = await axios.post(
        "http://127.0.0.1:5000/api/v1/user/login",
        {
          phone,
          password,
        }
      );
      return result;
    } catch (error) {
      return error.response;
    }
  };

  const value = {
    currentUser,
    Signin,
    Login,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
