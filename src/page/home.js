import React from 'react'
import { Navbar } from '../component/navbar/navbar'
import { Content } from '../component/content/content'
import { Footer } from '../component/footer/footer'

export const Home = () => {
  return (
    <div className="app">
      <div className="main-content">
        <Navbar />
        <Content />
      </div>
      <Footer /></div>
  )
}
