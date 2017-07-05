import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Paper from 'material-ui/Paper';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';

import AdminFormContainer from './adminFormContainer'

export default class ReportsTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      multiSelectable: false,
      enableSelectAll: false,
      showCheckboxes: false,
      height: '70%',
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  }

  handleClose = () => {
    this.setState({open:false});
  }

  populateTable() {
    return (
      this.props.reports.map((report) => (
        <TableRow key={report._id}>
          <TableRowColumn>{report.perpetrator.name}</TableRowColumn>
          <TableRowColumn>{report.edited.toString()}</TableRowColumn>
          <AdminFormContainer report={report} fetchReports={this.props.fetchReports}/>
        </TableRow>
      ))
    )
  }

  render() {
    return (
      <div className="admin-table-container">
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="3" tooltip="All Reports" style={{textAlign: 'center'}}>
                Admin Home Page: SJI BDL
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="">Name</TableHeaderColumn>
              <TableHeaderColumn tooltip="">Edited</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}>
            {this.populateTable()}
          </TableBody>
          <TableFooter
            adjustForCheckbox={this.state.showCheckboxes}>
            <TableRow>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );
  }
}
