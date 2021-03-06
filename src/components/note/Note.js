import React from 'react';
import { DropMenu } from '../dropdown/DropMenu';
import PropTypes from 'prop-types';
import removeMd from 'remove-markdown';

export const Note = ({ note }) => {
  return (
    <>
      <div className="note-container__notes__note__content">
        <div className="icon">
          {note.isFav ? <i className="material-icons">star_outline</i> : ''}
        </div>
        <div>{note.heading ? removeMd(note.heading) : 'New Note'}</div>
      </div>
      <div className="note-container__notes__note__option">
        <DropMenu isFav={note.isFav} inTrash={note.inTrash} id={note.id} />
      </div>
    </>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string,
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
