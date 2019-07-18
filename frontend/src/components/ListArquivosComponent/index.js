import React from 'react';
import api from '../../services/api';
import './listArquivosComponent.css';

class ListArquivos extends React.Component {
  constructor(props) {
    super(props);
    this.teste = this.teste.bind(this);
    this.state = {
      listArquivos: [
        {
          tipoRegistro: 1,
          data: '09/07/1997',
          numeroEstabelecimento: '008930',
          tipoCard: 'fagammon',
          sequencial: '15',
          periodoInicial: '09/07/1997',
          periodoFinal: '09/07/1997',
        },
        {
          tipoRegistro: 1,
          data: '09/07/1957',
          numeroEstabelecimento: '008930',
          tipoCard: 'fagammon',
          sequencial: '15',
          periodoInicial: '09/07/1965',
          periodoFinal: '09/07/1997',
        },
      ],
    };
  }

  async teste() { //eslint-disable-line
    const result = await api.get('/list');
    console.log(result.data);
  }

  render() {
    const column = ['Tipo de registro', 'Data', 'Tipo do Card', 'Sequencial', 'Período Inicial', 'Periodo Final'];
    return (
      <div className="field">
        <table className="table">
          <thead>
            <tr>
              {column.map(coluna => <th key={coluna}>{coluna}</th>)}
            </tr>
          </thead>
          <tbody>
            {this.state.listArquivos.map(arquivo => (
              <tr>
                <td>{arquivo.tipoRegistro}</td>
                <td>{arquivo.data}</td>
                <td>{arquivo.tipoCard}</td>
                <td>{arquivo.sequencial}</td>
                <td>{arquivo.periodoInicial}</td>
                <td>{arquivo.periodoFinal}</td>
              </tr>
            ),
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ListArquivos;
