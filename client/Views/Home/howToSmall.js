import React, {Component}  from 'react'
import PropTypes from 'prop-types';

export default class HowToSmall extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="how-to-small">
        <p>Click here to install app!</p>
      </div>
    )
  }
}
