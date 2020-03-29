import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { LeftMenu } from './components/leftMenu/LeftMenu';
import { MainContent } from './components/mainContent/MainContent';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div>
        <Header />
        <main>
          <LeftMenu />
          <MainContent />
        </main>
      </div>
    </GlobalProvider>
  );
}

export default App;
