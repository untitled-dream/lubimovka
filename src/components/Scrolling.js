import React, { useState } from 'react'

function Scrolling() {

  const buttonScroll = document.querySelector('.scroll-to-up');
  const [isScroll, setScrollButton] = useState(false);

  function scrollToTop() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      setScrollButton(true);
    } else {
      setScrollButton(false);
    }
    setScrollProgress(document.body.scrollTop || document.documentElement.scrollTop);
  }

  function setScrollProgress(data) {
    let scrollProgress = (data / (document.documentElement.offsetHeight - window.innerHeight)) * 100;
    buttonScroll.style.setProperty('--progress', `${scrollProgress}%`);
  }

  window.onscroll = () => scrollToTop();

  return (
    <button className={`scroll-to-up ${isScroll && `scroll-to-up_active`}`} id="scroll-to-up" title="Наверх" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' }, { once: true })}/>
  )
}

export default Scrolling