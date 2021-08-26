import React, { createContext, useContext, useReducer } from "react";
import { AuthReducer, initialState } from "./SignInReducer";

const AuthStateContext = createContext(initialState);
const AuthDispatchContext = createContext(AuthReducer);

export function useAuthState() {
  const context = useContext(AuthStateContext);
  if (context === undefined)
    throw new Error("useAuthState must be used w/i an AuthProvider");
  console.log(context);
  return context;
}

export function useAuthDispatch() {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used w/i a AuthProvider");
  }

  return context;
}

export const AuthProvider = ({ children }: any) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
