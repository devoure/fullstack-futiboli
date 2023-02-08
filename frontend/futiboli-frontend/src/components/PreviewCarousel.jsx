import React, {} from 'react'
import { gsap  } from "gsap"
import '../index.css'
import newsData from '../assets/newsData.jsx'
import usePosition from '../hooks/usePosition.jsx'


function PreviewCarousel(){
  const previewSlider = React.useRef()
  const sliderElementsRef = React.useRef([])
  const position = usePosition(previewSlider)

  const addToSliderElementsRef = (el)=>{
    if(el && !sliderElementsRef.current.includes(el)){
      sliderElementsRef.current.push(el)
    }
  }
  React.useEffect(()=>{
    const element = previewSlider.current
    const observer = new IntersectionObserver((entries)=>{
      const rect = element.getBoundingClientRect()
      const visibleElements = Array.from(element.children).filter((child) => {
        const childRect = child.getBoundingClientRect()
        return rect.left <= childRect.left && rect.right >= childRect.right
      })
      if (visibleElements.length == 3){
        const timeline = gsap.timeline({defaults:{duration:1}})
        timeline
          .fromTo(visibleElements[0], {opacity: 0}, {opacity:1}, 0)
          .fromTo(visibleElements[0],{x:"-10vw"}, {x:"0", ease:"bounce", duration: .5}, 0)
          .fromTo(visibleElements[2], {opacity: 0}, {opacity:1}, 0)
          .fromTo(visibleElements[2],{x:"10vw"}, {x:"0", ease:"bounce", duration: .5}, 0)
          .fromTo(visibleElements[1], {opacity: 0}, {opacity:1}, 0)
      }
//      else if (visibleElements.length == 2){
//        const timeline = gsap.timeline({defaults:{duration:.5}})
//        timeline
//          .fromTo(visibleElements[0], {opacity: 0}, {opacity:.6})
//          .fromTo(visibleElements[0],{y:"-10vh"}, {y:"0", ease:"bounce"})
//          .fromTo(visibleElements[0], {opacity: .6}, {opacity:1})
//      }else if (visibleElements.length == 3){
//        const timeline = gsap.timeline({defaults:{duration:.5}})
//        timeline
//          .from(visibleElements[0], {opacity: 0})
//          .fromTo(visibleElements[0], {x:"-10vw"}, {x:"0", ease:"bounce"})
//          .to(visibleElements[0], {opacity:1})
//          .from(visibleElements[2], {opacity: 0}, "<1")
//          .fromTo(visibleElements[2], {x:"10vw"}, {x:"0", ease:"bounce"}, "<1.5")
//          .to(visibleElements[2], {opacity:1}, "<2")
//
//      }else if (visibleElements.length == 4){
//        const timeline = gsap.timeline({defaults:{duration:.5}})
//        timeline
//          .fromTo(visibleElements[0], {opacity: 0}, {opacity:.6})
//          .fromTo(visibleElements[0],{y:"-10vh"}, {y:"0", ease:"bounce"})
//          .fromTo(visibleElements[0], {opacity: .6}, {opacity:1})
//      }
    }) 
    observer.observe(previewSlider.current)
  }, [previewSlider])
  const blogPreviewCard = newsData.map((item)=>{
    return(
      <div className="preview-carousel-item" ref={addToSliderElementsRef}>
        <div className="carousel-item-image">
          <img src={ item.image } />
        </div>

        <div className="carousel-item-header">
          <span>{item.title}</span>
        </div>

        <div className="carousel-item-category">
          <span>{item.category}</span>
        </div>

        <div className="carousel-item-time">
          <span>{item.time}</span>
        </div>

      </div>
    )
  })
  return (
    <div className="preview-carousel">
      <div className={position.hasItemOnLeft ? "carousel-slide-button left-active" : "carousel-slide-button left"} onClick={position.scrollLeft}>
        <ion-icon name="arrow-back-outline"></ion-icon>
      </div>
      <div className={position.hasItemOnRight ? "carousel-slide-button right-active" : "carousel-slide-button right" } onClick={position.scrollRight}>
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </div>
      <div className="preview-carousel-content" ref={previewSlider}>
        {blogPreviewCard}
      </div>
    </div>
  )
}
export default PreviewCarousel
