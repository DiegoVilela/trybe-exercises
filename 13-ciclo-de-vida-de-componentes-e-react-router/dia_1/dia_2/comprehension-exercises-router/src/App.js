import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Users from './components/Users';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Route exact path={"/"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/users/:id"} render={(props) => <Users {...props} greetingsMessage="Good morning" />} />
      </BrowserRouter>
    );
  }
}

export default App;
