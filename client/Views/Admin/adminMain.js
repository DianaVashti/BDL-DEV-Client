import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import {Link, browserHistory} from 'react-router'
import axios from 'axios';

import Paper from 'material-ui/Paper';
import Popover from 'material-ui/Popover/Popover';
import RaisedButton from 'material-ui/RaisedButton';

import AdminResourceForm from './adminResourceForm'
import Footer from '../../footer'
import ReportsTable from './reportsTable'
import Header from '../../header'
import Spinner from '../../Spinner/index'

export default class AdminMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [],
      open: false,
      anchorOrigin: {
        horizontal: 'right',
        vertical: 'bottom',
      },
      targetOrigin: {
        horizontal: 'left',
        vertical: 'bottom',
      },
			isLoading: true
    }

    this.fetchReports = this.fetchReports.bind(this);
  }

  fetchReports() {
    const jwt = sessionStorage.getItem('auth');

    const config = {
      headers: { 'x-auth': jwt }
    }

    axios.get('http://localhost:8080/api/admins/reports', config)
      .then((response) => {
        this.setState({
          reports: response.data,
          isLoading: false
        })
      })
      .catch((error) => {
        console.log('There was an error ', error)
      })
  }

  componentDidMount() {
    this.fetchReports()
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  setAnchor = (positionElement, position) => {
      const {anchorOrigin} = this.state;
      anchorOrigin[positionElement] = position;

      this.setState({
        anchorOrigin: anchorOrigin,
      });
    };

    setTarget = (positionElement, position) => {
      const {targetOrigin} = this.state;
      targetOrigin[positionElement] = position;

      this.setState({
        targetOrigin: targetOrigin,
      });
    };

  logOut() {
    axios.defaults.headers.common['x-auth'] = sessionStorage.getItem('auth')
    axios.delete('http://localhost:8080/api/admins/logout')
      .then(() => {
        browserHistory.push('/')
        sessionStorage.clear()
      })
      .catch((error) => {
        console.log('something went wrong')
      })
  }

  render() {

    if (this.state.isLoading) { return <Spinner /> }

    return (
      <div>
        <ReportsTable reports={this.state.reports} fetchReports={this.fetchReports} />
        <RaisedButton
          label="Add Resource"
          primary={false}
          backgroundColor="#C8C5C5"
          labelColor="#090200"
          onTouchTap={this.handleTouchTap}
          style={{margin: "5"}}
        />
          <Popover
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            anchorOrigin={this.state.anchorOrigin}
            targetOrigin={this.state.targetOrigin}
            onRequestClose={this.handleRequestClose}
            style={{padding: 5, width: "50%", boxShadow: "3px 3px 3px #E0E0E0", border: "1px solid #E0E0E0"}}>
            <AdminResourceForm />
          </Popover>
        <RaisedButton
          label="Log Out"
          primary={false}
          backgroundColor="#E21E26"
          labelColor="#FAFAFA"
          onTouchTap={this.logOut}
        />
      </div>
    )
  }
}
