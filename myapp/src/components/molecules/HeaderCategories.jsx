import React from 'react'
import styled from 'styled-components'
import HeaderContents from '../atoms/HeaderContents'

const Wrap = styled.div`
    display : flex;
`

const HeaderCategories = () => {
  return (
    <Wrap>
      <HeaderContents>자기소개</HeaderContents>
      <HeaderContents>프로젝트</HeaderContents>
      <HeaderContents>깃헙</HeaderContents>
      <HeaderContents>블로그</HeaderContents>
      <HeaderContents>기술</HeaderContents>
      <HeaderContents>경력</HeaderContents>
    </Wrap>
  )
}

export default HeaderCategories
