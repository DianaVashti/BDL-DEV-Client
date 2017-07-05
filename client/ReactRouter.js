import ReactDom from 'react-dom'
import {Component} from 'react'
import React from 'react'
import PropTypes from 'prop-types';
import { Router, Route, browserHistory } from 'react-router';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import LandingPage from './Views/Home/landingPage'
import ViewReportsLanding from './Views/Read/viewReportsLanding'
import AdminLanding from './Views/Admin/adminLanding'
import AdminLogin from './Views/Admin/adminLogin'
import FileReportLanding from './Views/Make/fileReportLanding'
import ResourcesLanding from './Views/Support/resourcesLanding'

export default class ReactRouter extends Component {
  constructor(props) {
    super(props)
  }

  requireAuth(nextState, replace) {
    let isLoggedIn = sessionStorage.getItem('auth');
    if (isLoggedIn === null || isLoggedIn === undefined) {
      replace({
        pathname: '/admin-login'
      })
    }
  }

  render() {

    const landingPageComponent = (props, state, params) =>
      <LandingPage />

    const viewReportsComponent = (props, state, params) =>
      <ViewReportsLanding />

    const adminReportsComponent = (props, state, params) =>
      <AdminLanding />

    const adminLoginComponent = (props, state, params) =>
      <AdminLogin />

    const fileReportComponent = (props, state, params) =>
      <FileReportLanding />

    const resourcesComponent = (props, state, params) =>
      <ResourcesLanding />

    return (
      <MuiThemeProvider >
        <Router history={browserHistory}>
          <Route path="/" component={landingPageComponent} />
          <Route path="/view-reports" component={viewReportsComponent} />
          <Route path="/admin-login" component={adminLoginComponent} />
          <Route path="/admin-reports" component={adminReportsComponent} onEnter={this.requireAuth} />
          <Route path="/submit-report" component={fileReportComponent} />
          <Route path="/support" component={resourcesComponent} />
        </Router>
      </MuiThemeProvider>
    )
  }
}
