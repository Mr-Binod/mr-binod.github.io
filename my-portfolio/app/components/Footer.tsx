"use client"
import React, { useState } from 'react';
import { Clipboard } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("blackorion3@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="footer" className="mt-12 border-t bg-sbgcolor border-gray-200/10">
      <div className="w-[70%] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <div className="mb-4 md:mb-0">
          <div className="font-semibold">비노드</div>
          <div>© {new Date().getFullYear()} 비노드. All rights reserved.</div>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Mr-Binod" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900">GitHub</a>
          <a href="https://news7693.tistory.com/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-gray-900">blog</a>
        </div>

        <div className="flex items-center gap-2 mb-4 md:mb-0 cursor-pointer" onClick={handleCopy}>
          blackorion3@gmail.com
          <div className="w-16 flex justify-center">{copied ? <span className="ml-1">Copied!</span> : <Clipboard size={16} className="ml-1" />}</div>
        </div>
      </div>
    </footer>
  );
}