import React from 'react'
import { mysql } from '../../public/images'
import styled from 'styled-components'
import { Skillcontents } from '../atoms/Skillcontents'



const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #e0e0e0;
    margin-top: 30px;
    .Contents{
        gap: 30px;
        margin-top: 30px;
        display: flex;
        align-items: center;
    }
`

const Database = ({children}) => {
    return (
            <Wrap>
                <div>{children}</div>
                <div className='Contents'>
                    <Skillcontents>{mysql}</Skillcontents>
                </div>
            </Wrap>
    )
}

export default Database
