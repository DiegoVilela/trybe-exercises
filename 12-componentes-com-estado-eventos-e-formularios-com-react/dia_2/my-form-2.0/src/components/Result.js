import React, { Component } from 'react';

class Result extends Component {
  render() {
    const { state } = this.props;
    const stateAddress = state.state;
    const {
      fullname, email, cpf, address, city,
      type, cvsummary, role, roleDescription,
    } = state;

    return (
      <div className="result">
        <p><strong>Name: </strong>{ fullname }</p>
        <p><strong>Email: </strong>{ email }</p>
        <p><strong>CPF: </strong>{ cpf }</p>
        <p><strong>Address: </strong>{ address }</p>
        <p><strong>City: </strong>{ city }</p>
        <p><strong>State: </strong>{ stateAddress }</p>
        <p><strong>Type: </strong>{ type }</p>
        <hr />
        <p><strong>CV Summary: </strong>{ cvsummary }</p>
        <p><strong>Role: </strong>{ role }</p>        
        <p><strong>Role Description: </strong>{ roleDescription }</p>        
      </div>
    );
  }
}

export default Result;
