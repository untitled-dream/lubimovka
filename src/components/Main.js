import { useState } from 'react';

import { PlayContext, playInfo } from '../context/PlayContext';

import Review from './Review';
import Project from './Project';
import SocialShare from './SocialShare';
import PhotoGallery from './PhotoGallery';

import ImagePopup from './ImagePopup';

function Main() {
  const [isViewImagePopupOpen, setViewImagePopupOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhoto] = useState();

  function handlePhotoClick(photoIndex) {
    setSelectedPhoto(photoIndex);
    setViewImagePopupOpen(true);
  }

  function closeGalleryPopup(evt) {
    if (!evt.target.classList.contains('popup__gallery-image')) {
      setViewImagePopupOpen(false);
    }
  }

  return (
    <main className='content'>
      <PlayContext.Provider value={playInfo['s-uchilisha']}>
        <Project />
        <PhotoGallery onPhotoClick={handlePhotoClick} />
        <Review />
        <SocialShare />

        <ImagePopup
          isOpen={isViewImagePopupOpen}
          photoIndex={selectedPhotoIndex}
          onClose={closeGalleryPopup}
        />
      </PlayContext.Provider>
    </main>
  );
}

export default Main;
