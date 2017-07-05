import React, {Component}  from 'react'
import {Link} from 'react-router'
import PropTypes from 'prop-types'
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'
import Paper from 'material-ui/Paper'

const titleStyle = {
  fontSize: "1.4em",
  fontFamily: 'Poppins, Open Sans',
  fontWeight: 400,
  color:  '#636262',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  paddingRight: 0,
  paddingTop: 5,
  textShadow: '1px 1px 2px #EEEEEE'
}

const styles = {
  height: '70px',
  justifyContent: 'flex-end',
  boxShadow: '0px 1px 1px 0px rgba(10, 2, 0, 0.45)',
  backgroundColor: '#d8d6d6',
  paddingRight: 20,
  paddingLeft: 20
}

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mobile-header">
        <div className="header-navbar">
          <Toolbar className="toolbar-container" style={styles}>
            <ToolbarGroup className="toolbar-container-items">
              <img src='images/SF-BDL-Ladybug-Logo.svg' height={70} width={70}/>
              <ToolbarTitle style={titleStyle} text='SF BAY BAD DATE LIST'></ToolbarTitle>
            </ToolbarGroup>
          </Toolbar>
        </div>
      </div>
    )
  }
}

{/* <ToolbarGroup
  className="toolbar-container-items">
   <h2 style={titleStyle}>SF BAY BAD DATE LIST</h2>
</ToolbarGroup> */}
