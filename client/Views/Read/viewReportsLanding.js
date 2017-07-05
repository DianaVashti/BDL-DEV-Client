import React, {Component}  from 'react'
import PropTypes from 'prop-types'

import Footer from '../../footer'
import Header from '../../header'
import ViewReports from './viewReports'

export default class ViewReportsLanding extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Header />
        <div className="body-content">
          <ViewReports />
        </div>
        <Footer />
      </div>
    )
  }
}
