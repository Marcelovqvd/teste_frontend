import React, { Component } from 'react';
import api from '../../services/api';

export default class UsersList extends Component {
  state = {
    users: [],
  }
  async componentDidMount() {
    const response = await api.get("/users?page=2");
    console.log(response);
  }


  render() {
    return (
      <h1>Lista</h1>
    )

  }
}
