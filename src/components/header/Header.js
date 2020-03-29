import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="menu">
            <i className="material-icons">menu</i>
          </div>
          <a href="/" title="Note Taken">
            <img
              src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png"
              className="logo"
              alt="Note Taken"
            />
          </a>
        </div>
        <div className="center">
          <input
            type="search"
            name="search"
            placeholder="Search for notes"
            id="search"
          />
        </div>
        <div className="right">
          <i className="material-icons">settings_applications</i>
        </div>
      </nav>
    </header>
  );
};
