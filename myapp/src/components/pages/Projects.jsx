import React from 'react'
import styled from 'styled-components'
import Header from '../templetes/Header'
import ProjectsTemp from '../templetes/ProjectsTemp'




const Wrap = styled.div`
    background-color: #000;
    /* background-color: #f7f7f7;; */
    min-height: 100vh;
    padding-bottom: 100px;
    font-size: 18px;
    color: #f7f7f7;
    
`
const Projects = () => {

    
  return (
    <Wrap>
      <Header/>
      <ProjectsTemp/>
    </Wrap>
  )
}

export default Projects
