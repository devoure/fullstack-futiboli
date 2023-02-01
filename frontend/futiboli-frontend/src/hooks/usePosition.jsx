import React, {useState, useEffect} from 'react'
export default function usePosition(ref){
  const [prevElement, setPrevElement] = useState(null)
  const [nextElement, setNextElement] = useState(null)
  function getPrevElement(list){
    const sibling = list[0].previousElementSibling
    if (sibling instanceof HTMLElement){
      return sibling
    } else{
      return null
    } 
  }
  function getNextElement(list){
    const sibling = list[list.length - 1].nextElementSibling
    if (sibling instanceof HTMLElement){
      return sibling
    } else{
      return null
    } 
  }

  useEffect(() => {
    const element = ref.current

    const update = () => {
      const rect = element.getBoundingClientRect()
      const visibleElements = Array.from(element.children).filter((child) => {
        const childRect = child.getBoundingClientRect()
        return rect.left <= childRect.left && rect.right >= childRect.right
      })
      if (visibleElements.length > 0){
        setPrevElement(getPrevElement(visibleElements))
        setNextElement(getNextElement(visibleElements))
      }
    }
    update()
    element.addEventListener('scroll', update, {passive:true})
    return () => {
      element.removeEventListener('scroll', update, {passive:true})
    }
  }, [ref])

  return {
    hasItemOnLeft: prevElement !== null,
    hasItemOnRight: nextElement !== null,
  }
}

