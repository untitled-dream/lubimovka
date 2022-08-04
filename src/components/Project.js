import React from 'react';

import { PlayContext } from '../context/PlayContext';

import ProjectHeading from './ProjectHeading';
import ProjectAnnotation from './ProjectAnnotation';
import ProjectProperties from './ProjectProperties';
import ProjectArticle from './ProjectArticle';

const Project = () => {
  
  const { id, description, links, properties, ...props } = React.useContext(PlayContext);

  return (
    <section className='project'>
      <ProjectHeading
        playInfo={description}
        ticketLink={links.ticketLink}
      />
      <ProjectAnnotation
        id={id}
        annotation={description.annotation}
        cover={description.image.cover}/>
      <ProjectProperties properties={properties} />
      <ProjectArticle
        id={id}
        name={description.name}
        paragraphs={props.article}
        authorInfo={props.authorInfo}
        links={links}
      />
    </section>
  );
}

export default Project;