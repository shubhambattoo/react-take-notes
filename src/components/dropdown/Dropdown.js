import React from 'react';
import './Dropdown.scss';

export const Dropdown = ({moreStyles}) => {
  return (
    <div style={moreStyles} className="dropdown-menu">
      <div className="dropdown-menu__item">
        <div className="dropdown-menu__item__icon">
          <i className="material-icons">delete</i>
        </div>
        <div className="dropdown-menu__item__text">Trash</div>
      </div>
      <div className="dropdown-menu__item">
        <div className="dropdown-menu__item__icon">
          <i className="material-icons">favorite_border</i>
        </div>
        <div className="dropdown-menu__item__text">Favorite</div>
      </div>
    </div>
  );
};
