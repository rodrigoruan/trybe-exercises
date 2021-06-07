import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      photo: '',
      dogName: '',
    };

    this.onLoad = this.onLoad.bind(this);
    this.fetchApi = this.fetchApi.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  //  Função chamado na inicialização do componente

  componentDidMount() {
    this.onLoad();
  }

  //  A cada atualização guarda o array com o nome do dog e a imagem no localStorage e verifica se tem 'terrier' na imagem do doguinho

  shouldComponentUpdate(_nextProps, { photo }) {
    const { dogName } = this.state;
    localStorage.setItem('dog', [dogName, photo]);

    return !photo.includes('terrier');
  }

  //  Função para verificar se tem algo no localStorage ao carregar, caso tenha pega o valor guardado e seta no state, caso contrário faz a requisição na API, essa função vai ser chamada no componentDidMount

  onLoad() {
    const savedItem = localStorage.getItem('dog').split`,`;

    if (savedItem) {
      this.setState({ dogName: savedItem[0], photo: savedItem[1] });
    } else {
      this.fetchApi();
    }
  }

  //  Função que faz a chamada para a API dos dogs, retorna uma imagem no state e também a raça do cachorro, além de fazer um alerta com a raça do cachorro

  async fetchApi() {
    this.setState({ loading: true }, async () => {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const { message } = await response.json();

      this.setState({
        photo: message,
        loading: false,
      });

      //  Regex para pegar a raça do cachorro

      const dogBreed = message.match(/(?<=breeds\/)\w+-?\w+(?=\/)/);
      alert(dogBreed);
    });
  }

  //  Função para alterar o state, padrão.

  changeState({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { photo, loading } = this.state;
    return (
      <>
        {loading ? <h1>Loading...</h1> : <img src={ photo } alt="dogPhoto" />}

        <input
          name="dogName"
          placeholder="Digite um nome para o doguinho"
          onChange={ this.changeState }
        />

        <button onClick={ this.updateDogName } type="button">
          Adicionar nome ao doguinho
        </button>

        <button type="button" onClick={ this.fetchApi }>
          Próximo Doguinho
        </button>
      </>
    );
  }
}

export default App;
