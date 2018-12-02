import React, { Component } from 'react'
import CommentList from './comment-list'
import PropTypes from 'prop-types'

class Article extends Component {
  componentDidMount() {
    const { fetchAllArticles } = this.props

    fetchAllArticles && fetchAllArticles()
  }

  getBody = (isOpen, article) => {
    if (!isOpen) return null

    return (
      <section className="test__article--body">
        <div className="test__article-text">{article.text}</div>
        <CommentList comments={article.comments} />
      </section>
    )
  }

  render() {
    const { article, isOpen, toggleOpen } = this.props
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen} className="test__article--btn">
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody(isOpen, article)}
      </div>
    )
  }
}

Article.proptypes = {
  article: PropTypes.object,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func
}

export default Article
