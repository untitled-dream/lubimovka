import React from 'react';

function ProjectArticle({ name, paragraphs, authorInfo, links }) {
  return (
    <div className='project-article'>
      <div className='project-article__video-container'>
        <div className='project-article__video-cover' />
        <iframe
          className='project-article__video'
          src={`${links.videoLink}?enablejsapi=1`}
          title='YouTube video player'
          frameBorder={0}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
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
}

export default ProjectArticle;
