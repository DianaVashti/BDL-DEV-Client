import React, {Component}  from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router'
import axios from 'axios';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import Footer from '../../footer'
import ExpandableCard from './expandableCard'
import Header from '../../header'
import Spinner from '../../Spinner/index'

const searchBoxStyle = {
  fontSize: '12px'
}

export default class ViewReports extends Component {
  constructor(props) {
    super(props);
		this.state = {
			reports: [],
      searchTerms: '',
      isLoading: true
		}
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  componentDidMount(){
    axios.get('https://st-james-bdl-api.herokuapp.com/api/reports')
      .then(reports => {
        this.setState({
          reports: reports.data,
          isLoading: false
        })
      })
      .catch((error) => {
        console.log('There was an error ', error)
      })
  }

  createSearchQuery(terms) {
    let queryString = 'https://st-james-bdl-api.herokuapp.com/api/reports/search?keywords='
    // could probably refactor this
    for (let i = 0; i < terms.length; i++) {
      if (i !== (terms.length - 1)) {
        queryString += `${terms[i]}+`
      } else {
        queryString += `${terms[i]}`
      }
    }
    return queryString
  }

  fetchSearchResults(url) {
    this.setState({ isLoading: true })
    axios.get(url)
      .then((reports) => {
        this.setState({
          reports: reports.data,
          searchTerm: '',
          isLoading: false
        })
      })
      .catch((error) => {
        console.log('There was an error ', error)
      })
  }

  onFormSubmit(event) {
    event.preventDefault()
    const searchQuery = this.createSearchQuery(this.state.searchTerms.split(' '))
    this.fetchSearchResults(searchQuery)
    this.setState({ searchTerms: '' })
  }

  onInputChange(event) {
    this.setState({ searchTerms: event.target.value })
  }

  render() {

    if (this.state.isLoading) { return <Spinner /> }

    return (
      <div className='reports-page-container'>
        <div>
          <form onSubmit={this.onFormSubmit}>
            <TextField
              hintText="Search (e.g. license plate #, e-mail, name etc...)"
              fullWidth={true}
              value={this.state.searchTerms}
              onChange={this.onInputChange}
              style={searchBoxStyle}
            />
          </form>
        </div>
        <div className="view-reports-container" >
          <ExpandableCard reports={this.state.reports} />
        </div>
      </div>
    )
  }
}
