import React from 'react';
import Menu from 'Components/MenuComponent';
import HeaderComponent from 'Components/HeaderComponent';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const App = () => (
  <div>
    <HeaderComponent />
    <BrowserRouter>
      <Menu />
      <Routes />
    </BrowserRouter>
  </div>
);

export default App;
