import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { Container, Title, Lista } from './styles';

export default class UsersList extends Component {
  state = {
    users: [],
  }

  async componentDidMount() {
    const response = await api.get("/users?page=2");
    this.setState({ users: response.data.data });
  }

  render() {
    const { users } = this.state;
    return (
      <>
        <Title>Lista de usuários</Title>
        <Container>
          <Lista>
            {users.map(user => (
              <li key={user.id}>
                <p>{user.first_name}</p>
                <p>{user.email}</p>
                <img src={user.avatar} alt={user.avatar}></img>
                <Link to={`/user/${user.id}`}>Detalhes</Link>
              </li>
            ))}
          </Lista>
        </Container>
      </>
    )
  }
}
