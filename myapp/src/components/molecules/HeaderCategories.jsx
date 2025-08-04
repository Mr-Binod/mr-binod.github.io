import React from 'react'
import styled from 'styled-components'
import HeaderContents from '../atoms/HeaderContents'
import { Link } from 'react-router-dom'

const Wrap = styled.div`
    display : flex;
    a {
      text-decoration: none;
      color: #e0e0e0;
    }
`

const HeaderCategories = () => {
  return (
    <Wrap>
      {/* <Link></Link> */}
      <HeaderContents> <Link to="/#aboutme">자기소개</Link></HeaderContents>
      <HeaderContents> <Link to="/project">프로젝트</Link></HeaderContents>
      <HeaderContents> <a href="https://github.com/Mr-Binod" target="_blank" rel="noopener noreferrer">깃허브</a></HeaderContents>
      <HeaderContents> <a href="https://news7693.tistory.com/" target="_blank" rel="noopener noreferrer">블로그</a></HeaderContents>
      {/* <HeaderContents> <Link to="/skills">기술</Link></HeaderContents> */}
      {/* <HeaderContents> <Link to="/experience">경력</Link></HeaderContents> */}
    </Wrap>
  )
}

export default HeaderCategories
