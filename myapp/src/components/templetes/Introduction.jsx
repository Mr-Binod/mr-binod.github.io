import React from 'react'
import styled from 'styled-components'
import logo from '../../public/images'


const Wrap = styled.div`
    color: #e0e0e0;
    display: flex;
    /* justify-content: space-around; */
    /* align-items: center; */
    gap: 50px;
    padding: 0 70px;
    padding-top: 50px;
    
    .profileImg {
    border: 1px solid;
    border-radius : 10px;
    }

    .Greetings {
      width: 1000px;
      font-size: 80px;
      display: flex;
      justify-content: center;
      
    }
`

const Introduction = () => {
  return (
    <Wrap>
      <div>
        <img src={logo} alt="" width="480px" height="500px" className='profileImg' />
      </div>
      <div className='Introduction'>
        <div className='Greetings'>Meet Binod</div>
        <p>저는 문제를 해결하고 성장하는 것에 즐거움을 느끼는 개발자입니다.</p>
        <div>이름 : </div>
        <div>이름 : </div>
      </div>
    </Wrap>
  )
}


export default Introduction
