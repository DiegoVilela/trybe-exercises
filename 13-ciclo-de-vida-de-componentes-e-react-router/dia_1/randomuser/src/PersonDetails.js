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
      person: this.getUserObj(data.results[0]),
    });
  }

  getUserObj(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }

  render() {
    const { person: { name, email, age, image } } = this.state;

    return(
      <div>
        <p>{ name }</p>
        <p>{ email }</p>
        <p>{ age }</p>
        <img src={ image} alt={ name } />
      </div>
    );
  }
}

export default PersonDetails;
