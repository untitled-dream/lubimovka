import React from 'react';

const ProjectHeading = React.memo(({ title, summary, eventDate, ticketLink }) => {
  return (
    <div className='project-heading'>
      <h1 className='project-heading__title'>{title}</h1>
      <p className='project-heading__subtitle'>{summary}</p>
      {
        eventDate.date &&
        <div className='tickets'>
          <p className='tickets__date'>{eventDate.date + ' ' + eventDate.time}</p>
          <a href={ticketLink} className='tickets__link link link_type_filling'>Билеты</a>
        </div>
      }
    </div>
  );
})

export default ProjectHeading;