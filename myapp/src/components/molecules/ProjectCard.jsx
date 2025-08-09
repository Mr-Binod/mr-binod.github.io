import React from 'react'
import styled from 'styled-components'
import { desktopview, meetscoop, Notionary, zunoDmain} from '../../public'

const Wrap = styled.div`
    width : 500px;
    height : 650px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid #f7f7f7;
    color: #bbbbbb;
    box-sizing: border-box;
`

const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 20px;
`

const Image = styled.img`
    width: 100%;
    object-fit: cover;
    margin-bottom: 40px;
`

const Desc = styled.div`
    font-size: 16px;
    /* margin-bottom: 20px; */
`
const Desclink = styled.div`
    font-size: 16px;
    cursor: pointer;
    width: 100%;
    text-align: center;
    background-color: #1f3557;
    padding: 10px;
    border-radius: 10px;
    box-sizing: border-box;
    margin-top: 10px;
    /* margin-bottom: 20px; */
    &:hover {
        background-color: #2e4b75;
        color: #bbbbbb;
    }
`

const ProjectCard = () => {
  return (<>
    <Wrap >
      <Title>ZunoNFT 프로젝트</Title>
      <Image src={desktopview} alt="project" />
      <Desc>프로젝트 소개 : 개인 프로젝트로 erc 4337 계정 추상화 로직 사용해서 구현하였습니다. 사용자가 회원 가입하면 
        데이터베이스에 정보 저장되고 가입 완료됩니다. 로그인 가능하고 스마트 컨트랙트를 호출됩니다 스마트 컨트랙트 다 처리되면
        스마트 계정 생기고 그때까지 사용자의 구매, 토큰 발행 같은 기능을 사용하면 오류발생시키고 스마트 계정 생성 완료되면 
        사용자의 기능 사용 가능합니다. 
      </Desc> <br/>
      <Desclink style={{color: 'lightblue'}} onClick={() => {
      window.open('https://bing-nft.vercel.app/', '_blank')
    }}>
        ZunoNFT 사이트로 이동하기
      </Desclink>
      <Desclink style={{color: 'lightblue'}} onClick={() => {
      window.open('https://github.com/Mr-Binod/ZunoNFT', '_blank')
    }}>
         Github 이동하기
      </Desclink>
    </Wrap>
    <Wrap>
    <Title>Notionary 프로젝트</Title>
      <Image src={Notionary} alt="project" />
      <Desc>프로젝트 소개 : Notionary는 워크스페이스 과 커뮤니티 통일해 사용자가 문서 작성, 기록할수 있고 커뮤니티에 공유하고 프드백을 받을수 있습니다. 
        여러개 카태고리의 분리 되어 각각의 카태고리에 맞는 개인 고민과, 질문을 하고 피드백을 받을수 있는 플랫품으로 개발하게 되었습니다.
      </Desc> <br/>
      <Desclink style={{color: 'lightblue'}} onClick={() => {
      window.open('https://github.com/Mr-Binod/Notionary', '_blank')
    }}>
        Notionary 사이트로 이동하기
      </Desclink>
      <Desclink style={{color: 'lightblue'}} onClick={() => {
      window.open('https://github.com/Mr-Binod/Notionary', '_blank')
    }}>
        Github 이동하기
      </Desclink>
    </Wrap>
    <Wrap>
    <Title>Meetscoop 프로젝트</Title>
      <Image src={meetscoop} alt="project" />
      <Desc>프로젝트 소개 : meetscoop는 도호회 회원들의 적극적인 참여를 통해 협력과 성장을 도모하는 것을 목표로 합니다. 
        성공적인 동호회 프로젝트 사례를 참고하여 기대 요과와 구체적인 결과물을 제시합니다.
      </Desc> <br/>
      <Desclink style={{color: 'lightblue'}} onClick={() => {
      window.open('https://meetscoop.shop/', '_blank')
    }}>
        Meetscoop 사이트로 이동하기
      </Desclink>
      <Desclink style={{color: 'lightblue'}} onClick={() => {
      window.open('https://github.com/Mr-Binod/meetscoop', '_blank')
    }}>
        Github 이동하기
      </Desclink>
    </Wrap>
    </>
  )
}

export default ProjectCard
