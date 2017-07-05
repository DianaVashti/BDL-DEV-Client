import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import Header from '../../header'
import MobileLanding from './mobileLanding'
import DesktopLanding from './desktopLanding'
import Footer from '../../footer'
import LandingPageHeader from './landingPageHeader'
import {red500, red900, grey300, grey400} from 'material-ui/styles/colors';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <LandingPageHeader className="home-screen-mobile-header"/>
        <div className="body-content">
          <MobileLanding />
          <DesktopLanding />
        </div>
        <Footer />
      </div>
    )
  }
}
