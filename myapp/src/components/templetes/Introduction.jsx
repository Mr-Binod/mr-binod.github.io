import React from 'react'
import styled from 'styled-components'
import { logo } from '../../public/images'


const Wrap = styled.div`
    color: #dadada;
    display: flex;
    /* justify-content: space-around; */
    /* align-items: center; */
    gap: 50px;
    padding: 0 80px;
    padding-top: 100px;
    font-size : 22px;
    
    .profileImg {
    border: 1px solid;
    border-radius : 10px;
    }

    .Greetings {
     
      width: 1100px;
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      align-items: center;
      
      p {
        padding-top: 30px;
        font-size: 26px;
      }
    }
    .ProfileImg{
      height: 620px;
      overflow: hidden;
      border-radius: 15px;
    }

    .Greetmsg {
   
      font-size: 80px;
    }
    .Firstline {
      display: flex;
      justify-content: space-between;
      
    }
    .Secondline {
      margin-top: 150px;
      display: flex;
      justify-content: space-between;

    }
`

const Introduction = () => {
  return (
    <Wrap>
      <div className='ProfileImg'>
        <img src={logo} alt="" width="650px" className='profileImg' />
      </div>
      <div className='Introduction'>
        <div className='Greetings'>
          <div className='Greetmsg'>Meet Binod</div>
          <p>저는 문제를 해결하고 성장하는 것에 즐거움을 느끼는 개발자입니다.</p><br /><br />
        </div>
        <div className='Firstline'>
          <span>이름 : 비노드 (SHRESTHA BINOD)</span>
          <span>직무 : 풀스택 개발자</span>
          <span>이메일 : blackorion3@gmail.com</span>
        </div>
        <div className='Secondline'>
          <span>#메타인지</span>
          <span>#도전적인</span>
          <span>#협력적인</span>
        </div>
        <div></div>
      </div>
    </Wrap>
  )
}


export default Introduction
