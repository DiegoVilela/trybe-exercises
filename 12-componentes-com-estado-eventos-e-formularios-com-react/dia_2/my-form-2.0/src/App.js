import React, { Component } from "react";
import LastJob from "./components/LastJob";
import PersonalInfo from './components/PersonalInfo';
import Result from "./components/Result";
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      type: 'house',
      cvsummary: '',
      role: '',
      roleDescription: '',
      showResult: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.showResult = this.showResult.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  showResult() {
    this.setState({showResult: true});
  }

  handleClear() {
    this.setState({
      fullname: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      type: 'house',
      cvsummary: '',
      role: '',
      roleDescription: '',
      showResult: false,
    });
  }

  render() {
    return (
      <div className="container">
        <form>
          <PersonalInfo state={ this.state } changeHandler={ this.handleInputChange } />
          <LastJob state={ this.state } changeHandler={ this.handleInputChange } />
          <div className="row">
            <div className="col-100">
              <input type="button" value="Revise" onClick={ this.showResult } />
              <input type="button" value="Clear" onClick={ this.handleClear }/>
            </div>
          </div>
        </form>
        { this.state.showResult && <Result state={this.state} />}
      </div>
    );
  }
}

export default App;
