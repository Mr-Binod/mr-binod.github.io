import React from 'react'
import styled from 'styled-components'
import FrontSkills from '../molecules/FrontSkills'
import BackSkills from '../molecules/BackSkills'
import Database from '../molecules/Database'
import Communication from '../molecules/Communication'
import Api from '../molecules/Api'
import { Skillcontents } from '../atoms/Skillcontents'
import { solidity } from '../../public'

const Wrap = styled.h3`
    color: #e0e0e0;
    padding: 40px 400px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* justify-content: center; */


    .Title{
      font-size: 60px;
    }
`

const Skills = () => {
  return (
    <Wrap>
      <div className='Title'>Skills</div>
      <FrontSkills>{"FrontEnd"}</FrontSkills>
      <BackSkills>{"BackEnd"}</BackSkills>
      <Database>{"Database"}</Database>
      <div style={{margin: "20px 0px"}}>contracts</div>
      <Skillcontents>{solidity}</Skillcontents>
      <Api>{"API"}</Api>
      <Communication>{"Communication"}</Communication>
      <Deployment>{"Deployment"}</Deployment>
    </Wrap>
  )
}

export default Skills
