import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router'
import axios from 'axios';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class AdminLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    };
    this.handleSubmitButtonTap = this.handleSubmitButtonTap.bind(this);
  }

  handleSubmitButtonTap() {
    axios.post('http://localhost:8080/api/admins/login', {
      email: this.refs.email.getValue(),
      password: this.refs.password.getValue()
    })
    .then((response) => {
			sessionStorage.setItem('auth', response.headers['x-auth']);
      browserHistory.push('/admin-reports')
    })
    .catch((error) => {
      console.log('Something went wrong ', error)
      browserHistory.push('/admin-login')
      // Post some popup saying that login failed
    })
  }

  handleOnCancel() {
    this.setState({ open: false }, () => {
      browserHistory.push('/')
    })
  }

  render() {
    const actions = [
      <Link to="/"><FlatButton
        label="Cancel"
        backgroundColor="#E21E26"
        style={{marginRight:2}}
        onTouchTap={this.handleOnCancel.bind(this)} /></Link>,
      <FlatButton
        label="Submit"
        backgroundColor="#C8C5C5"
        disabled={false}
        onTouchTap={this.handleSubmitButtonTap}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Login"
          actions={actions}
          modal={true}
          open={this.state.open}>
          <TextField
            hintText="Email"
            floatingLabelText="Email"
            floatingLabelFocusStyle={{color: "#090200"}}
            ref='email'
            type="text" /><br />
          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            floatingLabelFocusStyle={{color: "#090200"}}
            ref='password'
            type="password" /><br />
        </Dialog>
      </div>
    );
  }
}
