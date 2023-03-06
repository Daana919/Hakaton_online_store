import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();
export const useAuth = () => useContext(authContext);

const API = "http://localhost:8000/users";

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // проверка на уникальность
  async function checkUniqueUsername(username) {
    try {
      const res = await axios(`${API}?username=${username}`);
      const users = res.data;
      console.log(users);
      // return users.length === 0;
      return users;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  checkUniqueUsername();
  async function confirmPassword(username, password, confirmPass) {
    try {
      const res = await axios(`${API}?username=${username}`);
      const users = res.data;
      if (users.length === 0) {
        return false;
      } else {
        return users[0].password === password;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  const config = {
    headers: { "Content-Type": "application/json;charset=utf-8" },
  };

  const register = async (
    username,
    password,
    confirmPass,
    firstName,
    lastName,
    gender
  ) => {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("gender", gender);
    formData.append("confrimPass", confirmPass);

    let uniqueUsername = await checkUniqueUsername(formData.username);
    // if(uniqueUsername) {
    //   alert("Doesnt work");
    //   return;
    // }
    console.log(uniqueUsername);

    let passwordsMatch = await confirmPassword(
      formData.username,
      formData.password,
      formData.confirmPass
    );
    if (!passwordsMatch) {
      alert("Passwords don't match");
      return;
    }
    // if (formData.password !== formData.confirmPass) {
    //   alert("Passwords don't match");
    //   return;
    // }

    try {
      const res = await axios.post(`${API}`, formData, config);
      console.log(res.data);
      setError("");
      navigate("/login");
    } catch (e) {
      console.log(e);
      // if (!passwordsMatch || uniqueUsername) {
      setError("Username is already taken or passwords are don't match!");
      // log
      // }return;
    }
  };

  const login = async (username, password) => {
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    try {
      let res = await axios.post(`${API}`, formData, config);
      console.log(res.data);
      navigate("/");
      localStorage.setItem("token", JSON.stringify(res.data));
      localStorage.setItem("username", username);
      setUser(username);
      setError("");
    } catch (e) {
      console.log(e);
      setError("Wrong username or password!");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUser("");
    navigate("/");
  };

  const checkAuth = async () => {
    // console.log('WORKED');
    let token = JSON.parse(localStorage.getItem("token"));

    try {
      const Authorization = `Bearer ${token.access}`;

      let res = await axios.post(
        `${API}api/token/refresh/`,
        { refresh: token.refresh },
        { headers: { Authorization } }
      );

      // console.log(res);

      localStorage.setItem(
        "token",
        JSON.stringify({
          refresh: token.refresh,
          access: res.data.access,
        })
      );

      let username = localStorage.getItem("username");
      setUser(username);
    } catch (e) {
      console.log(e);
      logout();
    }
  };

  return (
    <authContext.Provider
      value={{
        user,
        error,

        register,
        login,
        logout,
        checkAuth,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthContextProvider;
