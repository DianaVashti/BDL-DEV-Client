import React, {Component}  from 'react'
import PropTypes from 'prop-types';

import { browserHistory } from 'react-router';
import axios from 'axios'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import {Form, Field} from 'simple-react-form';
import Textarea from 'simple-react-form-material-ui/lib/textarea';
import TextField from 'material-ui/TextField';

const style = {
  fontSize: ".7em"
}

export default class AdminFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
      title: '',
      content: ''
    }

    this.postEditedReport = this.postEditedReport.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open: false});
  }

  postEditedReport() {
    const editedReport = {
      title: this.state.title,
      content: this.state.content
    }

    axios.defaults.headers.common['x-auth'] = sessionStorage.getItem('auth');
    axios.post(`http://localhost:8080/api/reports/${this.props.report._id}`, editedReport)
      .then((res) => {
        this.setState({open: false})
        this.props.fetchReports();
        browserHistory.push('/admin-reports');
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { report } = this.props;
    let { perpetrator, support } = this.props.report;
    if (support === undefined) {
      support = {}
    }
    // add functionality to be able to run a verification on change
    const actions = [
      <FlatButton
        label="Cancel"
        backgroundColor="#E21E26"
        labelStyle={{color: "#FAFAFA"}}
        style={{margin: "5"}}
        onTouchTap={this.handleClose} />,
      <FlatButton
        label="Submit"
        backgroundColor="#C8C5C5"
        style={{margin: "5"}}
        onTouchTap={this.postEditedReport} />
    ]

    return(
      <div >
        <RaisedButton label="Edit" onTouchTap={this.handleOpen} />
        <Dialog
          actions={actions}
          modal={true}
          open={this.state.open}
          autoScrollBodyContent={true} >
            <div className="admin-ui-container">
              <div className="admin-form-left">
                <Table>
                  <TableHeader
                    adjustForCheckbox={false}
                    displaySelectAll={false}
                    enableSelectAll={false} >
                    <TableRow>
                      <TableHeaderColumn>Field</TableHeaderColumn>
                      <TableHeaderColumn>Data</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={false}>
                    <TableRow>
                      <TableRowColumn style={style}>City</TableRowColumn>
                      <p className="admin-form-item">{report.city}</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn style={style}>Where</TableRowColumn>
                      <p className="admin-form-item">{report.locationType}</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn style={style}>When</TableRowColumn>
                      <p className="admin-form-item">{report.date}</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn style={style}>Gender</TableRowColumn>
                      <p className="admin-form-item">{report.gender}</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn style={style}>Perp Name</TableRowColumn>
                      <p className="admin-form-item">{perpetrator.name}</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn style={style}>Perp #</TableRowColumn>
                      <p className="admin-form-item">{perpetrator.phone}</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn style={style}>Perp E-mail</TableRowColumn>
                      <p className="admin-form-item">{perpetrator.email}</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn style={style}>Perp Type</TableRowColumn>
                      <p className="admin-form-item">{perpetrator.perpType}</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn style={style}>Ad?</TableRowColumn>
                      <p className="admin-form-item">{perpetrator.adServiceUsed ? perpetrator.adServiceUsed : ''}</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn style={style}>Perp Gender</TableRowColumn>
                      <p className="admin-form-item">{perpetrator.gender}</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn style={style}>Perp Age</TableRowColumn>
                      <p className="admin-form-item">{perpetrator.age}</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn style={style}>Perp Ethnicity</TableRowColumn>
                      <p className="admin-form-item">{perpetrator.race}</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn style={style}>Perp Height</TableRowColumn>
                      <p className="admin-form-item">{perpetrator.height}</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn style={style}>Perp Hair</TableRowColumn>
                      <p className="admin-form-item">{perpetrator.hair}</p>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
              <div className="admin-form-right">
                <Table>
                  <TableHeader
                    adjustForCheckbox={false}
                    displaySelectAll={false}
                    enableSelectAll={false} >
                    <TableRow>
                      <TableHeaderColumn>Field</TableHeaderColumn>
                      <TableHeaderColumn>Data</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={false}>
                    <TableRow>
                      <TableRowColumn style={style}>Perp Attributes</TableRowColumn>
                      <p className="admin-form-item">{perpetrator.attributes}</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn style={style}>Perp Vehicle</TableRowColumn>
                      <p className="admin-form-item">{perpetrator.vehicle ? perpetrator.vehicle : ''}</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn style={style}>Description</TableRowColumn>
                      <p className="admin-form-item">{report.assaultDescription}</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn style={style}>Assault Type</TableRowColumn>
                      <p className="admin-form-item">{report.assaultType.join()}</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Support needed?</TableRowColumn>
                      <p className="admin-form-item">{support.needSupport ? support.needSupport : ''}</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Preferred name?</TableRowColumn>
                      <p className="admin-form-item">{support.name ? support.name : ''}</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Contact means?</TableRowColumn>
                      <p className="admin-form-item">{support.contact ? support.contact : ''}</p>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn>Say SJI?</TableRowColumn>
                      <p className="admin-form-item">{support.callingFrom ? support.callingFrom : ''}</p>
                    </TableRow>
                  </TableBody>
                </Table>
              <div>
                <Form state={this.state.formContent} onChange={changes => this.setState(changes)}>
                  <Field fieldName='title' label='Title*' type={Textarea} row={2} />
                  <Field fieldName='content' label='Edited Report Content*' type={Textarea} row={7} />
                </Form>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    )
  }
}
