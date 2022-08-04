import React from 'react';

const ProjectAnnotation = React.memo(({id, cover, annotation}) => {
  return (
    <div className='project-annotation'>
      <img
        src={require(`../images/plays/${id}/${cover}`)}
        alt='Сцена из спектакля С_училища'
        className='project-annotation__img'
      />
      <p className='project-annotation__text'>{annotation}</p>
    </div>
  );
})

export default ProjectAnnotation;
