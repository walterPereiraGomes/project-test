import React from 'react';

class InputFile extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      texto: null,
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

    const novoCard = {
      constante: {},
      dataGeracao: {},
      numeroEstabelecimento: {},
      tipo: {},
      sequencialArquivo: {},
    };

    if (this.state.texto.indexOf(fagammonCard) !== -1) {
      const id = this.state.texto.substring(0, 1);

      novoCard.constante.inicio = '001';
      novoCard.constante.fim = '001';
      novoCard.constante.tam = id.length;
      novoCard.constante.tipo = typeof (id);
      novoCard.constante.descricao = 'Tipo de Registro';
      novoCard.constante.edicaoDados = id;

      const data = this.state.texto.substring(1, 9);
      novoCard.dataGeracao.inicio = '002';
      novoCard.dataGeracao.fim = '009';
      novoCard.dataGeracao.tam = data.length;
      novoCard.dataGeracao.tipo = typeof (data);
      novoCard.dataGeracao.descricao = 'Data de Processamento';
      novoCard.dataGeracao.edicaoDados = data;

      const numeroEstabelecimento = this.state.texto.substring(10, 17);
      novoCard.numeroEstabelecimento.inicio = '010';
      novoCard.numeroEstabelecimento.fim = '017';
      novoCard.numeroEstabelecimento.tam = numeroEstabelecimento.length;
      novoCard.numeroEstabelecimento.tipo = typeof (numeroEstabelecimento);
      novoCard.numeroEstabelecimento.descricao = 'Estabelecimento';
      novoCard.numeroEstabelecimento.edicaoDados = numeroEstabelecimento;

      const fagammon = this.state.texto.substring(18, 29);
      novoCard.tipo.inicio = '018';
      novoCard.tipo.fim = '029';
      novoCard.tipo.tam = fagammon.length;
      novoCard.tipo.tipo = typeof (fagammon);
      novoCard.tipo.descricao = 'Tipo';
      novoCard.tipo.edicaoDados = fagammon;

      const sequencial = this.state.texto.substring(30, 36);
      novoCard.sequencialArquivo.inicio = '030';
      novoCard.sequencialArquivo.fim = '036';
      novoCard.sequencialArquivo.tam = sequencial.length;
      novoCard.sequencialArquivo.tipo = typeof (sequencial);
      novoCard.sequencialArquivo.descricao = 'Sequencia';
      novoCard.sequencialArquivo.edicaoDados = sequencial;
      console.log(novoCard);
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
        <button type="button" onClick={() => this.montarObjeto()}>Enviar</button>
      </div>
    );
  }
}

export default InputFile;
