import React, {Component}  from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card'
import Paper from 'material-ui/Paper'


export default class DesktopLanding extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="desktop-landing-message">
        <Card>
          <CardHeader
            title="SF BAD DATE LIST"
          />
          <CardTitle title="About" />
          <CardText>
            Welcome to the SF Bay Bad Date List, a project of the St. James Infirmary.
            The Bad Date List is a community-based violence intervention tool utilized
            by sex workers to share information regarding “bad dates.” A Bad Date may be
            any person who threatens, behaves violently towards, robs, extorts, or
            engages in any behavior that violates the agreed upon terms and boundaries
            of the exchange. This list may also be used to report bad encounters
            with law enforcement.
            <p>Disclaimer: The information placed on these reports represents information
            that was received by the Bad Date List Coordinator directly from effected
            individuals. The sole purpose of the SF Bay Bad Date List is to prevent
            future violence and danger to others.</p>
          </CardText>
          <CardActions>
            <Link to="/submit-report"><FlatButton
              label="Make A Report"
              backgroundColor= "#D32F2F" /></Link>
            <Link to="/view-reports" ><FlatButton
              label="View Reports"
              backgroundColor= "#F0EBE9"/></Link>
          </CardActions>
        </Card>
      </div>
    )
  }
}
