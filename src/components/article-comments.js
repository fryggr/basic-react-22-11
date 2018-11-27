import React from 'react'
import Comment from './comment'
import accordion from '../decorators/accordion'

class ArticleComments extends React.Component {
  render() {
    const { comments, articleId, openItemId, toggleOpenItem } = this.props
    return typeof comments !== 'undefined' ? (
      <div>
        <button onClick={toggleOpenItem(articleId)}>
          {openItemId ? 'hide comments' : 'show comments'}
        </button>
        {openItemId ? (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id}>
                <Comment comment={comment} />
              </li>
            ))}
          </ul>
        ) : (
          ''
        )}
      </div>
    ) : (
      ''
    )
  }
}

export default accordion(ArticleComments)
