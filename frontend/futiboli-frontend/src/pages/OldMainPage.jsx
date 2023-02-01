import React, {} from 'react'
import authorImg from '../assets/fabrizio.jpg'
import moreImg from '../assets/more.png'
import futiImg from '../assets/futi.jpg'
import BlogNewsComponent from '../components/BlogNewsComponent.jsx'
import '../index.css'

function MainPage(){
  return (
    <div className="main-page">
      <div className="parallax bkg-top">
        <div className="site-header">
          <span>FUTIBOLI</span>
        </div>
      </div>

      <div className="site-about">
        <div className="site-about-header">
          <hr />
          <span>ABOUT FUTIBOLI</span>
          <hr/>
        </div>
        
        <div className="site-about-details">
          <div className="about-card">     
            <span className="about-card-image"><img src={authorImg}/></span>
            <span className="about-card-title">About Author</span>
            <p className="about-card-details">Fabrizio Romano is an Italian football journalist. He has worked for Sky Sport Italy, and is regarded as one of the most well-informed and reliable sources for football transfer news.<br/>Since joining Sky Sport Italy at age 19, he has created and built contacts with clubs, agents and intermediaries all over Europe. Romano also works as a reporter for The Guardian and CBS Sports. He is based in Milan. Romano is known for his use of the tagline "Here we go!", used when announcing a transfer deal.</p>
          </div>

          <div className="about-card">     
            <span className="about-card-image"><img src={futiImg}/></span>
            <span className="about-card-title">About Blog</span>
            <p className="about-card-details">We focus on Football Stories that will take you on a journey from the very top of the game, with content from the Premier League, Seria A, La Liga and the Bundesliga. However, we are equally as interested in football stories from the lower leagues, the amateur game, and of course, from around the World of Football.On this webpage, you will find all of our Football content, from videos to articles, but if you want to see all of it in one go</p>
          </div>

          <div className="about-card">     
            <div className="about-card-image"><img src={moreImg}/></div>
            <div className="about-card-title">More...</div>
            <p className="about-card-details">We are interested in all sports, no matter how obscure. If you would like to see a game featured or are involved in a sport we haven't covered yet, please get in touch at hello@thesporting.blog or post to our Facebook page. We will promote things to help pay for everything. Don't click on the links if they infuriate you. We are an Amazon Affiliate partner and as such receive commission payments if you buy items through the site.
</p>
          </div>

        </div>

      </div>
      <div className="parallax site-blog-title">
        <div className="site-blog-title-header">
          <span>MY BLOGS</span>
          <span><ion-icon name="newspaper-outline"></ion-icon></span>
        </div>
      </div>
      < BlogNewsComponent />

    </div>
  )
}
export default MainPage
