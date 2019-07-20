import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => (
  <div className="menu">
    <ul className="no-padding">
      <li className="box-menu flex-center">
        <Link className="full-width-heigth flex-center" to="/">Home</Link>
      </li>
      <li className="box-menu">
        <Link className="full-width-heigth flex-center" to="/enviar">Enviar</Link>
      </li>
      <li className="box-menu">
        <Link className="full-width-heigth flex-center" to="/listagem">Arquivos</Link>
      </li>
    </ul>
  </div>
);

export default Menu;
