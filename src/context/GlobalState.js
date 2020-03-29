import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  selectedAction: 'all',
  actions: [
    { id: 'all', value: 'all notes', icon: 'notes', isActive: true },
    {
      id: 'fav',
      value: 'favorites',
      icon: 'favorite_border',
      isActive: false
    },
    { id: 'del', value: 'trash', icon: 'delete', isActive: false }
  ],
  categories: [],
  selectedCategory: null
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addCategory(category) {
    dispatch({ type: 'ADD_CATEGORY', payload: category });
  }

  return (
    <GlobalContext.Provider
      value={{
        actions: state.actions,
        categories: state.categories,
        addCategory
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
