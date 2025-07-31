import React from 'react'
import styled from 'styled-components'
import { logo } from '../../public/images'


const Wrap = styled.div`
    color: #dadada;
    display: flex;
    /* justify-content: space-around; */
    /* align-items: center; */
    gap: 50px;
    padding: 160px 80px;
    /* padding-top: 150px; */
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
      width: 800px;
      margin: 0 auto;
      display: flex;

      justify-content: space-between;
      
    }
    .Secondline {
       width: 800px;
      margin: 0 auto;
      margin-top: 80px;
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
          <p>저는 문제 상황에서도 끝까지 책임감을 가지고 임하는 자세를 중요하게 생각합니다.
            회사의 내규와 방향에 맞춰 필요한 역할을 충실히 수행하며 조직에 기여하겠습니다.
          </p><br /><br />
        </div>
        <div className='Firstline'>
          <span>이름 : 비노드 (SHRESTHA BINOD)</span>
          <span>직무 : 블록체인 과 웹 풀스택 개발자</span>
          {/* <span>이메일 : blackorion3@gmail.com</span> */}
        </div>
        <div className='Secondline'>
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
