import React from 'react'
import Emojify from 'react-emojione'
import styled from 'styled-components'
import ReactIcon from './../../assets/images/react.svg'

const ReactStyle = styled.span`
  display: inline;
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

const Copyright = () => (
  <CopyrightPosition>
    <p>
    &copy; 2017 Copyright. Made with
      <Emojify>
        <span>:heart:</span>
      </Emojify>
    and
      <ReactStyle>
        <img
          style={{ width: '45px', verticalAlign: 'middle', paddingBottom: '5px', paddingLeft: '-20px' }}
          src={ReactIcon}
          alt="react logo"
        />
      </ReactStyle>
    </p>
  </CopyrightPosition>
)

export default Copyright
