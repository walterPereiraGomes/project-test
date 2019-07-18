import React from 'react';
import './index.css';

class ListArquivos extends React.Component {
  constructor(props) {
    super(props);
    this.goRouteUpload = this.goRouteUpload.bind(this);
    this.goRouteListagem = this.goRouteListagem.bind(this);
  }

  goRouteUpload() { //eslint-disable-line
    this.props.location.push('/enviar'); //eslint-disable-line
  }

  goRouteListagem() { //eslint-disable-line
    this.props.location.push('/listagem'); //eslint-disable-line
  }

  render() {
    return (
      <div className="menu">
        <button type="button" className="box-menu" onClick={this.goRouteUpload}>Enviar</button>
        <button type="button" className="box-menu" onClick={this.goRouteListagem}>Arquivos</button>
      </div>
    );
  }
}

export default ListArquivos;
