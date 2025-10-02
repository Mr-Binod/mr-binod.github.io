import React from 'react'
import styled from 'styled-components'
import FrontSkills from '../molecules/FrontSkills'
import BackSkills from '../molecules/BackSkills'
import Database from '../molecules/Database'
import Communication from '../molecules/Communication'
import Deployment from '../molecules/Deployment'
import Api from '../molecules/Api'
import { Skillcontents } from '../atoms/Skillcontents'
import { solidity } from '../../public'
import Contracts from '../molecules/Contracts'

const Wrap = styled.div`
    color: #e0e0e0;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;

    .Title{
      font-size: 60px;
      margin-bottom: 20px;
    }
    .dataApi {
      display: flex;
      align-items: center;
      gap: 500px;
      flex-wrap: wrap;
    }
    .dataApio {
      display: flex;
      align-items: center;
      gap: 380px;
      flex-wrap: wrap;
    }
`

const Skills = () => {
  return (
    <Wrap>
      <h2 className='Title'>Skills</h2>
      <FrontSkills>{"FrontEnd"}</FrontSkills>
      <BackSkills>{"BackEnd"}</BackSkills>
      <Contracts>{"Contracts & Blockchains"}</Contracts>
      <div className='dataApi'>
        <Database>{"Database"}</Database>
        <Api>{"API"}</Api>
      </div>
      <div className='dataApio'>
        <Communication>{"Communication"}</Communication>
        <Deployment>{"Deployment"}</Deployment>
      </div>
    </Wrap>
  )
}

export default Skills
