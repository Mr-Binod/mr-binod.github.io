import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    
`


export const Skillcontents = (children) => {
    return (
        <Wrap>
            <img src={children} alt="" />
        </Wrap>
    )
}
