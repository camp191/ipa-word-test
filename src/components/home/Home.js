import React from 'react'
import { Button } from 'antd'
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
  text-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

const Description = styled.p`
  font-family: 'Kanit';
  font-size: 1.2rem;
  width: 60%;
  margin: 2rem auto;
`
const MarginItem = styled.div`
  margin: 2rem auto;
`
const InputName = styled.div`
  width: 30%;
  margin: 2rem auto;
`

const CopyrightPosition = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0.7rem;
  background-color: #efefef;
  text-align: center;
`

const Home = () => (
  <Layout>
    <div>
      <Logo>IPA Quiz</Logo>
      <Description>
        ยินดีต้องรับสู่ IPA Quiz แบบทดสอบอ่าน IPA แล้วเขียนเป็นคำในภาษาอังกฤษ
        มาดูกันว่าคุณจะทำได้กี่คะแนน พร้อมแล้วใส่ชื่อของคุณแล้วก็เริ่มทดสอบได้เลย
      </Description>
      <InputName>
        <input type="text" />
      </InputName>
      <MarginItem>
        <Button size="large">
          <Link to="/quiz">
            Start the Quiz !!
          </Link>
        </Button>
      </MarginItem>
    </div>
    <CopyrightPosition>
      <Copyright />
    </CopyrightPosition>
  </Layout>
)

export default Home
