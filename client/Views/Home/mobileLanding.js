import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router'
import Button from 'react-bootstrap/lib/Button'
import InstallIcon from './installIcon'
import {LinkContainer} from 'react-router-bootstrap'
import Spinner from '../../Spinner/index'


const makeButtonStyle = {
  height: '14vh',
  width: '100%',
  borderRadius: 20,
  fontFamily: "Poppins, Open Sans",
  backgroundColor: '#C62828',
  color: '#EEEEEE'
}


const readButtonStyle = {
  height: '14vh',
  width: '100%',
  borderRadius: 20,
  fontFamily: "Poppins, Open Sans",
  backgroundColor: "#EEEEEE"
}

const supportButtonStyle = {
  height: '14vh',
  width: '100%',
  borderRadius: 20,
  fontFamily: "Poppins, Open Sans",
  backgroundColor: "#d8d6d6"
}

const labelStyle = {
  fontSize: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export default class MobileLanding extends Component {
  constructor(props) {
      super(props);
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    })
  }

  onClick(e){
    e.stopPropagation()
  }

  render() {
    return (
      <div className="landing-page-main-btn-container">
        <div className="button-container">
          <LinkContainer to='/submit-report'>
            <Button style={makeButtonStyle}>
              MAKE A REPORT
            </Button></LinkContainer>
          <LinkContainer to='/view-reports'><Button style={readButtonStyle}>
            READ A REPORT
          </Button></LinkContainer>
          <LinkContainer to='/support'><Button style={supportButtonStyle}>
            GET SUPPORT
          </Button></LinkContainer>
        </div>
        <InstallIcon />
      </div>
    )
  }
}
