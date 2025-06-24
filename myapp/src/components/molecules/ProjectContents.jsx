import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    
`

const ProjectContents = ({ children, Imgfile }) => {
    return (
        <Wrap>
            <div>{children}</div>
            <img src={Imgfile} alt="" />
        </Wrap>
    )
}



export default ProjectContents
