import React from 'react'

function Comment(props) {
  const { comment } = props
  return (
    <div>
      <h3>{comment.user}</h3>
      {getBody(comment)}
    </div>
  )
}

function getBody(comment) {
  return <section>{comment.text}</section>
}

export default Comment
