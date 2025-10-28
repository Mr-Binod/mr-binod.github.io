"use client"
import React from "react";

const projects = [
  {
    company: 'SEALIUM (DID 기반 아이디 및 수료증 발급, 검증 플랫폼)',
    date: '2025-08-08 ~ (4주)',
    role: '백엔드, RESTful api 구현, 데이터베이스 설계 및 구축, 아바란체 서브네트 구현, 스마트 컨트랙트 개발,  관리자 페이지, 검증 페이지, 인프라 관리 담당',
    tags: ['관리자 UI/UX', '백엔드', '블록체인', '배포'],
  },
  {
    company: 'ZunoNFT (NFT 거래 플랫품)',
    date: '대략 10일',
    role: "UX/UI 디자인, 백엔드 구축, sepolia 테스트넷 배포 및 운영, 스마트 계약 개발, 인프라 관리 담당 ",
    tags: ['UI/UX', '백엔드', '컨트랙트', '배포'],
  },
  {
    company: 'Notionary (협업 및 커뮤니티 플랫폼)',
    date: '2025-05-16 ~ 2025-06-1 (16일)',
    role: "워크스페이스 및 커뮤니티에 공유 기능 구현, 데이터베이스 설계 및 구축 답당",
    tags: ['프론트엔드', '백엔드'],
  },
  {
    company: 'Meetscoop (맵 기반 동호회 및 모임 플랫폼)',
    date: '2025-05-16 ~ 2025-06-1 (16일)',
    role: '데이터베이스 설게 및 구축, 카카오 로그인, 마이페이지 구현 담당',
    tags: ['프론트엔드', '백엔드'],
  },
];

export default function ProjectList() {
  return (
  <section id="projects" className="py-20  h-screen relative">
      <div className="max-w-[70%] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div>
            <h2 className="text-3xl md:text-5xl  leading-tight">나의 프로젝트 경험</h2>
          </div>
        </div>
        <div className="mt-12 border-t border-b border-gray-200 divide-y divide-gray-200">
          {projects.map((p, i) => (
            <div key={i} className="py-8 grid grid-cols-1 md:grid-cols-[550px_auto] gap-4 ">
              <div>
                <h3 className="text-xl font-medium">
                  <a href={`/projects#${p.company.split(' ')[0].toLowerCase()}`} className="hover:underline">{p.company}</a>
                </h3>
                <div className="text-sm text-gray-500 mt-2">• {p.date}</div>
              </div>

              <div className="flex  w-full justify-between gap-6">
                <p className="text-gray-600 w-120">{p.role}</p>
                <div className="flex flex-wrap w-50 gap-2">
                  {p.tags.map((t) => (
                    <a key={t} href={`/projects#${p.company.split(' ')[0].toLowerCase()}`} className="px-3 py-1 h-8 rounded-full border border-gray-200 text-sm bg-white hover:bg-gray-100">{t}</a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-0 right-0 bottom-0 h-px bg-gray-300/60" />
    </section>
  );
}
