import React from 'react'
import styled from 'styled-components'
import Header from '../templetes/Header'
import Atag from '../atoms/Atag'
import Button from '../atoms/Button'
import Breakline from '../atoms/Breakline'
import Introduction from '../templetes/Introduction'


const Wrap = styled.div`
    background-color: #000;
    /* background-color: #f7f7f7;; */
    min-height: 100vh;

`
const Main = () => {
    return (
        <Wrap>
            <Header />
            <Breakline/>
            <Introduction/>
        </Wrap>
    )
}

export default Main
