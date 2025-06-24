import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    color: #e0e0e0;
    width: 800px;
    margin: 50px auto;
    border-radius: 15px;
    padding: 15px 25px ;
    background-color: #505050;
    box-sizing: border-box;
`

const Experience = () => {
    return (
        <Wrap>
            <p>2024/12/30 ~ 진행중</p>
            <div>풀스택 웹 개발자 부트캠프</div>
            <ul>
                <li>html, css 활용해서 페이지 구성</li>
                <li>javascript 화용해서 프론트엔드 기능 구현</li>
                <li>javascript 활용해서 백엔드 기능 구현</li>
                <li>nodejs 활용해서 서버 구현 </li>
                <li>mysql 활용해서 데이터베이스 설계</li>
                <li>sequelize 활용해서 typeORM 통해 데이터베이스 상호작용</li>
            
            </ul>
        </Wrap>
    )
}

export default Experience
