import React from 'react'

const DatePicker = ({selectedDate, setSelectedDate}) => (
  <div>
    <input
      type="date"
      value={selectedDate}
      onChange={e => setSelectedDate(e.target.value)}
    />
  </div>
)

export default DatePicker
