import React, { useContext, useState, useEffect } from 'react';
import './MainContent.scss';
import { GlobalContext } from '../../context/GlobalState';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/addon/selection/active-line';
import { NoteList } from '../noteList/NoteList';
import { AddNote } from '../addNote/AddNote';
import ReactMarkdown from 'react-markdown';

export const MainContent = () => {
  const { selectedNote, updateNote, notes } = useContext(GlobalContext);
  const [code, setCode] = useState('');
  const [isPreview, setIsPreview] = useState(false);

  useEffect(() => {
    if (selectedNote) {
      setCode(selectedNote.content);
    }
  }, [selectedNote]);

  function onEditorChange(editor, data, value) {
    const text = editor.display.view[0].text.textContent;
    const heading = text.length !== 1 ? text : 'New Note';
    setCode(value);
    const upNote = JSON.parse(JSON.stringify(selectedNote));
    upNote.updated = Date.now();
    upNote.content = value;
    upNote.heading = heading;
    upNote.isNew = false;
    updateNote(upNote);
  }

  function togglePreview() {
    setIsPreview(!isPreview);
  }

  const codemirrorOptions = {
    mode: 'gfm',
    theme: 'base16-light',
    keyMap: 'default',
    dragDrop: false,
    lineNumbers: false,
    lineWrapping: true,
  };

  return (
    <div className="note-container">
      <div className="note-container__notes">
        <AddNote />
        <NoteList />
      </div>

      {!notes.length ? (
        <div className="note-container__no-notes">No note added add now</div>
      ) : !selectedNote ? (
        <div className="note-container__no-notes">No note selected</div>
      ) : (
        <div className="note-container__selected-note">
          <button onClick={togglePreview}>
            {isPreview ? 'Edit' : 'Preview'}
          </button>
          {!isPreview ? (
            <CodeMirror
              className="editor"
              value={code}
              options={codemirrorOptions}
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
          ) : (
            <ReactMarkdown className={'previewer'} source={code} />
          )}
        </div>
      )}
    </div>
  );
};
