import React, { useReducer } from "react";
import MkdSDK from "./utils/MkdSDK";

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      //TODO

      console.log(action.payload);

      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        role: action.payload.role,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

let sdk = new MkdSDK();

export const tokenExpireError = (dispatch, errorMessage) => {
  const role = localStorage.getItem("role");
  if (errorMessage === "TOKEN_EXPIRED") {
    dispatch({
      type: "Logout",
    });
    window.location.href = "/" + role + "/login";
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  React.useEffect(() => {
    const checkAuthToken = async () => {
      const token = state.token;

      if (!token) {
        tokenExpireError(dispatch, "No token");
        return;
      }
      try {
        await sdk.check(state.role, token);
      } catch (err) {
        console.log(err);
        tokenExpireError(dispatch, "TOKEN_EXPIRED");
      }
    };
    checkAuthToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
