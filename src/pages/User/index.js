import React, { Component } from 'react';
import api from '../../services/api';

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
        <p>{user.first_name}</p>
        <p>{user.email}</p>
        <p>{user.avatar}</p>
      </>
    )

  }
}
