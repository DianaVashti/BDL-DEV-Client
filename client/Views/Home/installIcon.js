import React, {Component}  from 'react'
import PropTypes from 'prop-types';

import HowToBig from './howToBig'
import HowToSmall from './howToSmall'

const style = {
  padding: 10
}

export default class InstallIcon extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    }
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(e){
    e.stopPropagation()
    e.preventDefault()
    !this.state.open
      ? this.setState({open: true})
      : this.setState({open: false})
  }

  render(){
    return(
      <div onTouchTap={this.handleOnClick}>
        {this.state.open ? <HowToBig /> : <HowToSmall />}
      </div>
    )
  }
}
