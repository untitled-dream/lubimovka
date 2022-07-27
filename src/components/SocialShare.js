import React from 'react'
import { PlayContext } from '../context/PlayContext';

function SocialShare() {
  const {description} = React.useContext(PlayContext);
  
  return (
    <section className="share">
      <img className="share__banner" src={`images/${description.image.banner}`} alt='Пьеса С_училища. Баннер' />
      <div className="share__wrapper">
        <h2 className="share__heading">Рассказать о&nbsp;спектакле&nbsp;в&nbsp;соцсетях</h2>
        <div className="share__social-list">
          <a className="share__social-link link link_fill" href="#" rel="noopener noreferrer">fb</a>
          <a className="share__social-link link link_fill" href="#" rel="noopener noreferrer">vk</a>
          <a className="share__social-link link link_fill" href="#" rel="noopener noreferrer">twtr</a>
        </div>
      </div>
    </section>
  )
}

export default SocialShare