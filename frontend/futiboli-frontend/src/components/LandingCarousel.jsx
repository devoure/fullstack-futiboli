import React, {} from 'react'
import '../index.css'

function LandingCarousel(){
  return (
    <div className="landing-carousel">
      <div className="text">
        <div className="top-text">
          <span>Karibu Leo</span>
        </div>

        <div className="middle-text">
          <span>Football is Life</span>
        </div>

        <div className="bottom-text">
          <span>Explore</span>
        </div>
      </div>

      <div className="note-hover">
        <div className="note-content-container">
          <div className="note-icon">
            <ion-icon name="images-outline"></ion-icon>
          </div>
          
          <div className="note-text">
            <span>Image Credits</span>
            <ul>
              <a href="https://unsplash.com/photos/o_gJAkcKJmM">John O'Nolan</a>
              <a href="https://unsplash.com/photos/KWQ2kQtxiKE">Markus Spiske</a>
              <a href="https://unsplash.com/photos/OgqWLzWRSaI">Connor Coyne</a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LandingCarousel
