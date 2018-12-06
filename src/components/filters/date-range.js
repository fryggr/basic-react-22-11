import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { filterDateArticles } from '../../ac'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  state = {
    from: null,
    to: null
  }

  handleDayClick = (day) => {
    console.log(day)
    this.setState(DateUtils.addDayToRange(day, this.state))

    const { filterDateArticles, articles } = this.props
    filterDateArticles(day)
  }

  render() {
    const { from, to } = this.state
    const selectedRange = from && to && `${from.toDateString()} - ${to.toDateString()}`
    return (
      <div className="date-range">
        <DayPicker
          selectedDays={(day) => DateUtils.isDayInRange(day, { from, to })}
          onDayClick={this.handleDayClick}
        />
        {selectedRange}
      </div>
    )
  }
}

export default connect(
  null,
  { filterDateArticles }
)(DateRange)
