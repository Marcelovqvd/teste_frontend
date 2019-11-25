import React, { Component } from 'react';
import { Container, Form, Title } from './styles';
import api from '../../services/api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Login extends Component {
  state = {
    email: '',
    password: ''
  }

  handleSubmit = async e => {
    e.preventDefault();
    try {
      const { email, password } = this.state;
      const response = await api.post('/login', { email, password });
      console.log(response.data.token);
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token);
        this.props.history.push('/users');
      }
    } catch (err) {
      toast.error("opa, ocorreu algum erro");
    }

  }
  render() {
    return (
      <Container>
        <Title>Sejam bem-vindos à nossa página!</Title>
        <Form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input type="text"
            placeholder="Digite aqui seu email"
            onChange={e => this.setState({ email: e.target.value })} />
          <label>Senha</label>
          <input type="password"
            placeholder="Informe sua senha"
            onChange={e => this.setState({ password: e.target.value })} />
          <button>Login</button>
        </Form>
      </Container>
    )
  }
}
