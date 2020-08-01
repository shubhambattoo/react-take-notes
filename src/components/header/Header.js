import React from 'react';
import './Header.scss';
import { useLocation, Link } from 'react-router-dom';

export const Header = () => {
  const match = useLocation();

  return (
    <header>
      <nav>
        <div className="left">
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
            <Link to='/app' className='btn'>Use App</Link>
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
