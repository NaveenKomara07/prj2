import React from 'react'

const VehicleList = ({vehicles}) => (
  <div>
    <h2>Available Vehicles:</h2>
    <ul>
      {vehicles.map(vehicle => (
        <li key={vehicle.id}>
          {vehicle.name} - {vehicle.type} - Capacity: {vehicle.capacity}
        </li>
      ))}
    </ul>
  </div>
)

export default VehicleList
