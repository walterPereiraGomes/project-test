import React from 'react';

class InputFile extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.montarObjeto = this.montarObjeto.bind(this);
    this.state = {
      texto: null,
      card: {
        tipoRegistro: '',
        data: '',
        numeroEstabelecimento: '',
        tipoCard: '',
        sequencial: '',
      },
    };
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

    const text = this.state.texto;

    console.log(text);

    if (this.state.texto.indexOf(fagammonCard) !== -1) {
      console.log('entrei');
      // this.setState({
      //   card: {
      //     tipoRegistro: 'text.substring(0, 1)',
      //     data: 'text.substring(1, 9)',
      //     numeroEstabelecimento: 'text.substring(9, 17)',
      //     tipoCard: 'text.substring(17, 29)',
      //     sequencial: 'text.substring(29, 36)',
      //   },
      // });

      this.setState({
        card: {
          tipoRegistro: 'oi',
          data: 'oi',
          numeroEstabelecimento: 'toi',
          tipoCard: 'oi',
          sequencial: 'oi',
        },
      });

      console.log(this.state.card);
    } else if (this.state.texto.indexOf(uflaCard) !== -1) {
      console.log('caiu na ufla');
    }
  }


  render() {
    const arquivo = this.state.texto == null ? '' : this.state.texto;
    return (
      <div>
        <input type="file" onChange={e => this.handleChange(e.target.files[0])} />
        <br />
        <span>{arquivo}</span>
        <br />
        <button type="button" onClick={this.montarObjeto}>Enviar</button>
      </div>
    );
  }
}

export default InputFile;
