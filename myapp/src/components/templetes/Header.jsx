import React from 'react'
import styled from 'styled-components'
import HeaderCategories from '../molecules/HeaderCategories'
import logo from '../../public/images'

const Wrap = styled.div`
    margin : 0;
    padding: 0;
    height : 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #bbbbbb;
    padding: 0 50px;
    
    .Logo {
        height : 64px;
        width : 64px;
        border-radius: 15px;
    }

    .username {
        color: #6b6b6b;
    }
`


const Header = () => {
    return (
        <Wrap>
            <img src={logo} alt="" className='Logo' />
            <HeaderCategories />
            <div className='userinfo'>
                <img src="" alt="" />
                <span className='username'>비노드</span>
            </div>
        </Wrap>
    )
}

export default Header
