import React from 'react'
import styled from 'styled-components'
import Header from '../templetes/Header'
import Breakline from '../atoms/Breakline'
import Introduction from '../templetes/Introduction'
import Aboutme from '../templetes/Aboutme'


const Wrap = styled.div`
    background-color: #000;
    /* background-color: #f7f7f7;; */
    min-height: 100vh;
    padding-bottom: 100px;
    font-size: 18px;
    
`
const Main = () => {
    return (
        <Wrap>
            <Header />
            {/* <Breakline/> */}
            <Introduction/>
            <Aboutme/>
        </Wrap>
    )
}

export default Main
