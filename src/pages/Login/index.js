import React, { Component } from 'react';
import { Container, Form } from './styles';
import api from '../../services/api';
import Link from 'react-router-dom';

export default class Login extends Component {
  state = {
    email: '',
    password: ''
  }


  handleSubmit = async e => {
    e.preventDefault();
    const { email, password } = this.state;
    const response = await api.post('/login', { email, password });
    console.log(response);
  }

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input type="text"
            placeholder="Digite aqui seu email"
            onChange={e => this.setState({ email: e.target.value })} />
          <label>Senha</label>
          <input type="password"
            placeholder="Informe sua senha"
            onChange={e => this.setState({ password: e.target.value })} />
          <button type="submit">Salvar</button>
        </Form>
      </Container>
    )
  }
}

