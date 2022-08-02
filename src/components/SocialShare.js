import React from 'react'
import { PlayContext } from '../context/PlayContext';

function SocialShare() {

  const {description} = React.useContext(PlayContext);
  
  return (
    <section className="share">
      <img className="share__banner" src={require(`../images/${description.image.banner}`)} alt='Пьеса С_училища. Баннер' />
      <div className="share__wrapper">
        <h2 className="share__heading">
          <span>Рассказать</span>
          <span>о&nbsp;спектакле в&nbsp;соцсетях</span>
        </h2>
        <div className="share__social-list">
          <a className="share__social-link link link_type_filling" href="#" target='_blank' rel="noopener noreferrer">fb</a>
          <a className="share__social-link link link_type_filling" href="#" target='_blank' rel="noopener noreferrer">vk</a>
          <a className="share__social-link link link_type_filling" href="#" target='_blank' rel="noopener noreferrer">twtr</a>
        </div>
      </div>
    </section>
  )
}

export default SocialShare