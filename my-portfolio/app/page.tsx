"use client"
import React from "react";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-gray-800 pt-16" style={{ background: 'var(--color-bgcolor)' }}>
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}
