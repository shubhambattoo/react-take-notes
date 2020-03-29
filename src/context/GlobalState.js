import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
