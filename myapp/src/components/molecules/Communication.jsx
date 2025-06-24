import React from 'react'
import styled from 'styled-components'
import { discord, github, Notion } from '../../public/images'
import { Skillcontents } from '../atoms/Skillcontents'

const Wrap = styled.div`
    color: #e0e0e0;
    padding: 0 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    .Contents {
        gap:  30px;
        margin-top: 30px;
        display: flex;
        align-items: center;
        
    }
`

const Communication = ({children}) => {
    return (
        <Wrap>
            <div>{children}</div>
            <div className='Contents'>
                <Skillcontents>{Notion}</Skillcontents>
                <Skillcontents>{github}</Skillcontents>
                <Skillcontents>{discord}</Skillcontents>
            </div>
        </Wrap>
    )
}

export default Communication
