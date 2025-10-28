"use client"
import React from 'react'
import ProjectList from '../components/ProjectList'
import Project from '../components/Project'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen text-gray-900 pt-16" style={{ background: 'var(--color-bgcolor)' }}>
      <Header />
      <Project />
      <Footer />
    </div>
  )
}