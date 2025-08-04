import React from 'react'
import styled from 'styled-components'
import ProjectCard from '../molecules/ProjectCard'


const Wrap = styled.div`  
    width: 1105px;
    margin: 0 auto;
    padding: 0px 140px;
    color: #f7f7f7;
    display: flex;
    flex-wrap: wrap;
    /* justify-content: center; */
    gap: 100px;
`

const Title = styled.h1`
    font-size: 40px;
    padding: 50px 0;
    width: 1105px;
    margin: 0 auto;
    margin-top: 64px;
`



const ProjectsTemp = () => {
  return (
    <>
    <Title>Projects</Title>
    <Wrap>
      <ProjectCard />
    </Wrap>
    </>
  )
}

export default ProjectsTemp
