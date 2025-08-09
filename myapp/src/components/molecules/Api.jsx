import React from 'react'
import styled from 'styled-components'
import { Skillcontents } from '../atoms/Skillcontents'
import { kakao, kakaomap } from '../../public'



const Wrap = styled.div`
    display: flex;
    flex-direction: column;
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

const Api = ({children}) => {
    return (
        <Wrap>
            <div>{children}</div>
            <div className='Contents'>
                <Skillcontents>{kakaomap}</Skillcontents>
                <Skillcontents>{kakao}</Skillcontents>
            </div>
        </Wrap>
    )
}

export default Api
