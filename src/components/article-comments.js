import React from 'react'
import Comment from './comment'

class ArticleComments extends React.Component {
  render() {
    const { comments } = this.props
    return typeof comments !== 'undefined' ? (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    ) : (
      ''
    )
  }
}

export default ArticleComments
