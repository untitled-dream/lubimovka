import React, { useState } from 'react';
import Video from './Video';

const ProjectArticle = React.memo(({ name, paragraphs, authorInfo, links }) => {

  const [isPlay, setPlay] = useState(false)
  
  const handleVideoPlay = () => {
    setPlay(true);
  }

  return (
    <div className='project-article'>
      <div className='project-article__video-container'>
        {
          !isPlay &&
          <>
            <img className='project-article__video-cover' src={require('../images/video-preview.png')} alt='Видео' />
            <button className='project-article__video-button' onClick={handleVideoPlay} type='button' name='play-video'></button>
          </>
        }
        <Video url={links.videoLink} isPlay={isPlay} />
      </div>
      <div className='project-article__text-block'>
        {paragraphs.map((paragraph, ind) => <p key={ind} className='project-article__text'>{paragraph}</p>)}
      </div>
      <div className='project-card'>
        <div className='project-card__content'>
          <p className='project-card__name'>{name}</p>
          <div className='project-card__container'>
            <a
              className='project-card__watch link link_type_filling'
              href={links.readingLink}
              target='_blank'
              rel='noreferrer'
            >
              Смотреть читку
            </a>
            <a
              className='project-card__download link link_type_filling'
              href='./lib/s-uchilisha-ivanov.pdf'
              download
            >
              Скачать пьесу
            </a>
          </div>
        </div>
        <p className='project-card__author-name'>{authorInfo.author}</p>
        <p className='project-card__info'>{authorInfo.city}</p>
        <p className='project-card__info'>{authorInfo.creationYear}</p>
      </div>
    </div>
  );
})

export default ProjectArticle;
