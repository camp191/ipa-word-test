import React from 'react'
import { Button, Input } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Copyright from './copyright'

const Layout = styled.div`
  width:100%;
  text-align: center;
  vertical-align: middle;
  height:100vh;
  min-height:100vh;
  background: linear-gradient(to bottom, #708AD4 0%,#48c6ef 100%);
  padding: 4rem;
`

const Logo = styled.h1`
  font-family: 'Luckiest Guy';
  color: white;
  font-size: 7rem;
`

const Description = styled.p`
  font-family: 'Kanit';
  font-size: 1.5rem;
  width: 65%;
  margin: 2rem auto;
`
const MarginItem = styled.div`
  margin: 2rem auto;
`
const InputName = styled.div`
  width: 30%;
  margin: 2rem auto;
`

const Home = () => (
  <Layout>
    <div>
      <Logo>IPA Quiz</Logo>
      <Description>ยินดีต้องรับสู่ IPA Quiz แบบทดสอบอ่าน IPA แล้วเขียนเป็นคำในภาษาอังกฤษ มาดูกันว่าคุณจะทำได้กี่คะแนน พร้อมแล้วใส่ชื่อของคุณแล้วก็เริ่มทดสอบได้เลย</Description>
      <InputName>
        <Input size="large" placeholder="ชื่อของท่าน" />
      </InputName>
      <MarginItem>
        <Button size="large">
          <Link to="/quiz">
            Start the Quiz !!
          </Link>
        </Button>
      </MarginItem>
    </div>
    <Copyright />
  </Layout>
)

export default Home
