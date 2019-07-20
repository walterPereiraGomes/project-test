import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../../services/api';
import './inputComponent.css';

class InputFile extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.montarObjeto = this.montarObjeto.bind(this);
    this.isDisable = this.isDisable.bind(this);
    this.state = {
      texto: null,
    };
  }

  componentDidMount() {
    toast.configure({
      autoClose: 5000,
      draggable: false,
    });
  }

  handleChange(arquivo) {
    const reader = new FileReader();

    reader.readAsText(arquivo);
    reader.onload = (event) => {
      this.setState({ texto: event.target.result });
    };
  }

  async montarObjeto() {
    const uflaCard = 'UflaCard';
    const fagammonCard = 'FagammonCard';

    let cardTest = {};

    const { state } = this;

    if (this.state.texto.indexOf(fagammonCard) !== -1) {
      cardTest = {
        tipoRegistro: state.texto.substring(0, 1),
        data: state.texto.substring(1, 9),
        numeroEstabelecimento: state.texto.substring(9, 17),
        tipoCard: state.texto.substring(17, 29),
        sequencial: state.texto.substring(29, 36),
        periodoInicial: '',
        periodoFinal: '',
      };
    } else if (this.state.texto.indexOf(uflaCard) !== -1) {
      cardTest = {
        tipoRegistro: state.texto.substring(0, 1),
        numeroEstabelecimento: state.texto.substring(1, 11),
        data: state.texto.substring(11, 19),
        periodoInicial: state.texto.substring(19, 27),
        periodoFinal: state.texto.substring(27, 35),
        sequencial: state.texto.substring(35, 42),
        tipoCard: state.texto.substring(42, 50),
      };
    } else {
      toast.warn('Card inválido');
      return;
    }
    try {
      await api.post('/save', cardTest);
      this.setState({ texto: null });
      toast.success('Card finalizado com sucesso!');
    } catch (e) {
      toast.error(e.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }

  isDisable() {
    return this.state.texto === null;
  }

  render() {
    let classButton = 'btn';
    if (this.isDisable()) {
      classButton = 'disable';
    }
    return (
      <div className="input">
        <div>
          <h1 className="titulo">Selecione o arquivo:</h1>
          <div className="box">
            <input type="file" className="file_customizada" onChange={e => this.handleChange(e.target.files[0])} />
            <button type="button" className={classButton} disabled={this.isDisable()} onClick={this.montarObjeto}>Finalizar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default InputFile;
