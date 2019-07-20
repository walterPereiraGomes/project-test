import React from 'react';
import api from '../../services/api';
import './listArquivos.css';

class ListArquivos extends React.Component {
  constructor(props) {
    super(props);
    this.convertData = this.convertData.bind(this);
    this.state = {
      listArquivos: [],
    };
  }


  async componentDidMount() {
    const arquivos = await api.get('/listArquivos');

    this.setState({ listArquivos: arquivos.data });
  }

  convertData(data) { //eslint-disable-line
    return data ? new Date(data).toLocaleDateString() : '-';
  }

  render() {
    const column = ['Tipo de registro', 'Data', 'Estabelecimento', 'Tipo do Card', 'Sequencial', 'Período Inicial', 'Periodo Final'];
    return (
      <div className="field">
        <table className="table">
          <thead>
            <tr className="head-table">
              {column.map(coluna => <th key={coluna}>{coluna}</th>)}
            </tr>
          </thead>
          <tbody>
            {this.state.listArquivos.map(arquivo => (
              <tr className="body-table" key={arquivo.id}>
                <td>{arquivo.tipoRegistro}</td>
                <td>{this.convertData(arquivo.data)}</td>
                <td>{arquivo.numeroEstabelecimento}</td>
                <td>{arquivo.tipoCard}</td>
                <td>{arquivo.sequencial}</td>
                <td>{this.convertData(arquivo.periodoInicial)}</td>
                <td>{this.convertData(arquivo.periodoFinal)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListArquivos;
