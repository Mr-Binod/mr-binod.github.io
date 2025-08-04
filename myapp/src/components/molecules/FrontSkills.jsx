import React, { Children } from 'react'
import styled from 'styled-components'
import { css, html, javascript, react, typescript } from '../../public'
import { Skillcontents } from '../atoms/Skillcontents'


const Wrap = styled.div`
    /* display: flex; */
    /* flex-direction: column; */
    /* align-items: center; */
    /* justify-content: center; */
    color: #e0e0e0;
    margin-top: 30px;
    .Contents{
        gap: 40px;
        margin-top: 30px;
        display: flex;
        align-items: center;
    }
`

const FrontSkills = ({ children }) => {
    return (
        <Wrap>
            <div>{children}</div>
            <div className='Contents'>
                <Skillcontents>{html}</Skillcontents>
                <Skillcontents>{css}</Skillcontents>
                <Skillcontents>{javascript}</Skillcontents>
                <Skillcontents>{react}</Skillcontents>
                <Skillcontents>{typescript}</Skillcontents>
            </div>
        </Wrap>
    )
}

export default FrontSkills