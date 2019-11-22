import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

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
        <h1>Lista</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <Link to={`/user/${user.id}`}>{user.first_name}</Link>
              <span>{user.email}</span>
              <span>{user.avatar}</span>
            </li>
          ))}
        </ul>
      </>
    )

  }
}
