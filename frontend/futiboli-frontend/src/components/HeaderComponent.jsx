import React, {} from 'react'
import '../index.css'
import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

function HeaderComponent(){
  const [navBarMode, setNavBarMode] = React.useState(false)
  function toggleNavList(){
    setNavBarMode((prev)=>{
      return(!prev)
    })
  }

  const scrollTracker = React.useRef()
  const scrollTrackingTimeline = new ScrollTimeline({
    //source: element,
    //orientation: "block",
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
  })
  React.useEffect(()=>{
    const element = scrollTracker.current
    element.animate({
    transform: ["scaleX(0)", "scaleX(1)"]
  },
    {
      duration:1,
      timeline:scrollTrackingTimeline,
    }
    )

  }, [scrollTracker])
  return (
    <div className={navBarMode ? "blog-header" : "blog-header blog-header-off"}>
    <div className="scroll-tracker" ref={scrollTracker}></div>
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
