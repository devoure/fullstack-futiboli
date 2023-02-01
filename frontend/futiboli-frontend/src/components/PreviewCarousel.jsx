import React, {} from 'react'
import '../index.css'
import newsData from '../assets/newsData.jsx'
import usePosition from '../hooks/usePosition.jsx'


function PreviewCarousel(){
  const previewSlider = React.useRef()
  const position = usePosition(previewSlider)

  const blogPreviewCard = newsData.map((item)=>{
    return(
      <div className="preview-carousel-item">
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
      <div className={position.hasItemOnLeft ? "carousel-slide-button left-active" : "carousel-slide-button left"}>
        <ion-icon name="arrow-back-outline"></ion-icon>
      </div>
      <div className={position.hasItemOnRight ? "carousel-slide-button right-active" : "carousel-slide-button right" }>
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </div>
      <div className="preview-carousel-content" ref={previewSlider}>
        {blogPreviewCard}
      </div>
    </div>
  )
}
export default PreviewCarousel
