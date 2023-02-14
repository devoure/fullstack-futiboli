import React, {} from 'react'
import { gsap  } from "gsap"
import '../index.css'
import  blogContent from '../assets/blogContent.jsx'
import mancwin from '../assets/manchesterwin.png'

function ContentComponent(){
  return (
    <div className="content-blog-container">
      <div className="content-blog">
        <div className="content-blog-articles">
          <div className="blog-article">
            <div className="blog-article-image">
              <div className="image"><img src={mancwin} /></div>
              <div className="article-image-prev">
                <div className="prev-content">
                  <ion-icon name="person-outline"></ion-icon>
                  <span>Admin</span>
                </div>
                <div className="prev-content">
                  <ion-icon name="calendar-outline"></ion-icon>
                  <span>January 19, 2019</span>
                </div>

                <div className="prev-content">
                  <span> 5 Comments</span>
                </div>
              </div>
            </div>
            <div className="blog-article-heading">
              <a href="#">Derby Day delight: Yanited triumph against bitter rivals</a>
            </div>
            <div className="blog-article-body">
              <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim diam vulputate ut pharetra sit amet aliquam id diam. Amet risus nullam eget felis eget. Pulvinar sapien et ligula ullamcorper malesuada proin. Facilisis sed odio morbi quis commodo odio aenean. Nunc mattis enim ut tellus. Urna id volutpat lacus laoreet non curabitur gravida arcu. Faucibus interdum posuere lorem ipsum. Adipiscing enim eu turpis egestas pretium aenean. Aliquam id diam maecenas ultricies mi eget. Enim ut tellus elementum sagittis vitae et leo duis ut. Magna ac placerat vestibulum lectus mauris ultrices eros. Sem nulla pharetra diam sit amet nisl suscipit.

Adipiscing bibendum est ultricies integer. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. At erat pellentesque adipiscing commodo elit at. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare. Tellus in hac habitasse platea. Dignissim enim sit amet venenatis urna cursus eget. Integer enim neque volutpat ac. Varius sit amet mattis vulputate. Vulputate odio ut enim blandit volutpat maecenas volutpat. Sit amet volutpat consequat mauris. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Donec ac odio tempor orci dapibus ultrices in iaculis. Vitae et leo duis ut. Neque volutpat ac tincidunt vitae semper quis lectus.
              </p>
            </div>
            <div className="blog-article-footer">
              <span>
                Read More
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
            </div>
          </div>
        </div>
        <div className="content-blog-groups">
        </div>
      </div>
      <div className="content-blog-prev">
      </div>
    </div>
  )
}
export default ContentComponent
