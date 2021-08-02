import React, { Component } from 'react';

class LastJob extends Component {
  render() {
    const { changeHandler, state } = this.props;
    const { cvsummary, role, roleDescription } = state;

    return (
      <fieldset>
        <h2>Last Job</h2>
        <div className="row">
          <div className="col-25">
            <label htmlFor="cvsummary">CV Summary</label>
          </div>
          <div className="col-75">
            <textarea id="cvsummary" name="cvsummary" value={ cvsummary } placeholder="Your CV summary..." onChange={ changeHandler } />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="role">Role</label>
          </div>
          <div className="col-75">
            <textarea id="role" name="role" value={ role } placeholder="Your role..." onChange={ changeHandler } />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="role">Role Description</label>
          </div>
          <div className="col-75">
            <input type="text" id="roleDescription" name="roleDescription" value={ roleDescription } placeholder="Role description..." onChange={ changeHandler } />
          </div>
        </div>
      </fieldset>
    );
  }
}

export default LastJob;
