import { access } from "fs";
import React, { useReducer } from "react";

const userJSON = localStorage.getItem("currentUser");
const accessToken = localStorage.getItem("userToken");

const user = userJSON !== null ? JSON.parse(userJSON) : "";
const token = accessToken !== null ? JSON.parse(accessToken) : "";


export const initialState = {
  userDetails: "" || user,
  token: "" || token,
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (initialState: any, action: any) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      console.log(initialState);
      return {
        ...initialState,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      console.log(action.payload);
      const { doctor, type, admin, token } = action.payload;
      const userInfo = {
        doctor,
        type,
        admin,
      };
      return {
        ...initialState,
        userDetails: userInfo,
        token: token,
        loading: false,
      };
    case "LOGOUT":
      console.log(initialState);
      return {
        ...initialState,
        userDetails: "",
        token: "",
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
