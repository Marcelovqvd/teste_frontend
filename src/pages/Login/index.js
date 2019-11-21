import React, { Component } from 'react';
import { Container, Form } from './styles';

export default class Login extends Component {

  render() {

    return (
      <Container>
        <Form onSubmit={handleSignIn}>
          {error && <p>{error}</p>}
          <input type="email"
            placeholder="endereço de email"
            onChange={e => setEmail(e.target.value)}
          />

          <input type="password"
            placeholder="Senha"
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Entrar</button>

        </Form>

      </Container>
    )
  }
}


