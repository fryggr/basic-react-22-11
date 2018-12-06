import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { filterArticles } from '../../ac'

class SelectFilter extends Component {
  handleChange = (selected) => {
    const { filterArticles, articles } = this.props
    filterArticles(selected)
  }

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    const { selectOption } = this.props
    return (
      <Select options={this.options} value={selectOption} onChange={this.handleChange} isMulti />
    )
  }
}

export default connect(
  (state) => ({
    selectOption: state.articles.selectOption
  }),
  { filterArticles }
)(SelectFilter)
