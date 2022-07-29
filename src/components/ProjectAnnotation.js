import React from 'react';

function ProjectAnnotation({cover, annotation}) {
  return (
    <div className='project-annotation'>
      <img
        src={require(`../images/${cover}`)}
        alt='Сцена из спектакля С_училища'
        className='project-annotation__img'
      />
      <p className='project-annotation__text'>{annotation}</p>
    </div>
  );
}

export default ProjectAnnotation;
