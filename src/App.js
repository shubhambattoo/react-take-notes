import React from 'react';
import './App.scss';
import { Header } from './components/header/Header';
import { LeftMenu } from './components/leftMenu/LeftMenu';
import { MainContent } from './components/mainContent/MainContent';
import { GlobalProvider } from './context/GlobalState';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  const component = () => {
    return (
      <>
        <Header />
        <main>
          <LeftMenu />
          <MainContent />
        </main>
      </>
    );
  };

  return (
    <BrowserRouter>
      <GlobalProvider>
        <Switch>
          <Route path="/app" render={component} />
          <Route path="/" render={Home} />
        </Switch>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
