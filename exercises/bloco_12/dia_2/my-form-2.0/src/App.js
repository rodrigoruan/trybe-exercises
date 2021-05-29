import React, { Component } from 'react';
import Input from './Input';
import estados from './data';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
    };
    this.showInfos = this.showInfos.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }



  showInfos() {
    this.setState({
      form: (
        <div>
          {Object.entries(this.state).map((elemento) => (
            <p key={elemento[0]}>
              {elemento[0]}: {elemento[1]}
            </p>
          ))}
        </div>
      ),
    });
  }

  onBlur({ target }) {
    const { name, value } = target;
    if (/^\d/.test(value))
      this.setState({
        [name]: '',
      });
  }

  render() {
    let active = true;
    return (
      <form>
        <fieldset>
          <Input
            maxLength='40'
            value={this.state.nome}
            required
            name='nome'
            onChange={this.handleClick}
          />
          <Input
            value={this.state.email}
            name='email'
            maxLength='50'
            required
            onChange={this.handleClick}
          />
          <Input
            name='cpf'
            value={this.state.cpf}
            onChange={this.handleClick}
            required
            maxLength='11'
          />
          <Input
            name='endereco'
            value={this.state.endereco}
            onChange={this.handleClick}
            required
            maxLength='200'
          />
          <Input
            name='cidade'
            onBlur={this.onBlur}
            value={this.state.cidade}
            onChange={this.handleClick}
            required
            maxLength='28'
          />
          <select name='estados' required onChange={this.handleChange}>
            <option>Selecione algum estado</option>
            {estados.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
          <Input
            onChange={this.handleClick}
            required
            value='casa'
            name='house'
            type='radio'
          />
          <Input
            onChange={this.handleClick}
            required
            value='apto'
            name='house'
            type='radio'
          />
        </fieldset>
        <fieldset>
          <textarea
            value={this.state.resumo}
            name='resumo'
            onChange={this.handleClick}
            maxLength='1000'
            required
          />
          <textarea
            value={this.state.cargo}
            name='cargo'
            onMouseEnter={() => {
              if (active) {
                alert('Exiba essa mensagem apenas uma vez.');
                active = false;
              }
            }}
            onChange={this.handleClick}
            required
            maxLength='40'
          />
          <textarea
            value={this.state.description}
            name='description'
            onChange={this.handleClick}
            required
            maxLength='500'
          />
        </fieldset>
        <button
          onClick={(e) => {
            this.showInfos();
            e.preventDefault();
          }}>
          Mostrar informações
        </button>
        <button
          onClick={(e) => {
            this.setState({
              cargo: '',
              cidade: '',
              cpf: '',
              description: '',
              email: '',
              endereco: '',
              form: '',
              house: '',
              nome: '',
              resumo: '',
            });
            e.preventDefault();
          }}>
          Limpar
        </button>
        {this.state.form}
      </form>
    );
  }
}

export default App;
