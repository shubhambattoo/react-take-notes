import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Dropdown } from '../dropdown/Dropdown';

export const NoteList = () => {
  const { notes } = useContext(GlobalContext);
  const [isDropDown, setIsDropDown] = useState(false);

  function showDropdown(e) {
    setIsDropDown(true);
  }

  return notes.map((note) => (
    <div
      className={
        'note-container__notes__note ' +
        (note.isActive && 'note-container__notes__note--active')
      }
      key={note.id}
    >
      <div className="note-container__notes__note__content">
        {note.heading ? note.heading : 'New Note'}
      </div>
      <div
        className="note-container__notes__note__option"
        onClick={showDropdown}
      >
        <i className="material-icons">more_horiz</i>
      </div>
      {isDropDown && <Dropdown />}
    </div>
  ));
};
