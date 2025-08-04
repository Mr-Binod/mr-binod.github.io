import React from 'react'
import styled from 'styled-components'
import { express, javascript, nodejs, sequelize, typescript } from '../../public'
import { Skillcontents } from '../atoms/Skillcontents'


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

const BackSkills = ({children}) => {
    return (
        <Wrap>
            <div>{children}</div>
            <div className='Contents'>
                <Skillcontents>{javascript}</Skillcontents>
                <Skillcontents>{nodejs}</Skillcontents>
                <Skillcontents>{express}</Skillcontents>
                <Skillcontents>{sequelize}</Skillcontents>
                <Skillcontents>{typescript}</Skillcontents>
            </div>
        </Wrap>
    )
}

export default BackSkills
