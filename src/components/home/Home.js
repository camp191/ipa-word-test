import React, { Component } from 'react'
import { Button, Input } from 'antd'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Copyright from './copyright'
import * as Actions from './../../actions'

const Layout = styled.div`
  width:100%;
  text-align: center;
  vertical-align: middle;
  height:100vh;
  min-height:100vh;
  background: linear-gradient(to bottom, #708AD4 0%,#48c6ef 100%);
  padding: 5rem 4rem;
  overflow: hidden;
  @media only screen and (max-width: 500px) {
    padding: 2.5rem 1rem;
  }
`

const Logo = styled.h1`
  font-family: 'Luckiest Guy';
  color: white;
  font-size: 7rem;
  text-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  @media only screen and (max-width: 700px) {
    font-size: 3.5rem;
  }
`

const Description = styled.p`
  font-family: 'Kanit';
  font-size: 1.2rem;
  width: 60%;
  max-width: 700px;
  margin: 2rem auto;
  @media only screen and (max-width: 700px) {
    width: 90%;
    font-size: 1rem;
    margin: 1rem auto;
  }
`
const MarginItem = styled.div`
  margin: 2rem auto;
`
const InputName = styled.div`
  width: 30%;
  margin: 2rem auto;
  @media only screen and (max-width: 700px) {
    width: 75%;
  }
`

class Home extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      button: 'Start IPA Combo!!',
      loading: false,
    }
  }

  updateName(value) {
    this.setState({
      name: value,
    })
  }

  clickStart() {
    this.setState({
      loading: true,
      button: 'Loading...',
    })
    this.props.regisName(this.state.name)
  }

  render() {
    return (
      <Layout>
        <Logo>IPA Combo</Logo>
        <Description>
          ยินดีต้อนรับสู่ IPA Combo แบบทดสอบอ่าน IPA แล้วเขียนเป็นคำในภาษาอังกฤษ
          มาดูกันว่าคุณจะทำได้ติดกันกี่คะแนน พร้อมแล้วใส่ชื่อของคุณแล้วก็เริ่มได้เลย
        </Description>
        <InputName>
          <Input
            size="large"
            placeholder="ใส่ชื่อของคุณ"
            value={this.state.name}
            onChange={event => this.updateName(event.target.value)}
          />
        </InputName>
        <MarginItem>
          <Button
            size="large"
            onClick={() => this.clickStart()}
            loading={this.state.loading}
            disabled={this.state.loading || this.state.name === ''}
          >
            <Link to="/quiz">
              {this.state.button}
            </Link>
          </Button>
        </MarginItem>
        <Copyright />
      </Layout>
    )
  }
}

Home.propTypes = {
  regisName: PropTypes.func,
}

export default connect(null, Actions)(Home)

