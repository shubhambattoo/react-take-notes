import React, { useState } from 'react';
import { Dropdown } from '../dropdown/Dropdown';
import PropTypes from 'prop-types';
import removeMd from 'remove-markdown';

export const Note = ({ note }) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [stylesD, setStylesD] = useState({});

  function showDropdown(e) {
    setStylesD({
      left: e.clientX,
      top: e.clientY,
      position: 'absolute',
    });
    setIsDropDown(!isDropDown);
  }

  function handleDropdownClose() {
    setIsDropDown(false);
  }

  return (
    <>
      <div className="note-container__notes__note__content">
        {note.heading ? removeMd(note.heading) : 'New Note'}
      </div>
      <div
        className="note-container__notes__note__option"
        onClick={showDropdown}
      >
        <i className="material-icons">more_horiz</i>
      </div>
      {isDropDown && (
        <Dropdown
          moreStyles={stylesD}
          isFav={note.isFav}
          inTrash={note.inTrash}
          id={note.id}
          close={handleDropdownClose}
        />
      )}
    </>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number,
    created: PropTypes.number,
    updated: PropTypes.number,
    content: PropTypes.string,
    heading: PropTypes.string,
    isActive: PropTypes.bool,
    isNew: PropTypes.bool,
    isFav: PropTypes.bool,
    inTrash: PropTypes.bool,
  }),
};
