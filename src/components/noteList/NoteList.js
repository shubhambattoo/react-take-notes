import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Note } from '../note/Note';

export const NoteList = () => {
  const { notes, selectedAction, favNotes, trash } = useContext(GlobalContext);

  if (selectedAction === 'all') {
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
  } else if (selectedAction === 'fav') {
    return favNotes.map((note) => (
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
  } else if (selectedAction === 'del') {
    return trash.map((note) => (
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
  }
};
