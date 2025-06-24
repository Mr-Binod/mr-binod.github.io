import React from 'react'
import styled from 'styled-components'


const Wrap = styled.div`
    span {
        content: "";
        display: block;
        height: 1px;
        background-color: #757575;
        color: #6b6b6b;
        
    }
`

const Breakline = () => {
  return (
    <Wrap>
      <span></span>
    </Wrap>
  )
}




export default Breakline
