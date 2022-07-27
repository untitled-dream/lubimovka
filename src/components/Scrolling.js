import React, { useState } from 'react'

function Scrolling() {


  const [isScroll, setScrollButton] = useState(false);

  const [scrollProgress, setScrollProgress] = useState();

  function scrollToTop() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      setScrollButton(true);
    } else {
      setScrollButton(false);
    }
    setScrollProgress(((document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.offsetHeight - window.innerHeight)) * 100)
  }

  window.onscroll = () => scrollToTop();

  return (
    <button className={`scroll-to-up ${isScroll && `scroll-to-up_active`}`} style={{ "--progress": `${scrollProgress}%` }}  id="scroll-to-up" title="Наверх" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' }, { once: true })} />
  )
}

export default Scrolling