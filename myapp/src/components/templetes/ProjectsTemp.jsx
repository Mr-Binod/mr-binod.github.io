import React from 'react'
import styled from 'styled-components'
import ProjectCard from '../molecules/ProjectCard'
import { desktopview, meetscoop, Notionary, sealiumlogin } from '../../public' // Import images


const Wrap = styled.div`  
    max-width: 1105px; /* Limit max width */
    margin: 0 auto;
    padding: 0px 20px; /* Responsive padding */
    color: #f7f7f7;
    display: flex;
    flex-wrap: wrap;
    justify-content: center; /* Center cards */
    gap: 120px; /* Increased gap to space cards apart */

    @media (max-width: 768px) {
        padding: 0 15px;
        gap: 40px;
    }
`

const Title = styled.h1`
    font-size: 40px;
    padding: 50px 20px; /* Responsive padding */
    max-width: 1105px;
    margin: 0 auto;
    margin-top: 64px;
    text-align: center; /* Center the title */
    box-sizing: border-box;

    @media (max-width: 768px) {
        font-size: 32px;
        padding: 30px 15px;
        margin-top: 40px;
    }
`



const ProjectsTemp = () => {
    const projectsData = [
        {
            title: 'Sealium 프로젝트',
            image: sealiumlogin,
            description: '블록체인 기반 DID/VC 발급 및 검증 플랫폼 Sealium. AVALANCHE 네트워크를 사용하여 중앙화된 네트워크를 구현. 사용자가 회원가입시 DID 계정 생성, VC(수료증) 발급 요청 가능 관리자기 요청 발급 처리시 수료증 발급 확인 및 검증 가능.',
            links: [
                { url: 'https://sealiumback.store', text: 'Sealium 클라이언트 페이지 (id : admin, pwd : admin123!)' },
                { url: 'https://admin.sealiumback.store', text: 'Sealium 관리자 페이지 (id : ubin, pwd : asdf123!)' },
                { url: 'https://vcv.sealiumback.store', text: 'Sealium 검증 페이지' },
            ],
            githubLink: 'https://github.com/Mr-Binod/ZunoNFT', // Assuming this is the correct repo for Sealium
        },
        {
            title: 'ZunoNFT 프로젝트',
            image: desktopview,
            description: '개인 프로젝트로 erc 4337 계정 추상화 로직 사용해서 구현하였습니다. 사용자가 토큰 발행, nft 구매, 판매 할수 있는 플랫품으로 개발하게 되었습니다 (id : admin, pwd : 1212) 로그이해서 확인히실수 있습니다. 회원가입시 스마트 계정떄문에 트랜젝션 일어나기때문에 프트폴리오에서 스마트계정 나올떄까지 기능들 사용할실수 없습니다',
            links: [],
            githubLink: 'https://github.com/Mr-Binod/ZunoNFT',
            siteLink: 'https://bing-nft.vercel.app/',
        },
        {
            title: 'Notionary 프로젝트',
            image: Notionary,
            description: 'Notionary는 워크스페이스와 커뮤니티를 통일해 사용자가 문서 작성, 기록할 수 있고 커뮤니티에 공유하고 피드백을 받을 수 있습니다. 여러 개 카테고리로 분리되어 각각의 카테고리에 맞는 개인 고민과, 질문을 하고 피드백을 받을 수 있는 플랫폼으로 개발하게 되었습니다.',
            links: [],
            githubLink: 'https://github.com/Mr-Binod/Notionary',
            siteLink: 'https://github.com/Mr-Binod/Notionary', // Assuming site link is same as github for now
        },
        {
            title: 'Meetscoop 프로젝트',
            image: meetscoop,
            description: 'Meetscoop는 동호회 회원들의 적극적인 참여를 통해 협력과 성장을 도모하는 것을 목표로 합니다. 성공적인 동호회 프로젝트 사례를 참고하여 기대 효과와 구체적인 결과물을 제시합니다.',
            links: [],
            githubLink: 'https://github.com/Mr-Binod/meetscoop',
            siteLink: 'https://meetscoop.shop/',
        },
    ];

  return (
    <>
    <Title>Projects</Title>
    <Wrap>
      {projectsData.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              links={project.links}
              githubLink={project.githubLink}
              siteLink={project.siteLink}
          />
      ))}
    </Wrap>
    </>
  )
}

export default ProjectsTemp
