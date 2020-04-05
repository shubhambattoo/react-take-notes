import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

export const AddNote = () => {

  const {notes, addNote} = useContext(GlobalContext);

  function handleAddNote() {
    const note = {
      id: notes.length + 1,
      created: Date.now(),
      updated: Date.now(),
      content: '',
      heading: 'New Note',
      isActive: true,
      isNew: true,
      isFav: false,
    };
    addNote(note);
  }

  return (
    <div className="note-container__add-note">
      <div className="note-container__add-note__icon">
        <i className="material-icons">add</i>
      </div>
      <div
        className="note-container__add-note__content"
        onClick={handleAddNote}
      >
        Add Note
      </div>
    </div>
  );
};
