import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import shortId from 'shortid';

export const AddNote = () => {
  const { addNote } = useContext(GlobalContext);

  function handleAddNote() {
    const note = {
      id: shortId(),
      created: Date.now(),
      updated: Date.now(),
      content: '',
      heading: 'New Note',
      isActive: true,
      isNew: true,
      isFav: false,
      inTrash: false,
    };
    addNote(note);
  }

  return (
    <div className="note-container__add-note" onClick={handleAddNote}>
      <div className="note-container__add-note__icon">
        <i className="material-icons">add</i>
      </div>
      <div className="note-container__add-note__content">Add Note</div>
    </div>
  );
};
