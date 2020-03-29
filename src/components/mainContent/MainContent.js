import React from 'react';
import './MainContent.scss'

export const MainContent = () => {
  return (
    <div className="note-container">
      <div className="note-container__notes">
        <div className="note-container__add-note">
          <div className="note-container__add-note__icon">
            <i className="material-icons">add</i>
          </div>
          <div className="note-container__add-note__content">Add Note</div>
        </div>

        <div className="note-container__notes__note note-container__notes__note--active">
          <div className="note-container__notes__note__content">My Note</div>
          <div className="note-container__notes__note__option">
            <i className="material-icons">more_horiz</i>
          </div>
        </div>
      </div>

      {true ? (
        <div className="note-container__no-notes">No note added add now</div>
      ) : (
        <div className="note-container__selected-note"></div>
      )}
    </div>
  );
};
