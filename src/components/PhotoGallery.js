import { useContext } from 'react'
import { PlayContext } from '../context/PlayContext';

function PhotoGallery({ onPhotoClick }) {

  const { photoGallery } = useContext(PlayContext);

  const handlePhotoClick = (i) => {
    onPhotoClick(i);
  }

  return (
    <section className="gallery">
      <h2 className="gallery__title">Заголовок&nbsp;блока с&nbsp;фотографиями</h2>
      <ul className="gallery__grid list">
        {
          photoGallery &&
          photoGallery.map((item, i) => (
            <li className="gallery__item" key={i} onClick={() => handlePhotoClick(i)}>
              <img
                className="gallery__image"
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