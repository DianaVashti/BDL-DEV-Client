import React, {Component}  from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';
import Button from 'react-bootstrap/lib/Button'
import {LinkContainer} from 'react-router-bootstrap'

const toolBarStyles = {
	height: '70px',
  justifyContent: 'space-between',
  boxShadow: '0px 1px 1px 0px rgba(10, 2, 0, .35)',
  backgroundColor: '#d8d6d6',
  fontFamily: "Poppins, Open Sans",
  width: '100%'
}

const groupStyles = {
  height: '70px',
}

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }

  render() {
    return (
      <div className="header-navbar">
        <Toolbar
          style={toolBarStyles} >
          <ToolbarGroup
            className="toolbar-container-items"
            style={groupStyles}>
            <div className='logo-container'>
              <img src='images/SF-BDL-Ladybug-Logo.svg' height={'65px'} width={'75px'}/>
            </div>
            <LinkContainer to='/submit-report'>
              <Button className='report-header-btn'>REPORT A BAD DATE</Button>
            </LinkContainer>
          </ToolbarGroup>
        </Toolbar>
      </div>
    )
  }
}
