import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardActions,
  CardHeader,
  CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import GoogleMap from './googleMap'

const ExpandableCard = (props) => {
  const reports = props.reports.map((report) => {
    return  (
      <Card className="card-container" key={report.id}>
        <CardHeader
          title={report.title}
          titleStyle={{
            font: '3em',
          }}
          subtitle={report.date}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          {report.content}
          <GoogleMap lng={Number(report.coordinates[0])} lat={Number(report.coordinates[1])}/>
        </CardText>
      </Card>
    )
  });

  return (
    <ul>
      {reports}
    </ul>
  )
};

export default ExpandableCard;
