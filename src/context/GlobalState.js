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
      isActive: false,
    },
    { id: 'del', value: 'trash', icon: 'delete', isActive: false },
  ],
  categories: [],
  selectedCategory: null,
  notes: [],
  selectedNote: null,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addCategory(category) {
    dispatch({ type: 'ADD_CATEGORY', payload: category });
  }

  function selectAction(id) {
    dispatch({ type: 'SELECT_ACTION', payload: id });
  }

  function addNote(note) {
    dispatch({ type: 'ADD_NOTE', payload: note });
  }

  function updateNote(note) {
    dispatch({ type: 'UPDATE_NOTE', payload: note });
  }

  return (
    <GlobalContext.Provider
      value={{
        actions: state.actions,
        categories: state.categories,
        selectedAction: state.selectedAction,
        selectedCategory: state.selectedCategory,
        notes: state.notes,
        selectedNote: state.selectedNote,
        addCategory,
        selectAction,
        addNote,
        updateNote
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
