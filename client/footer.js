import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionViewList from 'material-ui/svg-icons/action/view-list'

const bgColor = {
  backgroundColor: "#d8d6d6",
  boxShadow: '0px -1px 1px 0px rgba(10, 2, 0, .35)'
}

export default class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="footer-navbar">
        <BottomNavigation style={bgColor}>
          <Link to="/"><BottomNavigationItem
            label="Home"
            icon={<ActionHome style={{color: '#090200'}}/>} /></Link>
          <Link to="/view-reports"><BottomNavigationItem
            label="Read"
            icon={<ActionViewList />} /></Link>
          <Link to="/support"><BottomNavigationItem
            label="Support"
            icon={<ActionFavorite />} /></Link>
        </BottomNavigation>
      </div>
    )
  }
}
