import React from 'react'
import styled from 'styled-components'
import { Skillcontents } from '../atoms/Skillcontents'
import { solidity } from '../../public'
import { ethereum } from '../../public'
import { bitcoin } from '../../public'
import { avalanche } from '../../public'


const Wrap = styled.div`
    color: #e0e0e0;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    margin-top: 30px;

    .Contents {
        gap:  40px;
        margin-top: 30px;
        display: flex;
        align-items: center;
        
    }
`

const Contracts = ({children}) => {
  return (
    <Wrap >
      <div>{children}</div>
      <div className='Contents'>
        
        <Skillcontents>{solidity}</Skillcontents>
        <Skillcontents>{bitcoin}</Skillcontents>
        <Skillcontents>{ethereum}</Skillcontents>
        <Skillcontents>{avalanche}</Skillcontents>
      </div>
    </Wrap>
  )
}

export default Contracts