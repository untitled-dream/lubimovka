import React from 'react';

import { PlayContext } from '../context/PlayContext';

import ProjectHeading from './ProjectHeading';
import ProjectAnnotation from './ProjectAnnotation';
import ProjectProperties from './ProjectProperties';
import ProjectArticle from './ProjectArticle';

const Project = () => {

  const {
    id,
    description: {
      title,
      summary,
      eventDate,
      annotation,
      image: {
        cover
      }
    },
    links,
    properties,
    article,
    authorInfo
  } = React.useContext(PlayContext);

  return (
    <section className='project'>
      <ProjectHeading
        title={title}
        ticketLink={links.ticketLink}
        eventDate={eventDate}
        summary={summary}
      />
      <ProjectAnnotation
        id={id}
        annotation={annotation}
        cover={cover} />
      <ProjectProperties properties={properties} />
      <ProjectArticle
        title={title}
        paragraphs={article}
        authorInfo={authorInfo}
        links={links}
      />
    </section>
  );
}

export default Project;