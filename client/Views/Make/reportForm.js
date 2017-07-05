import React, { Component }  from 'react'
import PropTypes from 'prop-types';
import { Link, browserHistory } from 'react-router';
import axios from 'axios';
import {Gmaps, Marker, InfoWindow, Circle} from '../../../react-gmaps'

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import { Step, Stepper, StepLabel } from 'material-ui/Stepper';

import Radio from 'simple-react-form-material-ui/lib/radio'
import {Form, Field} from 'simple-react-form'
import DatePicker from 'simple-react-form-material-ui/lib/date-picker'
import MultipleCheckbox from 'simple-react-form-material-ui/lib/multiple-checkbox'
import Text from 'simple-react-form-material-ui/lib/text'
import Textarea from 'simple-react-form-material-ui/lib/textarea'

import ErrorModal from '../../errorModal'
import Footer from '../../footer'
import LocationTypeCustomFormComponent from './locationTypeCustomFormComponent'
import SuccessModal from '../../successModal'

const coords = {
  lat: 37.7847,
  lng: -122.4145
};

const fieldStyle = {
  height: '20px'
}

const params = {v: '3.exp', key: 'AIzaSyBUBMWbJJ3r0zbGRNou0KpfLT3KatbgvVg'}

export default class ReportForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      finished: false,
      stepIndex: 0,
      errors: false,
      openSuccess: false,
      openError: false,
      incidentDetails: {
        city: "",
        locationType: "",
        gender: "",
        assaultType: [],
        date: "",
        assaultDescription: ""
      },
      geolocationDetails: {
        type: 'Point',
        coordinates: [-122.4145, 37.7847]
      },
      perpDetails: {
        name: "",
        phone: "",
        email: "",
        perpType: "",
        adServiceUsed: "",
        gender: "",
        age: "",
        race: "",
        height: "",
        hair: "",
        attributes: "",
        vehicle: ""
      },
      supportDetails: {
        needSupport: "",
        name: "",
        contact: "",
        callingFrom: ""
      },
    };

    this.onDragEnd = this.onDragEnd.bind(this)
    this.handleSubmitOnFinishBtnTap = this.handleSubmitOnFinishBtnTap.bind(this);
    this.validateForm = this.validateForm.bind(this)
  }

  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: false
    });
  }

  onDragEnd(e) {
    const viewIndex = 3
    let coordinates = this.state.geolocationDetails.coordinates.slice()
    coordinates = [e.latLng.lng(), e.latLng.lat()]
    this.setState((prevState) => {
      return {
        finished: prevState.finished,
        stepIndex: prevState.stepIndex,
        errors: prevState.errors,
        openSuccess: prevState.openSuccess,
        openError: prevState.openError,
        incidentDetails: {
          city: prevState.incidentDetails.city,
          locationType: prevState.incidentDetails.locationType,
          gender: prevState.incidentDetails.gender,
          assaultType: prevState.incidentDetails.assaultType,
          date: prevState.incidentDetails.date,
          assaultDescription: prevState.incidentDetails.assaultDescription
        },
        geolocationDetails: {
          type: prevState.geolocationDetails.type,
          coordinates: coordinates
        },
        perpDetails: {
          name: prevState.perpDetails.name,
          phone: prevState.perpDetails.phone,
          email: prevState.perpDetails.email,
          perpType: prevState.perpDetails.perpType,
          adServiceUsed: prevState.perpDetails.adServiceUsed,
          gender: prevState.perpDetails.gender,
          age: prevState.perpDetails.age,
          race: prevState.perpDetails.race,
          height: prevState.perpDetails.height,
          hair: prevState.perpDetails.hair,
          attributes: prevState.perpDetails.attributes,
          vehicle: prevState.perpDetails.vehicle
        },
        supportDetails: {
          needSupport: prevState.supportDetails.needSupport,
          name: prevState.supportDetails.name,
          contact: prevState.supportDetails.contact,
          callingFrom: prevState.supportDetails.callingFrom
        }
      }
    })
  }

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 3,
    });
    scroll(0,0)
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
    scroll(0,0)
  };

  getAssaultTypeOptions() {
    return [
      {label: 'Physical Assault', value: 'Physical Assault'},
      {label: 'Sexual Assault', value: 'Sexual Assault'},
      {label: 'Robbery', value: 'Robbery'},
      {label: 'Time Waster/Flake', value: 'Time Waster/Flake'},
      {label: 'Took Condom Off', value: 'Took Condom Off'},
      {label: 'Verbal Assault', value: 'Verbal Assault'},
      {label: 'Harassment/ Stalking', value: 'Harassment/ Stalking'},
      {label: 'Client drunk/high', value: 'Client drunk/high'},
      {label: 'Other', value: 'Other'}
    ]
  }

  getPerpTypeOptions() {
    return [
      {label: 'predator posing as client', value: 'predator posing as client'},
      {label: 'cop', value: 'cop'},
      {label: 'manager/pimp', value: 'manager/pimp'},
      {label: 'other', value: 'other'}
    ]
  }

  getRaceTypeOptions() {
    return [
      {label: 'Asian/Pacific Islander', value: 'Asian/Pacific Islander'},
      {label: 'Black', value: 'Black'},
      {label: 'Hispanic/Latino', value: 'Hispanic/Latino'},
      {label: 'Middle Eastern', value: 'Middle Eastern'},
      {label: 'White', value: 'White'},
      {label: 'Other', value: 'Other'}
    ]
  }

  getStepContent(stepIndex) {
    const message = "This field is required"
    switch (stepIndex) {
      case 0:
        return(
          <div className='form-container'>
            <h1>Incident Details</h1>
            <Form state={this.state} onChange={changes => this.setState(changes)}>
              <Field
                fieldName='incidentDetails.city'
                label='What city did the incident take place?*'
                type={Text}
                style={{fontSize: ".9em"}}
                errorText={this.state.errors && (this.state.incidentDetails.city === "") ? message : ""}
                errorStyle={{color: 'red'}}/>
              <Field
                fieldName='incidentDetails.locationType'
                label='Where did it happen?*'
                type={LocationTypeCustomFormComponent}
                errorText={this.state.errors && (this.state.incidentDetails.locationType === "") ? message : ""}
                errorStyle={{color: 'red'}}/>
              <Field
                fieldName='incidentDetails.gender'
                label='Your gender (this helps us organize reports)*'
                type={Text}
                style={{fontSize: ".9em"}}
                errorText={this.state.errors && (this.state.incidentDetails.gender === "") ? message : ""}
                errorStyle={{color: 'red'}}/>
              <Field
                fieldName='incidentDetails.assaultType'
                label='What happened? (select all that apply)'
                type={MultipleCheckbox}
                style={{fontSize: ".9em"}}
                options={this.getAssaultTypeOptions()}/>
              <Field
                fieldName='incidentDetails.date'
                label='What day did it happen? (can be an estimation)*'
                type={DatePicker}
                textFieldStyle={{fontSize: ".9em"}}
                errorText={this.state.errors && (this.state.incidentDetails.date === "") ? message : ""}
                errorStyle={{color: 'red'}}/>
              <Field
                changeOnKeyDown={true}
                fieldName='incidentDetails.assaultDescription'
                label='Please describe what happened.*'
                type={Textarea} rows={5}
                style={{fontSize: ".9em"}}
                errorText={this.state.errors && (this.state.incidentDetails.assaultDescription === "") ? message : ""}
                errorStyle={{color: 'red'}} />
            </Form>
            <br/>
          </div>
        )
      case 1:
        return (
          <div className='form-container'>
            <h1>Perpetrator Details</h1>
            <Form state={this.state} onChange={changes => this.setState(changes)}>
              <Field
                fieldName='perpDetails.name'
                label='Perpetrators name*'
                type={Text}
                style={{fontSize: ".9em"}}
                errorText={this.state.errors && (this.state.perpDetails.name === "") ? message : ""}
                errorStyle={{color: 'red'}}/>
              <Field
                fieldName='perpDetails.phone'
                label='Perpetrators phone number (if applicable)'
                type={Text}
                style={{fontSize: ".9em"}}/>
              <Field
                fieldName='perpDetails.email'
                label='Perpetrators email (if applicable)'
                type={Text}
                style={{fontSize: ".9em"}}/>
              <Field
                fieldName='perpDetails.perpType'
                label='Perpetrator was a (choose one)*:'
                type={Radio}
                style={{fontSize: ".9em"}}
                options={this.getPerpTypeOptions()}
                errorText={this.state.errors && (this.state.perpDetails.perpType === "") ? message : ""}
                errorStyle={{color: 'red'}} />
              <Field
                fieldName='perpDetails.adServiceUsed'
                label='Did perpetrator contact you through an ad? (if so, please list advertising website)'
                type={Text}
                style={{fontSize: ".9em"}}/>
              <Field
                fieldName='perpDetails.gender'
                label='Perpetrators gender*'
                type={Text}
                style={{fontSize: ".9em"}}
                errorText={this.state.errors && (this.state.perpDetails.gender === "") ? message : ""}
                errorStyle={{color: 'red'}}/>
              <Field
                fieldName='perpDetails.age'
                label='Perpetrators age*'
                type={Text}
                style={{fontSize: ".9em"}}
                errorText={this.state.errors && (this.state.perpDetails.age === "") ? message : ""}
                errorStyle={{color: 'red'}}/>
              <Field
                fieldName='perpDetails.race'
                label='Perpetrators race/ethnicity*'
                type={Radio}
                options={this.getRaceTypeOptions()}
                errorText={this.state.errors && (this.state.perpDetails.race === "") ? message : ""}
                errorStyle={{color: 'red'}}/>
              <Field
                fieldName='perpDetails.height'
                label='Perpetrator height*'
                type={Text}
                style={{fontSize: ".9em"}}
                errorText={this.state.errors && (this.state.perpDetails.height === "") ? message : ""}
                errorStyle={{color: 'red'}}/>
              <Field
                fieldName='perpDetails.hair'
                label='Perpetrator hair type/color*'
                type={Text}
                style={{fontSize: ".9em"}}
                errorText={this.state.errors && (this.state.perpDetails.hair === "") ? message : ""}
                errorStyle={{color: 'red'}}/>
              <Field
                changeOnKeyDown={true}
                fieldName='perpDetails.attributes'
                label='Any obvious physical attributes? (scars, tattoos, etc)'
                type={Textarea} rows={2}
                style={{fontSize: ".9em"}}/>
              <Field
                fieldName='perpDetails.vehicle'
                label='Perpetrator vehicle information (color, make, model)'
                type={Text}
                style={{fontSize: ".9em"}}/>
            </Form>
            <br/>
          </div>
        )
      case 2:
        return(
          <div className='form-container'>
            <h1>Support Details</h1>
            <Form state={this.state} onChange={changes => this.setState(changes)}>
              <Field
                changeOnKeyDown={true}
                fieldName='supportDetails.needSupport'
                label='Do you need support? If yes, what kind of support do you need.'
                type={Textarea}
                style={{fontSize: ".9em"}}
                rows={5} />
              <Field
                fieldName='supportDetails.name'
                label='If yes, what name should we call you?'
                type={Text}
                style={{fontSize: ".9em"}}/>
              <Field
                changeOnKeyDown={true}
                fieldName='supportDetails.contact'
                label='If yes, what is the best way to contact you?'
                type={Textarea}
                style={{fontSize: ".9em"}}
                rows={3} />
              <Field
                changeOnKeyDown={true}
                fieldName='supportDetails.callingFrom'
                label='If yes, can we say we are calling from St. James Infirmary? If no, where would you like us to say we are calling from?'
                type={Textarea}
                style={{fontSize: ".9em"}}
                rows={3} />
            </Form>
            <br/>
          </div>
        )
      case 3:
        return(
          <div className='form-container'>
            <h3>Please drag the pin to the approximate location where the incident occured</h3>
            <h5>You can zoom in to add a more specific location</h5>
            <div className='map-container'>
              <Gmaps
                height={'100%'}
                lat={coords.lat}
                lng={coords.lng}
                zoom={12}
                loadingMessage={'Map Loading'}
                params={params}
                onMapCreated={this.onMapCreated}>
                <Marker
                  lat={coords.lat}
                  lng={coords.lng}
                  draggable={true}
                  onDragEnd={this.onDragEnd} />
              </Gmaps>
            </div>
          </div>
        )
      default:
        return 'Error error errrrorrrrr';
    }
  }

  handleSubmitOnFinishBtnTap() {
    this.handleNext
    const { incidentDetails, perpDetails, supportDetails, geolocationDetails } = this.state;
    axios.post('https://st-james-bdl-api.herokuapp.com/api/reports/new', {
      city: incidentDetails.city,
      locationType: incidentDetails.locationType,
      gender: incidentDetails.gender,
      date: incidentDetails.date,
      assaultType: incidentDetails.assaultType,
      assaultDescription: incidentDetails.assaultDescription,
      geolocation : geolocationDetails,
      perpetrator: perpDetails,
      support: supportDetails
    })
    .then((res) => {
      // show a success message to user
      console.log('Success', res)
      this.setState({openSuccess: true})
      setTimeout(() => {
        this.setState({openSuccess: false})
        browserHistory.push('/')
      }, 1000)
    })
    .catch((error) => {
      // show error message to user
      console.log('something went wrong ', error)
      this.setState({openError: true})
      setTimeout(() => {
        this.setState({openError: false})
        browserHistory.push('/submit-form')
      }, 1000)
    })
  }

  componentDidMount(){
    scroll(0,0)
  }

  componentWillMount() {
    this.setState(this.props.currentState);
    scroll(0,0)
  }

  validateForm(){
    const {city, locationType, assaultDescription} = this.state.incidentDetails
    const reporteeGender = this.state.incidentDetails.gender
    const {name, perpType, age, gender, race, height, hair} = this.state.perpDetails
    const {coordinates} = this.state.geolocationDetails

    if ((this.state.stepIndex === 0) && (!city || !locationType || !reporteeGender || !assaultDescription )){
      this.setState({errors: true})
    } else if ((this.state.stepIndex === 1) && (!name || !perpType || !gender || !age || !race || !height || !hair )){
      this.setState({errors: true})
    } else if (this.state.stepIndex === 3 && (coordinates.length === 0)){
      this.setState({errors: true})
    } else {
      this.setState({errors: false})
      this.handleNext()
    }
  }

  render(){
    console.log('this is the state', this.state)
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return(
      <div className="incident">
        <div style={{width: '100%', maxWidth: 700, margin: 'auto', paddingBottom: 65, paddingTop: 20}}>
          <Paper zDepth={1} >
              <Stepper activeStep={stepIndex}>
                <Step>
                  <StepLabel></StepLabel>
                </Step>
                <Step>
                  <StepLabel></StepLabel>
                </Step>
                <Step>
                  <StepLabel></StepLabel>
                </Step>
                <Step>
                  <StepLabel></StepLabel>
                </Step>
              </Stepper>
            <div style={contentStyle}>
              {finished ? (
                <Link to='/'><div>
                    Click here to return to the home page.
                </div></Link>
              ) : (
                <div>
                  <div>{this.getStepContent(stepIndex)}</div>
                  <div style={{marginTop: 12}}>
                    <FlatButton
                      label="Back"
                      disabled={stepIndex === 0}
                      onTouchTap={this.handlePrev}
                      style={{marginRight: 12}}
                    />
                    <RaisedButton
                      label={stepIndex === 3 ? 'Finish' : 'Next'}
                      primary={true}
                      onTouchTap={stepIndex === 3 ? this.handleSubmitOnFinishBtnTap : this.validateForm}
                    />
                  </div>
                </div>
              )}
            </div>
          </Paper>
          <div>
            {this.state.openSuccess ? <SuccessModal /> : null}
          </div>
          <div>
            {this.state.openError ? <ErrorModal /> : null}
          </div>
        </div>
      </div>
    )
  }
}
