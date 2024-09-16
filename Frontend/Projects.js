import React from 'react';
import { useTranslation } from 'react-i18next';

const Projects = ({ projects }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('projects')}</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <strong>{project.name}</strong>
            </a>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
