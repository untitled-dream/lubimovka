import React from 'react'

import { PlayContext } from '../context/PlayContext';

function SocialShare() {

  const { id, description } = React.useContext(PlayContext);
  const location = window.location.href

  return (
    <section className="share">
      <picture>
        <source srcset={require(`../images/plays/${id}/${description.image.banner.small}`)} media="(max-width: 720px)" />
        <img className='share__banner' src={require(`../images/plays/${id}/${description.image.banner.main}`)} alt='Пьеса С_училища. Баннер' />
      </picture>
      <div className="share__wrapper">
        <h2 className="share__heading">
          <span>Рассказать</span>
          <span>о&nbsp;спектакле в&nbsp;соцсетях</span>
        </h2>
        <div className="share__social-list">
          <a className="share__social-link link link_type_filling" href="#" target='_blank' rel="noopener noreferrer">fb</a>
          <a className="share__social-link link link_type_filling" href={`https://vk.com/share.php?url=${location}`} target='_blank' rel="noopener noreferrer">vk</a>
          <a className="share__social-link link link_type_filling" href="#" target='_blank' rel="noopener noreferrer">twtr</a>
        </div>
      </div>
    </section>
  )
}

export default SocialShare