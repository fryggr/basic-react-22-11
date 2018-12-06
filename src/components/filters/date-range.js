import React, { Component } from 'react'
import DayPicker, { DateUtils } from 'react-day-picker'
import { connect } from 'react-redux'
import { filterDateArticles } from '../../ac'

import 'react-day-picker/lib/style.css'

class DateRange extends Component {
  handleDayClick = (day) => {
    const { filterDateArticles, selectDate } = this.props
    const newRange = DateUtils.addDayToRange(day, selectDate)
    filterDateArticles(newRange)
  }

  render() {
    const { selectDate } = this.props
    const { from, to } = selectDate
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
  (state) => ({
    selectDate: state.articles.selectDate
  }),
  { filterDateArticles }
)(DateRange)
