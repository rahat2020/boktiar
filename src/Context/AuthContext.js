import { createContext, useEffect, useReducer } from "react";
import jwt_decode from "jwt-decode";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("lists")) || null,
  // token: JSON.parse(localStorage.getItem("token")) || null,
  loading: false,
  error: null,
};

const authToken = JSON.parse(localStorage.getItem('token'))
const decoded = jwt_decode(authToken)

export const AuthContext = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(state.user));
  }, [state.token, state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        decoded,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
