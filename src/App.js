import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import './App.scss';
import { Header } from './components/header/Header';
import { LeftMenu } from './components/leftMenu/LeftMenu';
import { MainContent } from './components/mainContent/MainContent';
import { GlobalContext } from './context/GlobalState';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import classNames from 'classnames';

function App() {
  const { leftMenuShown } = useContext(GlobalContext);

  const asideClass = classNames('main', {
    'aside-hidden': leftMenuShown,
  });

  const component = () => {
    return (
      <>
        <Header />
        <main className={asideClass}>
          {!leftMenuShown && <LeftMenu />}
          <MainContent />
        </main>
      </>
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/app" render={component} />
        <Route path="/" render={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
