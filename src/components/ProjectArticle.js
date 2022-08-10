import React, { useState } from 'react';
import Video from './Video';

const ProjectArticle = React.memo(({ title, paragraphs, authorInfo, links: { videoLink, readingLink } }) => {

  const [isPlay, setPlay] = useState(false)
  const [autoPlayLink, setAutoPlayLink] = useState(videoLink)

  const handlePlayVideo = () => {
    setPlay(true)
    setAutoPlayLink(videoLink + '?autoplay=1')
  }

  return (
    <div className='project-article'>
      {
        videoLink &&
        <div className='project-article__video-container'>
          <Video
            isPlay={isPlay}
            url={autoPlayLink}
            onClick={handlePlayVideo}
            imgClass={'project-article__video-cover'}
            btnClass={'project-article__video-button'}
          />
        </div>
      }
      <div className='project-article__text-block'>
        {
          paragraphs.map((paragraph, i) =>
            <p key={i} className='project-article__text'>{paragraph}</p>
          )
        }
      </div>
      <div className='project-card'>
        <div className='project-card__content'>
          <p className='project-card__name'>{title}</p>
          <div className='project-card__container'>
            <a
              className='project-card__watch link link_type_filling'
              href={readingLink}
              target='_blank'
              rel='noreferrer'
            >
              Смотреть читку
            </a>
            <a className='project-card__download link link_type_filling' href={`/lib/plays/s-uchilisha/s-uchilisha-ivanov.pdf`} download>Скачать пьесу</a>
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