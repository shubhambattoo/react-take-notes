import React, { useContext } from 'react';
import './MainContent.scss';
import { GlobalContext } from '../../context/GlobalState';

export const MainContent = () => {
  const { notes, addNote } = useContext(GlobalContext);

  function handleAddNote() {
    const note = {
      id: notes.length + 1,
      created: Date.now(),
      updated: Date.now(),
      content: null,
      heading: 'New Note',
      isActive: true,
      isNew: true,
    };
    addNote(note);
  }

  return (
    <div className="note-container">
      <div className="note-container__notes">
        <div className="note-container__add-note">
          <div className="note-container__add-note__icon">
            <i className="material-icons">add</i>
          </div>
          <div className="note-container__add-note__content" onClick={handleAddNote}>
            Add Note
          </div>
        </div>

        {notes.map((note) => (
          <div
            className={
              'note-container__notes__note ' +
              (note.isActive && 'note-container__notes__note--active')
            }
            key={note.id}
          >
            <div className="note-container__notes__note__content">
              {note.heading}
            </div>
            <div className="note-container__notes__note__option">
              <i className="material-icons">more_horiz</i>
            </div>
          </div>
        ))}
      </div>

      {true ? (
        <div className="note-container__no-notes">No note added add now</div>
      ) : (
        <div className="note-container__selected-note"></div>
      )}
    </div>
  );
};
