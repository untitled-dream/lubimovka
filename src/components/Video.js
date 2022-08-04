import React from 'react'

const Video = ({ url, isPlay }) => {
  return (
    <>
      {
        isPlay &&
        <iframe
          className='video'
          src={url}
          title='YouTube video player'
          frameBorder={0}
          allow='autoplay;'
          allowFullScreen
        />
      }
    </>
  )
}

export default Video