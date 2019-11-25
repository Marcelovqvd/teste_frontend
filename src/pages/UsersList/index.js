import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { Container, Title, Lista, Page } from './styles';

export default class UsersList extends Component {
  state = {
    users: [],
    usersInfo: {},
    page: 1,
    botões: []
  }

  componentDidMount() {
    this.loadUsers();
  }

  componentDidUpdate(_, prevState) {
    const { botões } = this.state;
    if (prevState.users !== this.state.users) {
      this.setState({ botões: [botões] });
    }
  }

  loadUsers = async (page = 1) => {
    const response = await api.get(`/users?page=${page}`);
    const { data, ...usersInfo } = response.data;
    this.setState({ users: data, usersInfo, page });
  }

  prevPage = () => {
    const { page } = this.state;
    if (page === 1) return;
    const pageNumber = page - 1;
    this.loadUsers(pageNumber);
  };

  nextPage = () => {
    const { page, usersInfo } = this.state;
    if (page === usersInfo.total_pages) return;
    const pageNumber = page + 1;
    this.loadUsers(pageNumber);
  };


  render() {
    const { users, page, usersInfo, botões } = this.state;
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
        <Page>
          {botões.map(botao => (
            <>
              <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
              <button disabled={page === usersInfo.total_pages} onClick={this.nextPage}>Próxima</button>
            </>
          ))}
        </Page>
      </>
    )
  };
}

