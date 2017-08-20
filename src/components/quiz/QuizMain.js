import React from 'react'
import { connect } from 'react-redux'

const QuizMain = props => (
  <div>
    <h1>Hello {props.users.user}</h1>
  </div>
)

function mapStateToProps({ users }) {
  return {
    users,
  }
}

export default connect(mapStateToProps)(QuizMain)
