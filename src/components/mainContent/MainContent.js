import React, { useContext, useState, useEffect } from 'react';
import './MainContent.scss';
import { GlobalContext } from '../../context/GlobalState';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/selection/active-line';

export const MainContent = () => {
  const { notes, addNote, selectedNote, updateNote } = useContext(
    GlobalContext
  );
  const [code, setCode] = useState('');

  useEffect(() => {
    if (selectedNote) {
      setCode(selectedNote.content);
    }
  }, [selectedNote]);

  function handleAddNote() {
    const note = {
      id: notes.length + 1,
      created: Date.now(),
      updated: Date.now(),
      content: '',
      heading: 'New Note',
      isActive: true,
      isNew: true,
      isFav: false
    };
    addNote(note);
    setCode('');
  }

  function onEditorChange(editor, data, value) {
    const heading = editor.display.view[0].text.textContent;
    setCode(value);
    const upNote = JSON.parse(JSON.stringify(selectedNote));
    upNote.updated = Date.now();
    upNote.content = value;
    upNote.heading = heading;
    upNote.isNew = false;
    updateNote(upNote);
  }

  return (
    <div className="note-container">
      <div className="note-container__notes">
        <div className="note-container__add-note">
          <div className="note-container__add-note__icon">
            <i className="material-icons">add</i>
          </div>
          <div
            className="note-container__add-note__content"
            onClick={handleAddNote}
          >
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
              {note.heading ? note.heading : 'New Note'}
            </div>
            <div className="note-container__notes__note__option">
              <i className="material-icons">more_horiz</i>
            </div>
          </div>
        ))}
      </div>

      {!selectedNote ? (
        <div className="note-container__no-notes">No note added add now</div>
      ) : (
        <div className="note-container__selected-note">
          <CodeMirror
            className="editor"
            value={code}
            options={{
              mode: 'markdown',
              theme: 'base16-light',
            }}
            editorDidMount={(editor) => {
              setTimeout(() => {
                editor.focus();
              }, 0);
              editor.setCursor(0);
            }}
            onChange={(editor, data, value) => {
              if (!value) {
                editor.focus();
              }
            }}
            onBeforeChange={(editor, data, value) =>
              onEditorChange(editor, data, value)
            }
          />
        </div>
      )}
    </div>
  );
};
