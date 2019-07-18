import React from 'react';
import api from '../../services/api';
import './inputComponent.css';

class InputFile extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.teste = this.teste.bind(this);
    this.montarObjeto = this.montarObjeto.bind(this);
    this.state = {
      texto: null,
      card: {
        tipoRegistro: null,
        data: null,
        numeroEstabelecimento: null,
        tipoCard: null,
        sequencial: null,
        periodoInicial: null,
        periodoFinal: null,
      },
    };
  }

  async teste() { //eslint-disable-line
    const result = await api.get('/list');
    console.log(result.data);
  }

  handleChange(arquivo) {
    const reader = new FileReader();

    reader.readAsText(arquivo);
    reader.onload = (event) => {
      this.setState({ texto: event.target.result });
    };
  }

  montarObjeto() {
    const uflaCard = 'UflaCard';
    const fagammonCard = 'FagammonCard';

    if (this.state.texto.indexOf(fagammonCard) !== -1) {
      this.setState(state => ({
        card: {
          tipoRegistro: state.texto.substring(0, 1),
          data: state.texto.substring(1, 9),
          numeroEstabelecimento: state.texto.substring(9, 17),
          tipoCard: state.texto.substring(17, 29),
          sequencial: state.texto.substring(29, 36),
          periodoInicial: null,
          periodoFinal: null,
        },
      }));
    } else if (this.state.texto.indexOf(uflaCard) !== -1) {
      this.setState(state => ({
        card: {
          tipoRegistro: state.texto.substring(0, 1),
          numeroEstabelecimento: state.texto.substring(1, 11),
          data: state.texto.substring(11, 19),
          periodoInicial: state.texto.substring(19, 27),
          periodoFinal: state.texto.substring(27, 35),
          sequencial: state.texto.substring(35, 42),
          tipoCard: state.texto.substring(42, 50),
        },
      }));
    }
    console.log(this.state.card);
  }

  render() {
    return (
      <div className="input">
        <div>
          <h1 className="titulo">Selecione o arquivo:</h1>
          <div className="teste">
            <input type="file" onChange={e => this.handleChange(e.target.files[0])} />
            <button type="button" onClick={this.montarObjeto}>Enviar</button>

          </div>
        </div>
      </div>
    );
  }
}

export default InputFile;
