import React, { Component } from 'react';

import { connect } from 'react-redux';
import { add, save } from './actions/children'


import logo from './logo.svg';
import './App.css';

class App extends Component {

  _handleRadioChange = (event) => {
    const { name, type, value } = event.target;
    console.log('value', value, typeof value);
    switch (value) {
      case 'yes':
      this.props.add();
        break;
      case 'no':
      // TODO: delete empty one
      default:

    }
  };

  _handleUpdate = (idx, {target: {name, value}}) => this.props.save(idx, {[name]: value});

  _handleSubmit = (idx, event) => {
    event.preventDefault();
    // const firstName = event.target.firstName.value;
    // const lastName = event.target.lastName.value;
    // const data = {firstName, lastName, saved: true};
    // console.log(data);
    this.props.save(idx, {saved: true});
  }

  render() {
    const {children} = this.props;
    return (
      <div className="App">
        <div>Do you have any children?</div>
        <div>
          <label>
            <input type="radio" name={'children'} value={'yes'} onChange={this._handleRadioChange} />
            Yes
          </label>
          <label>
            <input type="radio" name={'children'} value={'no'} onChange={this._handleRadioChange} />
            No
          </label>
        </div>

        {
          children.length > 0 &&
        <div>
          <h3>{children.length > 1 ? 'Children' : 'Child'}</h3>
          {
            children.map((child, idx) => {
              return (
                <form key={idx} onSubmit={(e) => this._handleSubmit(idx, e)}>
                  <label>
                    First name:
                    <input type="text" name="firstName" value={child.firstName}
                      onChange={(e) => this._handleUpdate(idx, e)} />
                  </label>
                  <label>
                    Last name:
                    <input type="text" name="lastName" value={child.lastName}
                      onChange={(e) => this._handleUpdate(idx, e)} />
                  </label>
                  {
                    !child.saved &&
                    <input type="submit" value="Save" />
                  }
                  {
                    child.saved && idx === children.length - 1 &&
                    <div>
                      <div>Do you have any other children?</div>
                      <div>
                        <label>
                          <input type="radio" name={'children'} value={'yes'} onChange={this._handleRadioChange} />
                          Yes
                        </label>
                        <label>
                          <input type="radio" name={'children'} value={'no'} onChange={this._handleRadioChange} />
                          No
                        </label>
                      </div>
                    </div>
                  }
                </form>
              )
            })
          }
        </div>
      }

      </div>
    );
  }
}

export default connect(
  (state) => ({
    children: state
  }),
  {
    add, save
  }
)(App);
