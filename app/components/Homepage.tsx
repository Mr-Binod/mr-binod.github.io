"use client"
import React from "react";
import ProjectList from './ProjectList';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Homepage() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const backendSkills = [
    { label: 'NESTJS', color: 'bg-rose-500 text-white' },
    { label: 'JAVASCRIPT', color: 'bg-yellow-400 text-black' },
    { label: 'NODE.JS', color: 'bg-green-500 text-white' },
    { label: 'TYPESCRIPT', color: 'bg-sky-600 text-white' },
    { label: 'SEQUELIZE', color: 'bg-sky-400 text-white' },
    { label: 'DRIZZLE', color: 'bg-indigo-500 text-white' },
  ];

  const frontendSkills = [
    { label: 'NEXTJS', color: 'bg-slate-900 text-white' },
    { label: 'REACT', color: 'bg-cyan-300 text-black' },
    { label: 'TYPESCRIPT', color: 'bg-sky-600 text-white' },
    { label: 'JAVASCRIPT', color: 'bg-yellow-400 text-black' },
    { label: 'HTML5', color: 'bg-orange-500 text-white' },
    { label: 'CSS3', color: 'bg-blue-600 text-white' },
    { label: 'TAILWIND', color: 'bg-sky-400 text-white' },
  ];

  const blockchainSkills = [
    { label: 'SMART CONTRACTS', color: 'bg-violet-600 text-white' },
    { label: 'WEB3', color: 'bg-emerald-500 text-white' },
    { label: 'ETHERS.JS', color: 'bg-indigo-500 text-white' },
    { label: 'SOLIDITY', color: 'bg-yellow-600 text-black' },
    { label: 'AVALANCHE', color: 'bg-red-500 text-white' },
  ];

  const deploymentSkills = [
    { label: 'DOCKER', color: 'bg-slate-700 text-white' },
    { label: 'NGINX', color: 'bg-emerald-700 text-white' },
    { label: 'VERCEL', color: 'bg-sky-500 text-white' },
    { label: 'AWS', color: 'bg-orange-600 text-white' },
  ];

  const databaseSkills = [
    { label: 'MySQL', color: 'bg-sky-500 text-white' },
    { label: 'Postgres', color: 'bg-indigo-600 text-white' },
  ];

  const commSkills = [
    { label: 'NOTION', color: 'bg-slate-800 text-white' },
    { label: 'GITHUB', color: 'bg-black text-white' },
    { label: 'DISCORD', color: 'bg-violet-500 text-white' },
  ];

  const certificates = [
    {
      src: '/certificate.jpg',
      alt: 'Blockchain Fullstack Certificate',
      title: '블록체인 기반 풀스택 개발자 과정 수료',
      content: [    '블록체인 원리 및 핵심 기술 이해',
   'JavaScript 프로그래밍 언어 학습',
    '프로그래밍에서 활용되는 다양한 자료구조를 학습 및 알고리즘 학습',
    '스마트 웹 프론트엔드 개발 학습',
    '모바일 웹 페이지 개발 프로젝트',
    '데이터베이스의 개념, 데이터베이스 모델링 및 SQL을 학습',
    '스마트 웹 백엔드 개발',
    '스마트 웹 서비스 개발 프로젝트',
    '이더리움 플랫폼과 스마트 컨트랙트 앱 전용 개발 언어인 솔리디티 개발',
    '클레이튼 기반 블록체인 앱 개발',
    '블록체인 앱 개발 팀 프로젝트'
  ],
    },
    {
      src: '/integritycertificate.jpg',
      alt: 'Certificate of Integrity',
      title: '성실상',
      content: [  '프로젝트 기간 동안 꾸준한 참여와 헌신을 통해 팀의 목표 달성에 기여함으로써 수여받은 상입니다.',
      ],
    },
  ];

  // mapping for shields.io logos and colors
  const LOGO_MAP: Record<string, { logo?: string; color: string }> = {
    'NEXTJS': { logo: 'next.js', color: '000000' },
    'REACT': { logo: 'react', color: '61DAFB' },
    'TYPESCRIPT': { logo: 'typescript', color: '3178C6' },
    'JAVASCRIPT': { logo: 'javascript', color: 'F7DF1E' },
    'HTML5': { logo: 'html5', color: 'E34F26' },
    'CSS3': { logo: 'css3', color: '1572B6' },
    'TAILWIND': { logo: 'tailwindcss', color: '38BDF8' },
    'NODE.JS': { logo: 'node.js', color: '339933' },
    'NODE': { logo: 'node.js', color: '339933' },
    'NESTJS': { logo: 'nestjs', color: 'E0234E' },
    'SEQUELIZE': { logo: 'sequelize', color: '52B0E7' },
    'DRIZZLE': { logo: 'drizzle', color: '5B21B6' },
    'SOLIDITY': { logo: 'solidity', color: '363636' },
    'AVALANCHE': { logo: 'avalanche', color: 'E84142' },
    'DOCKER': { logo: 'docker', color: '2496ED' },
    'VERCEL': { logo: 'vercel', color: '000000' },
    'AWS': { logo: 'amazons3', color: 'FF9900' },
    'NGINX': { logo: 'nginx', color: '009639' },
    'MYSQL': { logo: 'mysql', color: '4479A1' },
    'POSTGRES': { logo: 'postgresql', color: '336791' },
    'POSTGRESQL': { logo: 'postgresql', color: '336791' },
    'GITHUB': { logo: 'github', color: '181717' },
    'NOTION': { logo: 'notion', color: '000000' },
    'DISCORD': { logo: 'discord', color: '5865F2' },
    'ETHERS.JS': { logo: 'ethereum', color: '3C3C3D' },
    'SMART CONTRACTS': { logo: 'ethereum', color: '6F42C1' },
    'WEB3': { logo: 'web3', color: '2B6CB0' },
  };

  const badgeUrl = (label: string) => {
    const key = label.toUpperCase();
    const cfg = LOGO_MAP[key];
    const text = encodeURIComponent(label);
    if (cfg && cfg.logo) {
      return `https://img.shields.io/badge/${text}-${cfg.color}?style=for-the-badge&logo=${encodeURIComponent(cfg.logo)}&logoColor=white`;
    }
    const color = cfg ? cfg.color : '7A7A7A';
    return `https://img.shields.io/badge/${text}-${color}?style=for-the-badge`;
  };

  // small logo box helper that holds an inline SVG or initials
  const LogoBox = ({ children }: { children: React.ReactNode }) => (
    <span className="inline-flex items-center justify-center w-6 h-6 text-[10px] font-bold rounded-sm bg-white/20">{children}</span>
  );

  const renderLogo = (label: string) => {
    const key = label.toUpperCase();
    switch (key) {
      case 'REACT':
        return (
          <LogoBox>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="12" cy="12" rx="6" ry="2.5" transform="rotate(0 12 12)" />
              <ellipse cx="12" cy="12" rx="6" ry="2.5" transform="rotate(60 12 12)" />
              <ellipse cx="12" cy="12" rx="6" ry="2.5" transform="rotate(120 12 12)" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
          </LogoBox>
        );
      case 'GITHUB':
        return (
          <LogoBox>
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor">
              <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.393 7.867 10.915.575.106.785-.25.785-.556 0-.274-.01-1-.016-1.964-3.199.695-3.875-1.542-3.875-1.542-.523-1.327-1.278-1.68-1.278-1.68-1.044-.713.08-.699.08-.699 1.155.082 1.762 1.187 1.762 1.187 1.026 1.758 2.693 1.25 3.347.956.104-.744.402-1.25.732-1.538-2.553-.29-5.236-1.277-5.236-5.674 0-1.253.448-2.277 1.183-3.079-.118-.292-.513-1.464.112-3.053 0 0 .965-.309 3.162 1.178A11.03 11.03 0 0112 6.844c.978.004 1.964.132 2.884.388 2.195-1.487 3.158-1.178 3.158-1.178.627 1.589.233 2.761.115 3.053.737.802 1.183 1.826 1.183 3.079 0 4.407-2.689 5.379-5.252 5.665.414.357.783 1.06.783 2.136 0 1.542-.014 2.786-.014 3.166 0 .309.207.668.792.555C20.71 21.386 24 17.08 24 12 24 5.648 18.352.5 12 .5z" />
            </svg>
          </LogoBox>
        );
      case 'DOCKER':
        return <LogoBox>🐳</LogoBox>;
      default:
        return <LogoBox>{label.slice(0, 2).toUpperCase()}</LogoBox>;
    }
  };

  // Auto-scroll/snapping removed — rely on native scrolling

  return (
    <main className="scroll-smooth" style={{ background: 'var(--color-bgcolor)' }}>
      <section className="relative overflow-hidden h-screen">
        <div className="w-[70%] mx-auto px-6 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 h-full">
            <div className="order-2 flex flex-col  justify-center gap-12 h-full md:order-1">
              <div className="text-4xl text-gray-700 uppercase tracking-wider mb-4">백엔드 및 블록체인 풀스택 개발자</div>
              <div className="mt-4 flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">+4</div>
                  <div className="text-lg text-gray-700">프로젝트 완료</div>
                </div>
                {/* <div className="text-center">
                  <div className="text-2xl font-bold">+50</div>
                  <div className="text- text-gray-700">Startups raised</div>
                </div> */}
              </div>
              <h2 className="text-3xl md:text-[120px]  font-bold tracking-tight">안녕하세요</h2>
              <p className="mt-6 text-lg text-gray-700 max-w-2xl">
                신입 개발자로서 진행했던 프로젝트에서 서버 인프라 구축부터 배포 및 운영까지 전 과정을 주도적으로 이끌었습니다.
                특히 데이터베이스 설계, 백엔드 로직 구현, 그리고 RESTful 원칙에 기반한 자원 중심의 API 개발을 통해 안정적인
                서비스 배포에 집중적으로 기여했습니다.
              </p>



              <div className="mt-10">
                <a href="#about" className="inline-block px-6 py-3 border rounded-md">Scroll down</a>
              </div>
            </div>

            <div className="order-1 md:order-2 flex justify-center md:justify-end h-full items-center">
              <div className="w-[320px] md:w-[450px] lg:w-[500px] rounded-lg overflow-hidden ">
                <img src="/profileimg2.png" alt="Portrait" className="w-full h-full object-cover block" />
              </div>
            </div>
          </div>
        </div>
        {/* divider at bottom of this full-screen section */}
        {/* <div className="absolute left-0 right-0 bottom-0 h-px bg-gray-300/60" /> */}
      </section>
      <section id="about" className="relative h-screen text-lg flex items-center">
        <div className="max-w-[70%] w-full mx-auto px-6 py-16 h-full">
          <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_450px_1fr] gap-16 h-full items-stretch">
            {/* Left: About title + intro */}
            <div className="py-6">
              <h2 className="text-5xl ">About Me</h2>
              <p className="mt-16 text-gray-700 ">
                저는 커리어 전환을 통해 개발자의 길을 걷기 시작한 신입 개발자입니다.
                백엔드 및 블록체인 풀스택 개발자로서, 최신 기술과 트렌드에 대한 깊은 이해를 바탕으로 혁신적인 솔루션을 제공할수 있는 개발자 되고싶습니다.
              </p> <br /><br />
              <p>
                다양한 기술 스택을 활용하여 문제를 해결하고, 팀원들과 협업하여 프로젝트를 성공적으로 이끌어내는 것을 목표로 하고 있습니다.
              </p> <br /><br />
              <p>
                성실하고, 책임감을 가지고 맡은 업무를 완수하며, 지속적인 학습과 성장을 통해 더 나은 개발자가 되기 위해 노력하고 있습니다.
              </p>
            </div>

            {/* Center: Stat card with image */}
            <div className="py-6 h-full flex justify-center">
              <div className="w-full h-full max-w-sm rounded-xl shadow-md p-6 flex flex-col justify-between" style={{ background: 'var(--color-sbgcolor)' }}>
                <div className=" gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-100 ">🌐</div>
                  <div className="text-7xl mb-8">100%</div>
                  <p className="mt-4 text-gray-700">새로운 기술 스택을 빠르게 습득하고 적용하는 데 능숙합니다.
                    다양한 프로젝트 경험을 통해 실무에 필요한 기술을 효과적으로 학습하고 있습니다.
                  </p>
                </div>


                <div className="mt-6 bg-gray-50 rounded-lg overflow-hidden ">
                  <img src="/profileimg.jpg" alt="Portrait" className="w-full h-full object-cover block" />
                </div>
              </div>
            </div>

            {/* Right: small portrait + bullets */}
            <div className="py-6 flex flex-col items-start  gap-[42px]">
              <div className="w-[228px] h-52 rounded-lg mx-auto overflow-hidden shadow">
                <img src="/profileimg.jpg" alt="" className="w-full h-full object-cover" />
              </div>

              <ul className="space-y-6">
                <li className="flex  gap-4">
                  <div className="w-9 h-9 flex-none rounded-full bg-gray-900 text-white flex items-center justify-center">★</div>
                  <p className="text-gray-700">최근에 블록체인 기반 풀스택 부터캠프를 수료하였고 이를 통해 프론트엔드, 백엔드, 스마트 컨트랙트 개발 및 배포에 대한 실무 경험을 쌓았습니다.
                    총 4개의 프로젝트를 성공적으로 완수하며, 다양한 기술 스택을 활용한 개발 능력을 입증하였습니다.
                  </p>

                </li>
                <li className="flex  gap-4">
                  <div className="w-9 h-9 flex-none rounded-full bg-gray-900 text-white flex items-center justify-center">★</div>
                  <p className="text-gray-700">팀원들이랑 협업하여 프로젝트를 진행했고 다양한 아이디어들중에서 프로젝트에와 목표에
                    제일 맞는 아이디어를 선택하면서 이를 통해 고객의 요구사항을 충족시키고, 프로젝트의 성공적인 결과를 이끌어냈습니다.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* divider at bottom of about section */}
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gray-300/60" />
      </section>
      <ProjectList />
      <section id="certificates" className="relative h-screen text-lg flex items-center">
        <div className="max-w-[70%] w-full mx-auto px-6">
          <h2 className="text-5xl mb-8">Certificates</h2>
          <Slider {...sliderSettings}>
            {certificates.map((cert, index) => (
              <div key={index} className="px-4">
                <div className="rounded-xl shadow-md p-6 flex justify-between items-center" style={{ background: 'var(--color-sbgcolor)' }}>
                  <img src={cert.src} alt={cert.alt} className="w-3/5 h-auto max-h-[600px] object-contain" />
                  <div className="w-2/5 flex flex-col items-start justify-center text-left px-4 ">
                    <h3 className="text-xl font-semibold">{cert.title}</h3>
                    {cert.content && (
                      <ul className="mt-4 list-disc list-inside text-gray-700 text-md">
                        {cert.content.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>

        </div>
                <div className="absolute left-0 right-0 bottom-0 h-px bg-gray-300/60" />

      </section>
      <section id="skills" className="pt-[26px] h-screen flex flex-col justify-between">
        <div className="max-w-[70%] w-full mx-auto px-6 flex-grow">
          <h2 className="text-5xl mb-8">Skills</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {/* Backend */}
            <div className="rounded-xl shadow-md p-6" style={{ background: 'var(--color-sbgcolor)' }}>
              <h3 className="text-xl font-semibold mb-4">BACKEND</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <img key={skill.label} src={badgeUrl(skill.label)} alt={skill.label} className="h-7" />
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="rounded-xl shadow-md p-6" style={{ background: 'var(--color-sbgcolor)' }}>
              <h3 className="text-xl font-semibold mb-4">FRONTEND</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <img key={skill.label} src={badgeUrl(skill.label)} alt={skill.label} className="h-7" />
                ))}
              </div>
            </div>

            {/* Blockchain */}
            <div className="rounded-xl shadow-md p-6" style={{ background: 'var(--color-sbgcolor)' }}>
              <h3 className="text-xl font-semibold mb-4">CONTRACT</h3>
              <div className="flex flex-wrap gap-2">
                {blockchainSkills.map((skill) => (
                  <img key={skill.label} src={badgeUrl(skill.label)} alt={skill.label} className="h-7" />
                ))}
              </div>
            </div>

            {/* Deployment */}
            <div className="rounded-xl shadow-md p-6" style={{ background: 'var(--color-sbgcolor)' }}>
              <h3 className="text-xl font-semibold mb-4">DEPLOYMENT</h3>
              <div className="flex flex-wrap gap-2">
                {deploymentSkills.map((skill) => (
                  <img key={skill.label} src={badgeUrl(skill.label)} alt={skill.label} className="h-7" />
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="rounded-xl shadow-md p-6" style={{ background: 'var(--color-sbgcolor)' }}>
              <h3 className="text-xl font-semibold mb-4">DATABASE</h3>
              <div className="flex flex-wrap gap-2">
                {databaseSkills.map((skill) => (
                  <img key={skill.label} src={badgeUrl(skill.label)} alt={skill.label} className="h-7" />
                ))}
              </div>
            </div>

            {/* Communication */}
            <div className="rounded-xl shadow-md p-6" style={{ background: 'var(--color-sbgcolor)' }}>
              <h3 className="text-xl font-semibold mb-4">COMMUNICATION</h3>
              <div className="flex flex-wrap gap-2">
                {commSkills.map((skill) => (
                  <img key={skill.label} src={badgeUrl(skill.label)} alt={skill.label} className="h-7" />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-[320px] md:h-[500px] max-w-[70%] w-full mx-auto flex flex-col overflow-hidden items-center justify-center my-12 box-border">
          <div className="w-full px-6 py-10 rounded-xl shadow-md flex flex-col items-center justify-center " style={{ background: 'var(--color-sbgcolor)' }}>
            <h1 className="text-4xl">구상하신 비전이 있으신가요? 현실로 만들어 봅시다!</h1>
            <p className="text-lg max-w-[60%] mt-4 text-gray-700 text-center"> 저는 항상 새롭고 혁신적인 프로젝트에 협력하는 것을 기쁘게 생각합니다.
              완전히 새로운 시작이든, 기존 아이디어를 다듬는 작업이든 상관없이 말이죠.</p>
          </div>

        </div>
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gray-300/60" />
      </section>

      {/* <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="mt-3 text-gray-700">Email me at <a className="text-blue-600 underline" href="mailto:you@example.com">you@example.com</a> or book a call to discuss opportunities.</p>
      </section> */}
    </main>
  );
}
