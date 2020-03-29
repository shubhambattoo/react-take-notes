import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { LeftMenu } from './components/leftMenu/LeftMenu';
import { MainContent } from './components/mainContent/MainContent';

function App() {
  return (
    <div>
      <Header />
      <main>
        <LeftMenu />
        <MainContent />
      </main>
    </div>
  );
}

export default App;
