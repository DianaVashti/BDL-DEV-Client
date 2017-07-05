import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

const style = {
  padding: 25,
  width: "100%",
  height: "100%",
  backgroundColor: "#C8C5C5",
}

export default class ErrorModal extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="status-modal">
        <Paper zDepth={5} style={style}>
          <h1>Sorry!</h1>
          <h3>There was an Error</h3>
          <h6>Your report did not post corrently</h6>
        </Paper>
      </div>
    )
  }
}
