(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/Project.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-slick/lib/index.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const Project = ()=>{
    const ProjectDetails = [
        {
            company: 'SEALIUM',
            platform: 'DID 기반 아이디 및 수료증 발급, 검증 플랫폼',
            description: `기업 협악 프로젝트로서 DID 기반 아이디 및 수료증 발급, 검증 플랫폼 개발하게 되었습니다. 
    사용자가 가입하면 DID 아이디를 발급하고, 수료증을 발급할 수 있는 시스템입니다. 사용자가 수료증을 발급받고, 해당링크를 통해
    검증할 수 있는 기능을 제공합니다. 수료증 발급 요청시 관리가 수락 및 거절할 수 있는 기능도 포함되어 있습니다.`,
            role: `    백엔드 개발, 프론트엔드, 스마트 계약 개발 및 배포를 담당하였으며, Nestjs, Nextjs, avalanche, Solidity를 활용하여 사용자 친화적인
    인터페이스와 안전한 블록체인 기능을 구현하였습니다. 또한, 관리자 페이지와 검증 페이지를 개발하여 효율적인 수료증 관리와 검증 프로세스를 지원하였습니다.`,
            responsibilities: [
                'DID 아이디 발급 및 관리',
                '수료증 발급 및 검증 시스템',
                '관리자 페이지 및 검증 페이지 개발',
                '인프라 관리 및 배포'
            ],
            features: [
                '관리자의 등급은 슈퍼관리자 와 일반관리자, 슈퍼 관리자는 하드 고딩으로 생성 일반 관리자는 회원가입하고 슈퍼관리자가 요청 수락한후 로그인 가능',
                '관리자 요청 및 관리 권한는 슈퍼 관리자만 가능',
                '클라이언트쪽에서 수료증 요청시 수료증 목록에 확인하여 승인과 거절 처리 가능, 승인시 VC(수료증) 발급 및 블록체인에 기록, 거절시 거절 처리 가능',
                '사용자의 목록 확인 가능, 사용자의 개인정보, 전체 사용자, 일일 가입 및 일일 방문 사용자 확인 가능',
                '검색장에서 이름, 아이디로 사용자와 관리자 조회 가능',
                '개인 정보 확인 및 수정 가능',
                '회원 탈퇴도 가능합니다(데이터베이스과 스마트 컨트랙트에서도 제거)',
                '검증 페이지에서 공유 링크와 사용자의 DID 공개키를 가지고 검증가능(검증시 사용자와 발급자의 개인키가지고 vc 검증 과정 진행 성공시 vc 발급 실패시 error)'
            ],
            deploymentLink: [
                'https://sealiumback.store/',
                'https://admin.sealiumback.store/',
                'https://vcv.sealiumback.store/'
            ],
            images: [
                '/sealium-adminlogin.gif',
                '/sealium-clientsealium.gif',
                '/sealium-adminsignup.gif',
                '/verify.gif'
            ]
        },
        {
            company: 'ZunoNFT',
            platform: 'NFT 거래 플랫품',
            description: `개인 프로젝트로서 ZunoNFT라는 NFT 거래 플랫폼을 개발하게 되었습니다. 
    사용자가 회원가입하고, Coin 민팅, NFT를 민팅하고, 마켓플레이스에서 거래할 수 있는 시스템입니다. 사용자는 자신의 NFT를 관리하고, 발급된 코인을 사용하여 다른 사용자의 NFT를
    구매할 수 있는 기능을 제공합니다. 사용자가 자긴의 NFT를 마켓플레이스에 등록하고, 경매 형식으로 판매할 수 있는 기능도 포함되어 있습니다.`,
            role: `백엔드 개발, 프론트엔드, 스마트 계약 개발 및 배포를 담당하였으며, Nestjs, React, Solidity, sepolia testnet를 활용하여 사용자 친화적인
    인터페이스와 안전한 블록체인 기능을 구현하였습니다. 가스비는 대납자가 부담하는 형식으로 사용자가 가스비 걱정없이 NFT를 민팅하고 거래할 수 있도록 하였습니다.`,
            responsibilities: [
                'erc 20 토큰 발급 및 관리, erc 721 NFT 민팅 및 관리 그리고 erc 4337 계정 주상화 로직으로 대납자 가스비 처리',
                'ui/ux 디자인 및 프론트엔드 개발',
                '스마트 계약 개발 및 sepolia 테스트넷 배포',
                '인프라 관리 및 배포'
            ],
            deploymentLink: [
                'https://bing-nft.vercel.app/'
            ],
            features: [
                'ERC4337 블록체인 기능을 활용해서 토큰 발행, NFT 생성 및 거래할수 있는 플랫품을 개발하게 되었습니다.',
                '사용자가 가입하면 WALLET 이랑 SMART ACCOUNT 계정을 생성되고 WHITE LIST 에 등록되어 WHITE LIST 등록 된 SMART CONTRACT 들의 GASFEE 대납자가 지불하게 됩니다',
                '사용자의 정보, NFT정보, 판매 NFT LIST들이 DATABASE 에 저장하게 했습니다',
                '백엔드는 NESTJS 사용했고 프론트는 REACT 사요하고 CONTRACT는 SOLIDITY 사용해서 구현하게 되었습니다.',
                'mainpage에서는 사용자의 포트폴리오, 거래 내역과 데시보드를 확인할수 있습니다.',
                'chain 에 논스 켭치기 않기 위해 컨트랙트 처리 될때까지 로딩 처리했습니다.',
                '웹과 모바일 반응형도 처리해놨습니다.'
            ],
            images: [
                '/ZunoNft-desktopview.gif',
                '/ZunoNft-mintdesktop.gif'
            ]
        },
        {
            company: 'Notionary',
            platform: '협업 및 커뮤니티 플랫폼',
            description: `팀 프로젝트로서 Notionary라는 협업 및 커뮤니티 플랫폼을 개발하게 되었습니다. 
    사용자가 워크스페이스를 생성하고, 팀원들과 협업할 수 있는 시스템입니다. 사용자는 워크스페이스 내에서 페이지를 생성하고, 콘텐츠를 작성하며, 팀원들과 실시간으로 소통할 수 있는 기능을 제공합니다. 
    또한, 커뮤니티 기능을 통해 다양한 주제의 그룹에 참여하고, 정보를 공유할 수 있는 기능도 포함되어 있습니다.`,
            role: `워크스페이스 및 커뮤니티 플랫폼의 프론트엔드와 백엔드 개발을 담당하였으며, React, Node.js, Express, mysql을 활용하여 사용자 친화적인
    인터페이스와 안정적인 서버 기능을 구현하였습니다. 또한, 페이지 생성, 콘텐츠 관리, 실시간 소통 기능을 개발하여 효율적인 협업 환경을 제공하였습니다.`,
            responsibilities: [
                '페이지 생성 및 콘텐츠 관리',
                '생성된 워크스페이스에 추가 및 삭제 기능 구현',
                '생성된 워크스페이스 커뮤니티에 공유 기능 구현',
                '실시간 소통 기능 구현'
            ],
            deploymentLink: '...',
            features: [
                '사용자가 글 작성, 사진, 텍스트, 제목, 글머리 기호 목록, 번호 매기기 목록, 할일 목록 등을 선택해서 원하는 글을 작성 가능',
                '키보드를 늘릴떄마다 입력한 값이 데이트베이스에 저장.',
                '드래그 (drag) 기능을 사용 가능',
                '메인 페이지에서 저장된 워크스페이스를 공유. 공유 된 워크스페이스는 읽이만 가능',
                '페이지 삭제 기능',
                '워크스페이스 폴더 삭제하면 페이지랑 내용까지 자동 삭제'
            ],
            images: [
                '/Notionary-createpage.gif',
                '/Notionary-createworkspace.gif',
                '/Notionary-deletews.gif'
            ]
        },
        {
            company: 'Meetscoop',
            platform: '맵 기반 동호회 모임 플랫폼',
            description: `첫 팀프로젝트으로 Meetscoop을 개발하게 되었습니다. 사용자가 지하철역 기반으로 모임을 생성하고, 참여할 수 있는 시스템입니다. 사용자는 자신의 모임을 관리하고, 다른 사용자의 모임에 참여할 수 있는 기능을 제공합니다.`,
            role: `데이터베이스 설계 및 구축, 카카오 로그인, 마이페이지 구현을 담당하였으며, React, Node.js, Express, mysql을 활용하여 사용자 친화적인
    인터페이스와 안정적인 서버 기능을 구현하였습니다. 또한, 카카오 로그인 기능을 통해 사용자의 편리한 접근성을 제공하였습니다.`,
            responsibilities: [
                '데이터베이스 설게 및 구축',
                '카카오 로그인 기능 구현',
                '마이페이지 구현 담당',
                '개인 정보 수정 기능 구현'
            ],
            deploymentLink: 'https://meetscoop.shop',
            features: [
                '카카로 oauth2 로그인 기능, 로그인하면 데이터베이스에 사용자 정보 저장되어 쿠키 생성',
                '마이 페이지에서 사용자의 정보 수정 및 관리 가능, 사용자가 생성한 동호회, 활동 내역이랑 동호회 참여 목록 캘린들 통해 확인 가능',
                '해더바 로그인과 로그아웃 기능 및 화면 구성',
                '데이터베이스 및 테이블 관계성 설계',
                '회원 정보 확인 및 수정 기능',
                '포인트 350 가진 회원들이 동호회 추가하기 버튼 생기고 동호회 추가할수있는 기능',
                '본인이 생성한 동호회 페이지를 확인',
                '본인이 좋아요나 댓글 다는 동호회 페이지를 확인 그리고 사진 누르면 상세 페이지 이동',
                '나의 달력에서 참여 이벤트 날짜랑 내용을 확인 가능'
            ],
            images: [
                '/scoop-kakaologin.gif',
                '/scoop-mypagedetails.gif',
                '/scoop-personaldetailedits.gif'
            ]
        }
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: " flex w-full text-bold text-5xl justify-center mx-auto items-center mb-0 pb-0 mt-8",
                children: "나의 Project"
            }, void 0, false, {
                fileName: "[project]/app/components/Project.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            ProjectDetails.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: project.company.toLowerCase(),
                    className: "relative h-screen w-[70%] mx-auto flex text-black  items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1/2 h-180 py-16 pt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl font-bold  mb-16",
                                    children: project.company
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Project.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$slick$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    ...settings,
                                    children: project.images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: image,
                                                alt: `Project Image ${index + 1}`,
                                                className: "w-full h-120 rounded-lg object-fit "
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/Project.tsx",
                                                lineNumber: 158,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, index, false, {
                                            fileName: "[project]/app/components/Project.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Project.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Project.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-1/2 h-180 overflow-y-auto no-scrollbar m-16 mr-0 shadow-sm p-8  rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold mb-8",
                                    children: project.platform
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Project.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-lg font-bold mb-4",
                                    children: "프로젝트 개요"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Project.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: " text-md mb-4",
                                    children: project.description
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Project.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-lg font-bold mb-4",
                                    children: "나의 역할"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Project.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: " text-md mb-4",
                                    children: project.role
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Project.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-lg font-bold mb-4",
                                    children: "주요 책임"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Project.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc ml-5 mb-4",
                                    children: project.responsibilities?.map((responsibility, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "text-md",
                                            children: responsibility
                                        }, idx, false, {
                                            fileName: "[project]/app/components/Project.tsx",
                                            lineNumber: 174,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Project.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-lg font-bold mb-2",
                                    children: "배포 링크"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Project.tsx",
                                    lineNumber: 177,
                                    columnNumber: 14
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: Array.isArray(project.deploymentLink) ? project.deploymentLink.map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: link,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "block text-md text-blue-600 hover:underline",
                                            children: link
                                        }, i, false, {
                                            fileName: "[project]/app/components/Project.tsx",
                                            lineNumber: 181,
                                            columnNumber: 21
                                        }, ("TURBOPACK compile-time value", void 0))) : project.deploymentLink && project.deploymentLink !== '...' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: project.deploymentLink,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-md text-blue-600 hover:underline",
                                        children: project.deploymentLink
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/Project.tsx",
                                        lineNumber: 184,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Project.tsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "text-lg font-bold mt-4 mb-4",
                                    children: "주요 기능"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Project.tsx",
                                    lineNumber: 188,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "list-disc ml-5",
                                    children: project.features?.map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "text-md",
                                            children: feature
                                        }, idx, false, {
                                            fileName: "[project]/app/components/Project.tsx",
                                            lineNumber: 191,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Project.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Project.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        index < ProjectDetails.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-0 right-0 bottom-0 h-px bg-gray-300/60"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Project.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, index, true, {
                    fileName: "[project]/app/components/Project.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Project.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Project;
const __TURBOPACK__default__export__ = Project;
var _c;
__turbopack_context__.k.register(_c, "Project");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Header() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 border-b border-gray-200/10",
        style: {
            background: 'var(--color-bgcolor)'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: "w-[70%] mx-auto px-6 flex items-center justify-between h-16",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/",
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-10 h-10 rounded-full bg-gray-100 shadow flex items-center justify-center text-lg font-medium",
                            children: "SB"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Header.tsx",
                            lineNumber: 9,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-md font-medium",
                            children: "비노드"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Header.tsx",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Header.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex items-center gap-6 text-md",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/projects",
                            className: "hover:underline",
                            children: "프로젝트"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Header.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#footer",
                            className: "px-4 py-2 border rounded text-sm",
                            children: "이메일 보내기"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Header.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Header.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Header.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Header.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard.js [app-client] (ecmascript) <export default as Clipboard>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Footer() {
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleCopy = ()=>{
        navigator.clipboard.writeText("blackorion3@gmail.com");
        setCopied(true);
        setTimeout(()=>setCopied(false), 2000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        id: "footer",
        className: "mt-12 border-t bg-sbgcolor border-gray-200/10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[70%] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 md:mb-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-semibold",
                            children: "비노드"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " 비노드. All rights reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://github.com/Mr-Binod",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "text-gray-500 hover:text-gray-900",
                            children: "GitHub"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://news7693.tistory.com/",
                            target: "_blank",
                            rel: "noreferrer",
                            className: "text-gray-500 hover:text-gray-900",
                            children: "blog"
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 mb-4 md:mb-0 cursor-pointer",
                    onClick: handleCopy,
                    children: [
                        "blackorion3@gmail.com",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 flex justify-center",
                            children: copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1",
                                children: "Copied!"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 29,
                                columnNumber: 63
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clipboard$3e$__["Clipboard"], {
                                size: 16,
                                className: "ml-1"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Footer.tsx",
                                lineNumber: 29,
                                columnNumber: 103
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/Footer.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Footer.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Footer.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Footer.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(Footer, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/projects/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Project$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Project.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Footer.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function ProjectsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen text-gray-900 pt-16",
        style: {
            background: 'var(--color-bgcolor)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/projects/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Project$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/projects/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/projects/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/projects/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = ProjectsPage;
var _c;
__turbopack_context__.k.register(_c, "ProjectsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_6c595398._.js.map