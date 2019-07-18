import React from 'react';
import './index.css';
import InputFile from 'Components/InputFileComponent';
import ListagemArquivos from 'Components/ListArquivosComponent';

const Welcome = () => (
  <div>
    <div className="body">
      <InputFile />
      <ListagemArquivos />
    </div>
  </div>
);

export default Welcome;
