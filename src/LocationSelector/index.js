import React from 'react'

const LocationSelector = ({pointA, setPointA, pointB, setPointB}) => (
  <div>
    <input
      type="text"
      placeholder="Point A"
      value={pointA}
      onChange={e => setPointA(e.target.value)}
    />
    <input
      type="text"
      placeholder="Point B"
      value={pointB}
      onChange={e => setPointB(e.target.value)}
    />
  </div>
)

export default LocationSelector
