import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Header from './Header'
import Question from './Question'
import Copyright from './../home/copyright'

import * as Actions from './../../actions'

class QuizMain extends Component {
  componentDidMount() {
    this.props.fetchWordData()
  }

  render() {
    // if (this.props.users.user === '') {
    //   return <Redirect to="/" />
    // }

    return (
      <div>
        <Header />
        <h1>Hello {this.props.users.user}</h1>
        <Question wordData={this.props.word} />
        <Copyright />
      </div>
    )
  }
}

function mapStateToProps({ users, word }) {
  return {
    users,
    word,
  }
}

QuizMain.propTypes = {
  fetchWordData: PropTypes.func,
  users: PropTypes.object,
  word: PropTypes.object,
}

export default connect(mapStateToProps, Actions)(QuizMain)
