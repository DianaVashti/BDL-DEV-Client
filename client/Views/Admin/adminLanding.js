import React, {Component}  from 'react'
import PropTypes from 'prop-types'
import AdminMain from './adminMain'

// WebFont.load({
//   google: {
//     families: ['Open Sans:300,400,700', 'sans-serif']
//   }
// });

export default class ViewReportsLanding extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div>
          <AdminMain />
        </div>
      </div>
    )
  }
}
