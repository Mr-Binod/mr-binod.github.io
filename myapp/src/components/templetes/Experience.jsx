import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    color: #e0e0e0;
    width: 1105px;
    margin: 50px auto;
    border-radius: 15px;
    padding: 15px 25px ;
    background-color: #505050;
    box-sizing: border-box;
    
`
const Title = styled.h1`
    width: 1105px;
    margin: 20px auto;
`

const Experience = () => {
    return (
        <>
        <Title>경력</Title>
        <Wrap>
            
            <p>2024/12/30 ~ 진행중</p>
            <div>풀스택 웹 개발자 부트캠프</div>
            <ul>
                <li>html, css : 페이지 구성, 디자인</li> <br/>
                <li>javascript : 프론트엔드 과 백엔드 기능 구현</li><br/>
                <li>nodejs과 express : 서버 구현, 프론트엔드과 상호작용 </li><br/>
                <li>mysql : 데이터베이스 설계, 생성, 수정, 삭제 기능</li><br/>
                <li>sequelize : typeORM 통해 데이터베이스 상호작용</li><br/>
                <li>react : 프론트엔드 화면 구현, 상태 관리, 리덕스, 라우터, 컴포넌트 분리</li><br/>
                <li>블록체인 : 사용해서 typeORM 통해 데이터베이스 상호작용</li><br/>
                <li>솔리디티 : 비트코인, 이더리움 네트워크 이해, 스마트 컨트랙트, erc20, erc721, erc4337, dao 기초</li><br/>
            
            </ul>
        </Wrap>
        </>
    )
}

export default Experience



// single thread
// hoisting
// event loop








