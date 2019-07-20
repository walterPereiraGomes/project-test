import React from 'react';
import Menu from 'Components/MenuComponent';
import HeaderComponent from 'Components/HeaderComponent';
import './app.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const App = () => (
  <div>
    <HeaderComponent />
    <div className="flex">
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
    </div>
  </div>
);

export default App;
