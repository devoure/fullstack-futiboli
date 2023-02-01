import React, {} from 'react'
import '../index.css'

function HeaderComponent(){
  const [navBarMode, setNavBarMode] = React.useState(false)
  function toggleNavList(){
    setNavBarMode((prev)=>{
      return(!prev)
    })
  }
  return (
    <div className={navBarMode ? "blog-header" : "blog-header blog-header-off"}>
    <div className="blog-header-nav">
      <span>futiboli.</span>
      <div className="toggle-nav-list" onClick={toggleNavList}>
        {navBarMode ?
        <div className="arrow-icon"><ion-icon name="arrow-up-outline"></ion-icon></div>
        :
        <div className="arrow-icon"><ion-icon name="arrow-down-outline"></ion-icon></div>
        }
        <div className="list-icon"><ion-icon name="list-outline"></ion-icon></div>
      </div>
    </div>

      <div className="blog-header-nav-list">
      <div className="blog-header-nav-list-item">
        <span>Main</span>
      </div>
      <div className="blog-header-nav-list-item">
        <span>Timeline</span>
      </div>
      <div className="blog-header-nav-list-item">
        <span>Blogs</span>
      </div>
      <div className="blog-header-nav-list-item">
        <span>Categories</span>
      </div>
      <div className="blog-header-nav-list-item">
        <span>Footer</span>
      </div>
    </div>

      <div className="blog-header-nav-social">
      <div className="blog-header-nav-social-item">
        <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
      </div>

      <div className="blog-header-nav-social-item">
        <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
      </div>

      <div className="blog-header-nav-social-item">
        <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
      </div>

      <div className="blog-header-nav-social-item">
        <a href="#"><ion-icon name="logo-youtube"></ion-icon></a>
      </div>

    </div>
  </div>
  )
}
export default HeaderComponent
