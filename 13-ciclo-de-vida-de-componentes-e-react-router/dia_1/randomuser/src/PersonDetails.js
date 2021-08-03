import React, { Component } from "react";

class PersonDetails extends Component {
  async componentDidMount() {
    const endpoint = 'https://api.randomuser.me/';

    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
  }

  render() {
    return <h1>Hi</h1>
  }
}

export default PersonDetails;
