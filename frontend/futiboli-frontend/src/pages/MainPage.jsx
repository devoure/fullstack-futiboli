import React, {} from 'react'
import authorImg from '../assets/fabrizio.jpg'
import moreImg from '../assets/more.png'
import futiImg from '../assets/futi.jpg'
import BlogNewsComponent from '../components/BlogNewsComponent.jsx'
import HeaderComponent from '../components/HeaderComponent.jsx'
import LandingCarousel from '../components/LandingCarousel.jsx'
import PreviewCarousel from '../components/PreviewCarousel.jsx'
import ContentComponent from '../components/ContentComponent.jsx'
import '../index.css'

function MainPage(){
  return (
    <div className="main-page">
      <HeaderComponent />
      <LandingCarousel />
      <PreviewCarousel />
      <ContentComponent />
    </div>
  )
}
export default MainPage
