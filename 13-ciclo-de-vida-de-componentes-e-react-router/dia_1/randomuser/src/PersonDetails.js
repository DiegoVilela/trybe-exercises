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
      loading: false,
    });
  }

  shouldComponentUpdate(_nextProps, nextState) {
    console.log("nextState", nextState);

    const AGE = 50;
    return nextState.person.age < AGE;
  }

  getUserObj(user) {
    return {
      name: `${user.name.first} ${user.name.last}`,
      email: user.email,
      age: user.dob.age,
      image: user.picture.thumbnail,
    };
  }

  showLoading = () => <div>Loading...</div>;

  render() {
    const { person: { name, email, age, image }, loading } = this.state;

    if (loading) return this.showLoading();

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
