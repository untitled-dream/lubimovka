import React from 'react'
import { isMobile } from "react-device-detect";

import { PlayContext } from '../context/PlayContext';

const Video = ({ url, isPlay, onClick, imgClass, btnClass }) => {
  
  const { id } = React.useContext(PlayContext);

  if (!isPlay && imgClass && !isMobile) {
    return (
      <>
        <img className={imgClass} src={require(`../images/plays/${id}/video-preview.png`)} alt='Видео' />
        <button className={btnClass} onClick={onClick} type='button' name='play-video'></button>
      </>
    )
  } else {
    return (
      <iframe
        className='video'
        src={url}
        title='Video player'
        frameBorder={0}
        allow='autoplay'
        allowFullScreen
      />
    )
  }

}

export default Video