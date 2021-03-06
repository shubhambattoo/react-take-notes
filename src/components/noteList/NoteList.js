import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { Note } from '../note/Note';

export const NoteList = () => {
  const {
    notes,
    selectedAction,
    selectNote,
  } = useContext(GlobalContext);

  const handleSelectNote = (id) => () => {
    selectNote(id);
  };

  if (selectedAction === 'all') {
    return notes
      .filter((n) => !n.inTrash)
      .map((note) => (
        <div
          className={
            'note-container__notes__note ' +
            (note.isActive && 'note-container__notes__note--active')
          }
          key={note.id}
          onClick={handleSelectNote(note.id)}
        >
          <Note note={note} />
        </div>
      ));
  } else if (selectedAction === 'fav') {
    return notes
      .filter((n) => n.isFav)
      .map((note) => (
        <div
          className={
            'note-container__notes__note ' +
            (note.isActive && 'note-container__notes__note--active')
          }
          key={note.id}
          onClick={handleSelectNote(note.id)}
        >
          <Note note={note} />
        </div>
      ));
  } else if (selectedAction === 'del') {
    return notes
      .filter((n) => n.inTrash)
      .map((note) => (
        <div
          className={
            'note-container__notes__note ' +
            (note.isActive && 'note-container__notes__note--active')
          }
          key={note.id}
          onClick={handleSelectNote(note.id)}
        >
          <Note note={note} />
        </div>
      ));
  }
};
