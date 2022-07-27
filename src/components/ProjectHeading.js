import React from 'react';

function ProjectHeading({ playInfo, ticketLink }) {
  return (
    <div className='project-heading'>
      <h1 className='project-heading__title'>{playInfo.name}</h1>
      <p className='project-heading__subtitle'>{playInfo.shortDescription}</p>
      {playInfo.eventDate.date && <div className='tickets'>
        <p className='tickets__date'>{playInfo.eventDate.date + ' ' + playInfo.eventDate.time}</p>
        <a href={ticketLink} className='tickets__link link link_fill'>Билеты</a>
      </div>}
    </div>
  );
}

export default ProjectHeading;
