import React from 'react';
import './index.css';

import HeaderComponent from 'Components/HeaderComponent';
import InputFile from 'Components/InputFileComponent';
import Menu from 'Components/MenuComponent';
import ListagemArquivos from 'Components/ListArquivosComponent';

const Welcome = () => (
  <div>
    <HeaderComponent />
    <div className="body">
      <Menu />
      {/* <InputFile /> */}
      <ListagemArquivos />
    </div>
  </div>
);

export default Welcome;
