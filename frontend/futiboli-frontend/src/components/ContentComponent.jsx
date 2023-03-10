import React, {} from 'react'
import { gsap  } from "gsap"
import '../index.css'
import  blogContent from '../assets/blogContent.jsx'
import mancwin from '../assets/manchesterwin.png'

function ContentComponent(){

  const categories = ['EPL', 'UCL', 'Other Leagues', 'La Liga', 'World Cups']
  const slicedContent = blogContent.slice(0, 4)
  const popularPost = blogContent.slice(0, 5)
  const blogContentCard = slicedContent.map((item)=>{
    return(
    <div className="blog-article">
      <div className="blog-article-image">
        <div className="image"><img src={ item.image } /></div>
          <div className="article-image-prev">
            <div className="prev-content">
              <ion-icon name="person-outline"></ion-icon>
              <span>{ item.author }</span>
            </div>
              <div className="prev-content">
                <ion-icon name="calendar-outline"></ion-icon>
                <span>January 19, 2019</span>
              </div>
                <div className="prev-content">
                  <span> { item.comments } Comments</span>
                </div>
          </div>
      </div>
        <div className="blog-article-heading">
          <a href="#">{ item.title }</a>
        </div>
          <div className="blog-article-body">
            <p>{ item.body }</p>
          </div>
            <div className="blog-article-footer">
              <span>
                Read More
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </span>
            </div>
      </div>

    )
  })

  const categoryCard = categories.map((item)=>{
    return(
      <div className="category-item">
        <span>{ item }</span>
        <span>(05)</span>
      </div>
    )
  })

  const popularPostCard = popularPost.map((item)=>{
    return(
      <div className="group-post-item">
        <div className="group-post-item-image">
          <div className="image">
            <img src={ item.image } />
          </div>
          <div className="group-post-image-prev">
            <div className="prev-date">
              <ion-icon name="calendar-outline"></ion-icon>
              <span>January 14, 2019</span>
            </div>
            <div className="prev-comments">
              <span>2 Comments</span>
            </div>
          </div>
        </div>
        <div className="group-post-item-title">
          <span>{ item.title }</span>
        </div>
      </div>
    )
  })
  const tagsContentCard = categories.map((item)=>{
    return (
      <div className="tag-item">{ item }</div>
    )
  })
  return (
    <div className="content-blog-container">
      <div className="content-blog">
        <div className="content-blog-articles">
          { blogContentCard }
        </div>
        <div className="content-blog-groups">
          <div className="group-category">
            <div className="group-title">
              <span>Category</span>
            </div>
            <div className="group-category-content">
              { categoryCard }
            </div>
          </div>

          <div className="group-posts">
            <div className="group-post-title">
              <span>Popular Post</span>
            </div>
            <div className="group-post-content">
              { popularPostCard }
            </div>
          </div>

          <div className="group-newsletter">
           <div className="newsletter-title">
             <span>Newsletter</span>
            </div>

            <div className="newsletter-content">
              <div className="newsletter-input">
                <input type="text" placeholder="Email" />
              </div>
              <div className="newsletter-button">
                <span>Subscribe</span>
              </div>
            </div>
          </div>

          <div className="group-tags">
           <div className="tags-title">
             <span>Popular Tags</span>
            </div>

            <div className="tags-content">
              { tagsContentCard }
            </div>

          </div>
        </div>
      </div>
      <div className="content-blog-prev">
      </div>
    </div>
  )
}
export default ContentComponent
