import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Row, Col } from 'antd'

import Header from './Header'
import QuizHandlerData from './../../containers/quiz/QuizHandlerData'
import Copyright from './../home/copyright'

import * as Actions from './../../actions'

const Container = styled.div`
  @media only screen and (min-width: 768px) {
    width: 750px;
  }

  @media only screen and (min-width: 992px) {
    width: 970px;
  }

  margin: 2rem auto 0;
  width: 90%;
`

class QuizPage extends Component {
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
        <Container>
          <Row gutter={48} type="flex" justify="space-around" align="middle">
            <Col xs={24} sm={12}>
              <QuizHandlerData wordData={this.props.word} />
            </Col>
            <Col xs={24} sm={12}>
              <QuizHandlerData wordData={this.props.word} />
            </Col>
          </Row>
        </Container>
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

QuizPage.propTypes = {
  fetchWordData: PropTypes.func,
  users: PropTypes.object,
  word: PropTypes.object,
}

export default connect(mapStateToProps, Actions)(QuizPage)
