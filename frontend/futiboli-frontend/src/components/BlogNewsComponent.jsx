import React, {} from 'react'
import '../index.css'

function BlogNewsComponent(){
  return (
    <div className="blog-news">
      <div className="blogs-container">
        <div className="blogs-container-main">
          <div className="blogs-main-sliders slider-left">
            <div className="slider-icon">
              <ion-icon name="arrow-back-circle-outline"></ion-icon>
            </div>

            <div className="slider-text">
              <span> View Previous... </span>
            </div>

          </div>

          <div className="blogs-main-content">
          </div>

          <div className="blogs-main-sliders slider-right">
            <div className="slider-icon">
              <ion-icon name="arrow-forward-circle-outline"></ion-icon>
            </div>

            <div className="slider-text">
              <span> View Next... </span>
            </div>
          </div>

        </div>

        <div className="blogs-container-footer">
        </div>
      </div>
    </div>
  )
}
export default BlogNewsComponent
