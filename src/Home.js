import React from 'react';
import { Header } from './components/header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <section className="home">
        <div className="container">
          <div className="row">
            <div className="col-1">
              <div className="text">
                <h1>Easy to use Note Taking App for Developers</h1>
                <p>
                  TakeNotes is a note-taking app for the web which supports
                  Markdown, live preview enabled, and completely open source.
                </p>
              </div>
              <div className="actions">
                <button>Let's Start</button>
                <p>TakeNotes the simple way for free. Forever.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-1 col-1--centered">
              <img
                src={require('./../src/assets/img/snapshot.png')}
                alt="snapshot of TakeNotes Application"
                className="snapshot"
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <p className="copyright">
          &copy; {new Date().getFullYear()} All Rights Reserved.{' '}
          <a href="http://github.com/shubhambattoo">Shubham Battoo</a>
        </p>
      </footer>
    </>
  );
};

export default Home;
