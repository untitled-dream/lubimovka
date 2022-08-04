import React from 'react'

import MediaReview from './MediaReview';
import ViewerReview from './ViewerReview';

import { PlayContext } from '../context/PlayContext';

function Review() {

  const { reviews } = React.useContext(PlayContext);

  return (
    <>
      {
        reviews.media.length &&
        <MediaReview reviews={reviews.media}/>
      }
      {
        reviews.people.length &&
        <ViewerReview reviews={reviews.people}/>
      }
    </>
  )
}

export default Review