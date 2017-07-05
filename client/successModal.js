import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

const style = {
  padding: 25,
  width: "100%",
  height: "100%",
  backgroundColor: "#C8C5C5",
}

export default class SuccessModal extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="status-modal">
        <Paper zDepth={5} style={style}>
          <h1>Thank You!</h1>
          <h4>Your report has been sent successfully.</h4>
        </Paper>
      </div>
    )
  }
}
