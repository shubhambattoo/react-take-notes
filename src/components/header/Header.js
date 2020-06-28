import React from 'react';
import './Header.scss';

export const Header = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <a href="/" title="Take Notes">
            <img
              src={require('./../../assets/img/logo.png')}
              className="logo"
              alt="Take Notes"
            />
          </a>
        </div>
        <div className="center">
          <input
            type="search"
            name="search"
            placeholder="Search for notes"
            id="search"
            style={{ display: 'none' }}
          />
        </div>
        <div className="right">
          <div className="sync">
            <i className="material-icons">sync</i>
            Sync Now
          </div>
        </div>
      </nav>
    </header>
  );
};
