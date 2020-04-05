export default (state, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    case 'SELECT_ACTION':
      return {
        ...state,
        actions: changeActive(state.actions, action.payload),
        selectedAction: selectActive(state.actions, action.payload),
      };
    case 'ADD_NOTE':
      const newNotes = [...state.notes, action.payload];
      return {
        ...state,
        notes: changeActive(newNotes, action.payload.id),
        selectedNote: selectNote(newNotes, action.payload.id),
      };
    case 'SELECT_NOTE':
      return {
        ...state,
        notes: changeActive(state.notes, action.payload),
        selectedNote: selectNote(state.notes, action.payload),
      };
    case 'UPDATE_NOTE':
      const { id } = action.payload;
      const notes = updateNote(state.notes, action.payload);
      return {
        ...state,
        notes,
        selectedNote: selectNote(notes, id)
      };
    default:
      return state;
  }
};

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
