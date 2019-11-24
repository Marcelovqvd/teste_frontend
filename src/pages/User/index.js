import React, { Component } from 'react';
import api from '../../services/api';
import { Container, Title, Lista } from './styles';

export default class User extends Component {
  state = {
    user: ''
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const response = await api.get(`/users/${id}`);
    this.setState({ user: response.data.data });
  }


  render() {
    const { user } = this.state;

    return (
      <>
        <Title>Detalhes do Usuário</Title>
        <Container>
          <Lista>
            <li>
              <p>{user.first_name}</p>
            </li>
            <li>
              <p>{user.email}</p>
            </li>
            <li>
              <img src={user.avatar} alt={user.avatar}></img>
            </li>
          </Lista>
        </Container>
      </>
    )

  }
}
