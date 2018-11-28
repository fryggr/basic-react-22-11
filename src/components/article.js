import React from 'react'
import ArticleComments from './article-comments'

function Article(props) {
  const { article, isOpen, toggleOpen } = props
  return (
    <div>
      <h3>{article.title}</h3>
      <button onClick={toggleOpen}>{isOpen ? 'close' : 'open'}</button>
      {getBody(props)}
    </div>
  )
}

function getBody({ isOpen, article }) {
  if (!isOpen) return null

  return (
    <section>
      <div>{article.text}</div>
      <ArticleComments comments={article.comments} />
    </section>
  )
}

export default Article
