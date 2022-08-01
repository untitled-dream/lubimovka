import { useContext } from 'react'
import { PlayContext } from '../context/PlayContext';

function PhotoGallery({ onPhotoClick }) {

  const { photoGallery } = useContext(PlayContext);

  const handleCardClick = (evt) => {
    onPhotoClick(evt.target.src);
  }

  return (
    <section className="gallery">
      <h2 className="gallery__title">Заголовок&nbsp;блока с&nbsp;фотографиями</h2>
      <ul className="gallery__grid list">
        {
          photoGallery &&
          photoGallery.map((item, i) => (
            <li className="gallery__item" key={i}>
              <img
                className="gallery__image"
                onClick={handleCardClick}
                src={require(`../images/${item}`)}
                alt="С_училища"
              />
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default PhotoGallery

/* 

<li className="gallery__item"><img className="gallery__image" src={require('../images/s-uchilisha-photo-1.jpg')} alt="Сцена из спектакля" /></li>
<li className="gallery__item"><img className="gallery__image" src={require('../images/s-uchilisha-photo-2.jpg')} alt="актриса на сцене" /></li>
<li className="gallery__item"><img className="gallery__image" src={require('../images/s-uchilisha-photo-3.jpg')} alt="Актер на репетиции" /></li>
<li className="gallery__item"><img className="gallery__image" src={require('../images/s-uchilisha-photo-4.jpg')} alt="Актеры по ролям читают пьесу" /></li>
<li className="gallery__item"><img className="gallery__image" src={require('../images/s-uchilisha-photo-5.jpg')} alt="Зрители в зале" /></li>
<li className="gallery__item"><img className="gallery__image" src={require('../images/s-uchilisha-photo-6.jpg')} alt="Молодая актриса" /></li>
<li className="gallery__item"><img className="gallery__image" src={require('../images/s-uchilisha-photo-7.jpg')} alt="Артисты читают пьесу" /></li>
<li className="gallery__item"><img className="gallery__image" src={require('../images/s-uchilisha-photo-8.jpg')} alt="Актриса на репетиции" /></li>

*/