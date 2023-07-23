import React, {Component} from 'react'
import LocationSelector from './LocationSelector'
import DatePicker from './DatePicker'
import SearchButton from './SearchButton'
import VehicleList from './VehicleList'
import dummyData from './dummyData'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pointA: '',
      pointB: '',
      selectedDate: null,
      vehicles: [],
    }
  }

  handlePointAChange = event => {
    this.setState({pointA: event.target.value})
  }

  handlePointBChange = event => {
    this.setState({pointB: event.target.value})
  }

  handleDateChange = event => {
    this.setState({selectedDate: event.target.value})
  }

  handleSearch = () => {
    this.setState({vehicles: dummyData})
  }

  render() {
    const {pointA, pointB, selectedDate, vehicles} = this.state

    return (
      <div className="main-container">
        <h1>Airport Transfer Booking</h1>
        <LocationSelector
          pointA={pointA}
          handlePointAChange={this.handlePointAChange}
          pointB={pointB}
          handlePointBChange={this.handlePointBChange}
        />
        <DatePicker
          selectedDate={selectedDate}
          handleDateChange={this.handleDateChange}
        />
        <SearchButton onClick={this.handleSearch} />
        {vehicles.length > 0 ? <VehicleList vehicles={vehicles} /> : null}
      </div>
    )
  }
}

export default App
