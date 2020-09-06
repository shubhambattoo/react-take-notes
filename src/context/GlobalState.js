import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer, {
  ADD_CATEGORY,
  SELECT_ACTION,
  ADD_NOTE,
  UPDATE_NOTE,
  FAV_NOTE,
  DELETE_NOTE,
  PERMANENT_DELETE,
  UNFAV_NOTE,
  SELECT_NOTE,
  SET_APPSTATE,
  TOGGLE_LEFTMENU,
} from './AppReducer';

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
  leftMenuShown: true,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const item = localStorage.getItem('appState');
    const appState = JSON.parse(item);
    if (item) {
      dispatch({ type: SET_APPSTATE, payload: appState });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(state));
  }, [state]);

  function addCategory(category) {
    dispatch({ type: ADD_CATEGORY, payload: category });
  }

  function selectAction(id) {
    dispatch({ type: SELECT_ACTION, payload: id });
  }

  function addNote(note) {
    dispatch({ type: ADD_NOTE, payload: note });
  }

  function updateNote(note) {
    dispatch({ type: UPDATE_NOTE, payload: note });
  }

  function favNote(id) {
    dispatch({ type: FAV_NOTE, payload: id });
  }

  function deleteNote(id) {
    dispatch({ type: DELETE_NOTE, payload: id });
  }

  function permanentDelete(id) {
    dispatch({ type: PERMANENT_DELETE, payload: id });
  }

  function unFavNote(id) {
    dispatch({ type: UNFAV_NOTE, payload: id });
  }

  function selectNote(id) {
    dispatch({ type: SELECT_NOTE, payload: id });
  }

  function toggleLeftMenu() {
    dispatch({ type: TOGGLE_LEFTMENU });
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
        leftMenuShown: state.leftMenuShown,
        addCategory,
        selectAction,
        addNote,
        updateNote,
        favNote,
        deleteNote,
        unFavNote,
        permanentDelete,
        selectNote,
        toggleLeftMenu,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
