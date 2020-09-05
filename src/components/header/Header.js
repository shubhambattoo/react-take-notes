import React, { useContext, useCallback } from 'react';
import './Header.scss';
import { useLocation, Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';

export const Header = () => {
  const match = useLocation();

  const { toggleLeftMenu } = useContext(GlobalContext);

  const handleToggle = useCallback(() => {
    toggleLeftMenu();
  }, [toggleLeftMenu]);

  return (
    <header>
      <nav>
        <div className="left">
          <div
            className="menu"
            aria-label="minimize menu"
            onClick={handleToggle}
          >
            <i className="material-icons">menu</i>
          </div>
          <Link to="/" title="Take Notes">
            <img
              src={require('./../../assets/img/logo.png')}
              className="logo"
              alt="Take Notes"
            />
          </Link>
        </div>
        {match.pathname === '/' ? (
          <div className="right buttons">
            <a
              className="btn"
              href="https://github.com/shubhambattoo/react-take-notes"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <Link to="/app" className="btn">
              Use App
            </Link>
          </div>
        ) : (
          <>
            <div className="center">
              <input
                type="search"
                name="search"
                placeholder="Search for notes"
                id="search"
                style={{ display: 'none' }}
              />
            </div>
            <div className="right" style={{ display: 'none' }}>
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
