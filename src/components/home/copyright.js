import React from 'react'
import Emojify from 'react-emojione'
import styled from 'styled-components'
import ReactIcon from './../../assets/images/react.svg'

const ReactStyle = styled.span`
  display: inline;
`

const Copyright = () => (
  <div>
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
  </div>
)

export default Copyright
