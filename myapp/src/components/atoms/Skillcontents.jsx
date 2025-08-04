import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    img {
        border-radius: 20%;
    }
`


export const Skillcontents = ({children}) => {
    return (
        <Wrap>
            <img src={children} alt="" width="80px"/>
        </Wrap>
    )
}
