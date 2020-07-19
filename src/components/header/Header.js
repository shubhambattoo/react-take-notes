import React, { useEffect } from 'react';
import './Header.scss';
import { useLocation, Link } from 'react-router-dom';

export const Header = () => {
  const match = useLocation();

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
        {match.pathname === '/' ? (
          <div className="right buttons">
            <a className="btn" href="https://github.com/shubhambattoo">
              GitHub
            </a>
            <button>Use App</button>
          </div>
        ) : (
          <>
            <div className="center">
              <input
                type="search"
                name="search"
                placeholder="Search for notes"
                id="search"
              />
            </div>
            <div className="right">
              <div className="sync">
                <i className="material-icons">sync</i>
                Sync Now
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};
