import React, { Component } from 'react'
import styled from 'styled-components'
import { Card, Input, Button, Popover } from 'antd'

const IPA = styled.h1`
  text-align: center;
`

const Line = styled.hr`
  border: 1px solid #E9E9E9;
`

class QuizCard extends Component {
  state = {
    visible: false,
  }

  hide = () => {
    this.setState({
      visible: false,
    });
  }

  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }

  render() {
    return (
      <div>
        <Card title={<h2>Quiz</h2>}>
          <div>
            <IPA>{this.props.wordData.ipa}</IPA>
          </div>
          <Input
            size="large"
            placeholder="คำตอบของคุณ"
            autoFocus
          />
          <Button type="primary">ตอบคำถาม</Button>
          <Line noshade />
          <div>
            <p>คุณใช้คำใบ้ได้อีก 5 ครั้ง</p>
            <Popover
              content={this.props.wordData.word}
              title="Hint"
              trigger="click"
              visible={this.state.visible}
              onVisibleChange={this.handleVisibleChange}
            >
              <Button type="primary" ghost>Hint</Button>
            </Popover>
          </div>
        </Card>
      </div>
    )
  }
}

export default QuizCard
