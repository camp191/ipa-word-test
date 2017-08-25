import React, { Component } from 'react'
import styled from 'styled-components'
import { Card, Input, Button, Popover } from 'antd'

const IPA = styled.h1`
  text-align: center;
`

const Line = styled.hr`
  border: 1px solid #E9E9E9;
`

const HintContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
        <Card title="Quiz">
          <div>
            <IPA>{this.props.wordData.ipa}</IPA>
            <Input
              placeholder="คำตอบของคุณ"
              autoFocus
              size="large"
              style={{marginTop: '1rem'}}
            />
            <Button 
              size="large" 
              type="primary" 
              style={{width: '100%', margin: '1rem 0'}}
            >
              ตอบคำถาม
            </Button>
          </div>
          <Line noshade />
          <HintContainer>
            <p>คุณใช้คำใบ้ได้อีก 5 ครั้ง</p>
            <Popover
              content={this.props.wordData.word}
              title="Definition"
              trigger="click"
              visible={this.state.visible}
              onVisibleChange={this.handleVisibleChange}
            >
              <Button
                icon="question-circle-o"
                type="danger"
                size="large"
                ghost
              >
                Hint
              </Button>
            </Popover>
          </HintContainer>
        </Card>
      </div>
    )
  }
}

export default QuizCard
