import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import axios from 'axios';

import {Form, Field} from 'simple-react-form'

import RaisedButton from 'material-ui/RaisedButton';
import Text from 'simple-react-form-material-ui/lib/text'

export default class AdminResourceForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      phone: "",
      type: ""
    }
  }

  handleOnSubmit() {
    const data = this.state
    axios.defaults.headers.common['x-auth'] = sessionStorage.getItem('auth');
    axios.post('https://st-james-bdl-api.herokuapp.com/api/services', data)
    .then((res) => {
      // show a success message to user
      setTimeout(() => {
        console.log('Success', res)
        browserHistory.push('/')
      }, 1000)
    })
    .catch((error) => {
      // show error message to user
      setTimeout(() => {
        console.log('something went wrong ', error)
        browserHistory.push('/')
      }, 1000)
    })
  }


  render(){
    return(
      <div className="admin-add-resource">
        <h1>Add a Resource</h1>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <Field fieldName='name' label='Name*' type={Text} />
          <Field fieldName='streetAddress' label='Street Address*' type={Text} />
          <Field fieldName='city' label='City*' type={Text} />
          <Field fieldName='state' label='State*' type={Text} />
          <Field fieldName='zipCode' label='Zip Code*' type={Text} />
          <Field fieldName='phone' label='Phone*' type={Text} />
          <Field fieldName='type' label='Type*' type={Text} />
        </Form>
        <RaisedButton
          label="Submit"
          primary={false}
          backgroundColor="#C8C5C5"
          onTouchTap={this.handleOnSubmit.bind(this)}
        />
      </div>
    )
  }
}
