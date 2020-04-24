import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Note } from '../note/Note';

export const NoteList = () => {
  const { notes } = useContext(GlobalContext);

  return notes.map((note) => (
    <div
      className={
        'note-container__notes__note ' +
        (note.isActive && 'note-container__notes__note--active')
      }
      key={note.id}
    >
      <Note note={note} />
    </div>
  ));
};
