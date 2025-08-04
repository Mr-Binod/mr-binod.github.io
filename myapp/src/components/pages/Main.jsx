import React from 'react'
import styled from 'styled-components'
import Header from '../templetes/Header'
import Introduction from '../templetes/Introduction'
import Aboutme from '../templetes/Aboutme'
import Breakline from '../atoms/Breakline'
import Skills from '../templetes/Skills'
import Experience from '../templetes/Experience'


const Wrap = styled.div`
    background-color: #000;
    /* background-color: #f7f7f7;; */
    min-height: 100vh;
    padding-bottom: 100px;
    font-size: 18px;
    color: #f7f7f7;
    
`
const Main = () => {
    return (
        <Wrap>
            <Header />
            <Introduction/>
            <Breakline/>
            <Skills/>
            <Breakline/>
            <Aboutme id='aboutme'/>
            <Breakline/>
            <Experience/>
        </Wrap>
    )
}

export default Main
