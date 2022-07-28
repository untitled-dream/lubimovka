import React from 'react';

import { PlayContext } from '../context/PlayContext';

import ProjectHeading from './ProjectHeading';
import ProjectAnnotation from './ProjectAnnotation';
import ProjectProperties from './ProjectProperties';
import ProjectArticle from './ProjectArticle';

function Project() {
  const playInfo = React.useContext(PlayContext);
  
  return (
    <section className='project'>
      <ProjectHeading
        playInfo={playInfo.description}
        ticketLink={playInfo.links.ticketLink}
      />
      <ProjectAnnotation
        annotation={playInfo.description.annotation}
        cover={playInfo.description.image.cover}/>
      <ProjectProperties properties={playInfo.properties} />
      <ProjectArticle
        name={playInfo.description.name}
        paragraphs={playInfo.article}
        authorInfo={playInfo.authorInfo}
        links={playInfo.links}
      />
    </section>
  );
}

export default Project;