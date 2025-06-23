import React from 'react'
import styled from 'styled-components'


const Wrap = styled.div`
    span {
        content: "";
        display: block;
        height: 0.08px;
        background-color: #dfdfdf;
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
