import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

import CommentItem from '../CommentItem'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommonText] = useState('')
  const [comment, setComment] = useState({name: '', commentText: ''})
  const [commentsList, setcommentsList] = useState({})

  const onAddComment = event => {
    event.preventDefault()
    const newCommentList = {
      id: uuidv4(),
      name,
      commentText,
    }

    setcommentsList(prevoiusCommentsList => [
      ...prevoiusCommentsList,
      newCommentList,
    ])

    setComment({name, commentText})
    setName('')
    setCommonText('')
  }
  const onChangeName = event => setName(event.target.value)
  const onChangeCommentText = event => setCommonText(event.target.value)

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddComment}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onChangeName}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          value={commentText}
          onChange={onChangeCommentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>
      <CommentsList>
        {commentsList.map(eachComment => (
          <CommentItem key={eachComment.id} commentDetails={eachComment} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
