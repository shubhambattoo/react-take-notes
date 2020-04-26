import React, { useContext } from 'react';
import './Dropdown.scss';
import { GlobalContext } from '../../context/GlobalState';

export const Dropdown = ({ moreStyles, id, close }) => {
  const { favNote, deleteNote } = useContext(GlobalContext);

  const handleFavNote = () => {
    favNote(id);
    close(true);
  };

  const handleDeleteNote = () => {
    deleteNote(id);
    close(true);
  };

  return (
    <div style={moreStyles} className="dropdown-menu">
      <div className="dropdown-menu__item" onClick={handleDeleteNote}>
        <div className="dropdown-menu__item__icon">
          <i className="material-icons">delete</i>
        </div>
        <div className="dropdown-menu__item__text">Trash</div>
      </div>
      <div className="dropdown-menu__item" onClick={handleFavNote}>
        <div className="dropdown-menu__item__icon">
          <i className="material-icons">favorite_border</i>
        </div>
        <div className="dropdown-menu__item__text">Favorite</div>
      </div>
    </div>
  );
};
