import React from 'react';

import { PlayContext, playInfo } from '../context/PlayContext';

import Review from './Review';
import Project from './Project';
import SocialShare from './SocialShare';
import PhotoGallery from './PhotoGallery';

function Main({ project }) {
  return (
    <main className='content'>
      <PlayContext.Provider value={playInfo[project]}>
        <Project />
        {/*<section className="gallery">
              <h2 className="gallery__title">Заголовок&nbsp;блока с&nbsp;фотографиями</h2>
              <ul className="gallery__grid list">
                <li className="gallery__item"><img className="gallery__image" src="<%=require('./images/show-photo-1.jpg')%>" alt="Сцена из спектакля" /></li>
                <li className="gallery__item"><img className="gallery__image" src="<%=require('./images/show-photo-2.jpg')%>" alt="актриса на сцене" /></li>
                <li className="gallery__item"><img className="gallery__image" src="<%=require('./images/show-photo-3.jpg')%>" alt="Актер на репетиции" /></li>
                <li className="gallery__item"><img className="gallery__image" src="<%=require('./images/show-photo-4.jpg')%>" alt="Актеры по ролям читают пьесу" /></li>
                <li className="gallery__item"><img className="gallery__image" src="<%=require('./images/show-photo-5.jpg')%>" alt="Зрители в зале" /></li>
                <li className="gallery__item"><img className="gallery__image" src="<%=require('./images/show-photo-6.jpg')%>" alt="Молодая актриса" /></li>
                <li className="gallery__item"><img className="gallery__image" src="<%=require('./images/show-photo-7.jpg')%>" alt="Артисты читают пьесу" /></li>
                <li className="gallery__item"><img className="gallery__image" src="<%=require('./images/show-photo-8.jpg')%>" alt="Актриса на репетиции" /></li>
              </ul>
            </section>*/}
        <Review />
        <SocialShare />
      </PlayContext.Provider>
    </main>
  );
}

export default Main;
