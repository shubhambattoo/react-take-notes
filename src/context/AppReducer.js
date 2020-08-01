export const ADD_CATEGORY = 'ADD_CATEGORY';
export const SELECT_ACTION = 'SELECT_ACTION';
export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const FAV_NOTE = 'FAV_NOTE';
export const SELECT_NOTE = 'SELECT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UNFAV_NOTE = 'UNFAV_NOTE';
export const PERMANENT_DELETE = 'PERMANENT_DELETE';
export const SET_APPSTATE = 'SET_APPSTATE';

export default (state, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case SELECT_ACTION:
      return {
        ...state,
        actions: changeActive(state.actions, action.payload),
        selectedAction: selectActive(state.actions, action.payload),
        selectedNote: null,
      };
    case ADD_NOTE:
      const newNotes = [...state.notes, action.payload];
      return {
        ...state,
        notes: changeActive(newNotes, action.payload.id),
        selectedNote: selectNote(newNotes, action.payload.id),
      };
    case SELECT_NOTE:
      return {
        ...state,
        notes: changeActive(state.notes, action.payload),
        selectedNote: selectNote(state.notes, action.payload),
      };
    case UPDATE_NOTE:
      const { id } = action.payload;
      const notes = updateNote(state.notes, action.payload);
      return {
        ...state,
        notes,
        selectedNote: selectNote(notes, id),
      };
    case FAV_NOTE:
      return { ...state, ...favNote(state, action.payload) };
    case DELETE_NOTE:
      return { ...state, ...deleteNote(state, action.payload) };
    case UNFAV_NOTE:
      return { ...state, ...unFavNote(state, action.payload) };
    case PERMANENT_DELETE:
      return { ...state, ...permanentDelete(state.trash, action.payload) };
    case SET_APPSTATE:
      return { ...state, ...setCompleteState(action.payload) };
    default:
      return state;
  }
};

function setCompleteState(state) {
  const newNotes = state.notes.map((n) => ({ ...n, isActive: false }));
  return { ...state, notes: newNotes, selectedNote: null };
}

function changeActive(arr, id) {
  return arr.map((el) => {
    el.isActive = el.id === id;
    return el;
  });
}

function selectActive(arr, id) {
  return arr.find((el) => el.id === id).id;
}

function selectNote(arr, id) {
  return arr.find((el) => el.id === id);
}

function updateNote(notes, note) {
  let nts = notes.filter((n) => n.id !== note.id);
  nts = [...nts, note].sort((a, b) => a.id - b.id);
  return nts;
}

function favNote(state, id) {
  const { favNotes, notes } = state;
  const note = notes.find((el) => el.id === id);
  const finalNotes = notes.map((n) => {
    n.isFav = n.id === id;
    return n;
  });
  return {
    notes: finalNotes,
    favNotes: [...favNotes, note],
  };
}

function unFavNote(state, id) {
  const { favNotes, notes } = state;
  const note = notes.find((el) => el.id === id);
  const finalNotes = notes.map((n) => {
    n.isFav = n.id === id && false;
    return n;
  });
  return {
    notes: finalNotes,
    favNotes: [...favNotes, note],
  };
}

function deleteNote(state, id) {
  const { trash, notes } = state;
  const note = notes.find((el) => el.id === id);
  const nts = notes.filter((n) => n.id !== id);
  note.inTrash = true;
  note.isActive = false;
  return {
    notes: [...nts],
    trash: [...trash, note],
  };
}

function permanentDelete(deletedNotes, id) {
  const trash = deletedNotes.filter((n) => n.id !== id);
  return { trash };
}
