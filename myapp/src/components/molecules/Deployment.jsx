import React from 'react'
import styled from 'styled-components'
import { Skillcontents } from '../atoms/Skillcontents'
import { aws } from '../../public'



const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */
    color: #e0e0e0;
    margin-top: 30px;
    .Contents{
        gap: 30px;
        margin-top: 30px;
        display: flex;
        align-items: center;
    }
`

const Deployment = ({children}) => {
    return (
        <Wrap>
            <div>{children}</div>
            <div className='Contents'>
                <Skillcontents>{aws}</Skillcontents>
            </div>
        </Wrap>
    )
}

export default Deployment