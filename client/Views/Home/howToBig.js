import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

const style ={
  opacity: "100%",
  zIndex: 105,
  width: "95%",
  padding: 10
}

export default class HowToBig extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="how-to-big">
        <Paper style={style}>
          <h5>iPhone, iPad, and iPod Touch</h5>
          <p>
            On the bottom of the browser window tap the Share button (the rectangle
            with the arrow pointing upward out of it). Then, tap the Add to Home
            Screen option and type in the name you wish to display along the icon
            on your home screen.
          </p>
          <br/>
          <h5>Android</h5>
          <p>
            If you use chrome, tap the menu button and tap Add to Homescreen. Enter
            the name you wish to display under the icon on your home screen. If you
            use Firefox for Android, tap the menu button, then tap the Page option,
            and tap Add to Home Screen.
          </p>
        </Paper>
      </div>
    )
  }
}
