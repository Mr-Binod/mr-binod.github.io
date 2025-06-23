import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    width : max-content;
    padding: 0 5px;
    color: #e0e0e0;
    margin: 0 10px;
    cursor: pointer;
`

const HeaderContents = ({children}) => {
  return (
    <Wrap>
      {children}
    </Wrap>
  )
}

export default HeaderContents
