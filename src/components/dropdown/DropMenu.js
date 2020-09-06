import React, { useContext } from 'react';
import './DropMenu.scss';
import { GlobalContext } from '../../context/GlobalState';
import PropTypes from 'prop-types';
import { Menu, Dropdown } from 'antd';

export const DropMenu = ({ id, isFav, inTrash }) => {
  const { favNote, deleteNote, unFavNote, permanentDelete } = useContext(
    GlobalContext
  );

  const handleFavNote = () => {
    favNote(id);
  };

  const handleDeleteNote = () => {
    deleteNote(id);
  };

  function handleUnFavNote() {
    unFavNote(id);
  }

  function handlePermanentDelete() {
    permanentDelete(id);
  }

  const trashMenuItem = (
    <>
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
    </>
  );

  const favMenuItem = (
    <>
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
    </>
  );

  const menu = (
    <Menu className="dropdown-menu">
      <Menu.Item key="0">{trashMenuItem}</Menu.Item>
      {!inTrash && <Menu.Item key="1">{favMenuItem}</Menu.Item>}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <i className="material-icons" onClick={(e) => e.preventDefault()}>
        more_horiz
      </i>
    </Dropdown>
  );
};

DropMenu.propTypes = {
  id: PropTypes.number,
  isFav: PropTypes.bool,
  inTrash: PropTypes.bool,
};
