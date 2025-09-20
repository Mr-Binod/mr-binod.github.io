import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    color: #e0e0e0;
    max-width: 1105px;
    width: 100%;
    margin: 50px auto;
    border-radius: 15px;
    padding: 25px 40px;
    background-color: #505050;
    box-sizing: border-box;
    
    ul {
        padding-left: 20px;
    }

    li {
        margin-bottom: 10px;
    }

    li:last-child {
        margin-bottom: 0;
    }
`
const Title = styled.h1`
    max-width: 1105px;
    width: 100%;
    margin: 20px auto;
    padding: 0 20px;
    box-sizing: border-box;
`

const Experience = () => {
    return (
        <>
        <Title>교육</Title>
        <Wrap>
            <p>2024/12/30 ~ 2025/09/19</p>
            <div>차세대 블록체인 기반 웹 풀스택 개발자 부트캠프</div>
            <ul>
                <li>블록체인 원리 및 핵심 기술 이해</li>
                <li>JavaScript 프로그래밍 언어 학습</li>
                <li>프로그래밍에서 활용되는 다양한 자료구조를 학습 및 알고리즘 학습 </li>
                <li>스마트 웹 프론트엔드 개발 학습</li>
                <li>모바일 웹 페이지 개발 프로젝트</li>
                <li>데이터베이스의 개념, 데이터베이스 모델링 및 SQL을 학습</li>
                <li>스마트 웹 백엔드 개발</li>
                <li>스마트 웹 서비스 개발 프로젝트</li>
                <li>이더리움 플랫폼과 스마트 컨트랙트 앱 전용 개발 언어인 솔리디티 개발</li>
                <li>클레이튼 기반 블록체인 앱 개발</li>
                <li>블록체인 앱 개발 팀 프로젝트</li>
            </ul>
        </Wrap>
        </>
    )
}

export default Experience



// single thread
// hoisting
// event loop
