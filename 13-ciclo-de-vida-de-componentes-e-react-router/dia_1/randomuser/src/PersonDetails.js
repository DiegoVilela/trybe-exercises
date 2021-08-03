import React, { Component } from "react";

class PersonDetails extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      person: [],
    }
  }

  async componentDidMount() {
    const endpoint = 'https://api.randomuser.me/';

    const response = await fetch(endpoint);
    const data = await response.json();

    this.setState({
      person: data.results[0],
    });
  }

  render() {
    return <h1>{this.state.person.email}</h1>
  }
}

export default PersonDetails;
