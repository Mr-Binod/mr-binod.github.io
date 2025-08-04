import React from 'react'
import styled from 'styled-components'
import HeaderCategories from '../molecules/HeaderCategories'
import { newlogo } from '../../public'
import { useNavigate } from 'react-router-dom'

const Wrap = styled.div`
    margin : 0;
    padding: 0;
    height : 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #bbbbbb;
    padding: 0 50px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    border-bottom: 1px solid #696969;
    background: #000;
    .Logo {
        cursor: pointer;
        height : 50px;
        border-radius: 15px;
    }

    .username {
        color: #6b6b6b;
    }
`


const Header = () => {
    const navigate = useNavigate()
    return (
        <Wrap>
            <img src={newlogo} onClick={() => navigate('/')} alt="" className='Logo' />
            <HeaderCategories />
            <div className='userinfo'>
                <img src="" alt="" />
                <span className='username'>비노드</span>
            </div>
            
        </Wrap>
    )
}

export default Header
