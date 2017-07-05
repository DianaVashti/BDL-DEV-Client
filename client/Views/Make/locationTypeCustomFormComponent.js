import React, {Component}  from 'react'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

const locationTypeOptions = [
  {locationType: 'Parlor'},
  {locationType: 'Hotel/Motel'},
  {locationType: 'Clients House'},
  {locationType: 'Workers House'},
  {locationType: 'Street'},
  {locationType: 'Club'},
  {locationType: 'Other'}
]

export default class LocationTypeCustomFormComponent extends Component {

  constructor (props) {
    super(props)
  }

  renderItems () {
    return locationTypeOptions.map(data => {
      return(
        <MenuItem
          key={data.locationType}
          value={data.locationType}
          primaryText={data.locationType} />
      )
    })
  }

  render () {
    return (
      <div>
        <SelectField
          value={this.props.value}
          onChange={(event, key, value) => this.props.onChange(value)}
          floatingLabelText={this.props.label}
          floatingLabelStyle={{fontSize: ".7em"}}
          fullWidth={true} >
          {this.renderItems()}
        </SelectField>
      </div>
    )
  }

}
