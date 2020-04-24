import React, { useState } from 'react';
import { Dropdown } from '../dropdown/Dropdown';

export const Note = ({ note }) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [stylesD, setStylesD] = useState({});

  function showDropdown(e) {
    setStylesD({
      left: e.clientX,
      top: e.clientY,
      position: "absolute"
    })
    setIsDropDown(true);
  }
  return (
    <>
      <div className="note-container__notes__note__content">
        {note.heading ? note.heading : 'New Note'}
      </div>
      <div
        className="note-container__notes__note__option"
        onClick={showDropdown}
      >
        <i className="material-icons">more_horiz</i>
      </div>
      {isDropDown && <Dropdown moreStyles={stylesD} />}
    </>
  );
};
