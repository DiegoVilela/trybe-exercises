import React, { Component } from 'react';

class PersonalInfo extends Component {
  render() {
    const { changeHandler, state } = this.props;
    const stateAddress = state.state;
    const { fullname, email, cpf, address, city, type} = state;

    return (
      <fieldset>
        <h2>Personal Information</h2>
        <div className="row">
          <div className="col-25">
            <label htmlFor="fullname">Full Name</label>
          </div>
          <div className="col-75">
            <input type="text" id="fullname" name="fullname" value={ fullname } placeholder="Your full name..." onChange={ changeHandler } />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="email">Email</label>
          </div>
          <div className="col-75">
            <input type="text" id="email" name="email" value={ email } placeholder="Your email..." onChange={ changeHandler } />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="cpf">CPF</label>
          </div>
          <div className="col-75">
            <input type="text" id="cpf" name="cpf" value={ cpf } placeholder="Your CPF..." onChange={ changeHandler } />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="address">Address</label>
          </div>
          <div className="col-75">
            <input type="text" id="address" name="address" value={ address } placeholder="Your address..." onChange={ changeHandler } />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="city">City</label>
          </div>
          <div className="col-75">
            <input type="text" id="city" name="city" value={ city } placeholder="Your city..." onChange={ changeHandler } />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="state">State</label>
          </div>
          <div className="col-75">
            <select id="state" name="state" value={ stateAddress } onChange={ changeHandler }>
              <option value="">Choose a state...</option>
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
              <option value="EX">Estrangeiro</option>
          </select>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label>Type</label>
          </div>
          <div className="col-75">
            <label htmlFor="house">
              House
              <input type="radio" id="house" name="type" value="house" checked={ type === 'house' } onChange={ changeHandler } />
            </label>
            <label htmlFor="apartment">
              Apartment
              <input type="radio" id="apartment" name="type" value="apartment" checked={ type === 'apartment' } onChange={ changeHandler } />
            </label>
          </div>
        </div>
      </fieldset>
    );
  }
}

export default PersonalInfo;
