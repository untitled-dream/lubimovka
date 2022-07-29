import React from 'react';

function ProjectProperties({ properties }) {
  const hours = Math.floor(properties.duration / 60);
  const minutes = properties.duration % 60;

  return (
    <div className='project-properties'>
      <h2 className='project-properties__duration'>{`${hours} ч. ${(minutes === 0) ? '00' : minutes} мин. | ${properties.ageLimit}`}</h2>
      <ul className='authors'>
        {properties.dramaturge && (
          <li className='authors__character'>
            <p className='authors__profession'>Драматург</p>
            <p className='authors__people'>{properties.dramaturge}</p>
          </li>
        )}
        {properties.translator && (
          <li className='authors__character'>
            <p className='authors__profession'>Перевод</p>
            <p className='authors__people'>{properties.translator}</p>
          </li>
        )}
        {properties.textAdaptation && (
          <li className='authors__character'>
            <p className='authors__profession'>Адаптация текста</p>
            <p className='authors__people'>{properties.textAdaptation}</p>
          </li>
        )}
        {properties.director && (
          <li className='authors__character'>
            <p className='authors__profession'>Режиссёр</p>
            <p className='authors__people'>{properties.director}</p>
          </li>
        )}
        {properties.actors.length && (
          <li className='authors__character'>
            <p className='authors__profession'>Актёры</p>
            <p className='authors__people'>{properties.actors.join(', ')}</p>
          </li>
        )}
      </ul>
    </div>
  );
}

export default ProjectProperties;
