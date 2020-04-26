import React, { useContext } from 'react';
import './Dropdown.scss';
import { GlobalContext } from '../../context/GlobalState';
import PropTypes from 'prop-types';

export const Dropdown = ({ moreStyles, id, close, isFav, inTrash }) => {
  const { favNote, deleteNote, unFavNote, permanentDelete } = useContext(
    GlobalContext
  );

  const handleFavNote = () => {
    favNote(id);
    close(true);
  };

  const handleDeleteNote = () => {
    deleteNote(id);
    close(true);
  };

  function handleUnFavNote() {
    unFavNote(id);
    close(true);
  }

  function handlePermanentDelete() {
    permanentDelete(id);
    close(true);
  }

  return (
    <div style={moreStyles} className="dropdown-menu">
      {inTrash ? (
        <div className="dropdown-menu__item" onClick={handlePermanentDelete}>
          <div className="dropdown-menu__item__icon">
            <i className="material-icons">delete</i>
          </div>
          <div className="dropdown-menu__item__text">Permanent Delete</div>
        </div>
      ) : (
        <div className="dropdown-menu__item" onClick={handleDeleteNote}>
          <div className="dropdown-menu__item__icon">
            <i className="material-icons">delete</i>
          </div>
          <div className="dropdown-menu__item__text">Trash</div>
        </div>
      )}
      {isFav ? (
        <div className="dropdown-menu__item" onClick={handleUnFavNote}>
          <div className="dropdown-menu__item__icon">
            <i className="material-icons">favorite</i>
          </div>
          <div className="dropdown-menu__item__text">Un-Favorite</div>
        </div>
      ) : (
        <div className="dropdown-menu__item" onClick={handleFavNote}>
          <div className="dropdown-menu__item__icon">
            <i className="material-icons">favorite_border</i>
          </div>
          <div className="dropdown-menu__item__text">Favorite</div>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  moreStyles: PropTypes.object,
  id: PropTypes.number,
  close: PropTypes.func,
  isFav: PropTypes.bool,
  inTrash: PropTypes.bool,
};
