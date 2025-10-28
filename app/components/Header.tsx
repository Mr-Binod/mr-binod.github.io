"use client"
import React from 'react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/10" style={{background: 'var(--color-bgcolor)'}}>
      <nav className="w-[70%] mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gray-100 shadow flex items-center justify-center text-lg font-medium">SB</div>
          <span className="text-md font-medium">비노드</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-md">
          <a href="/projects" className="hover:underline">프로젝트</a>
          {/* <a href="#about" className="hover:underline">자기소개</a> */}
          {/* <a href="/profile" className="hover:underline">프로필</a> */}
          <a href="#footer" className="px-4 py-2 border rounded text-sm">이메일 보내기</a>
        </div>
      </nav>
    </header>
  )
}
