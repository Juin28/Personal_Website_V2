import uniqid from 'uniqid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import './ProjectContainer.css';

export default function ProjectContainer({ project }) {
  return (
    <div className='project'>
      <div className='project__header'>
        <h3 className='project__name'>{project.name}</h3>
      </div>
      
      <p className='project__description'>{project.description}</p>

      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className='project__links'>
        {project.sourceCode && (
          <a
            href={project.sourceCode}
            aria-label='source code'
            className='link link--icon'
          >
            <GitHubIcon />
          </a>
        )}

        {project.livePreview && (
          <a
            href={project.livePreview}
            aria-label='live preview'
            className='link link--icon'
          >
            <LaunchIcon />
          </a>
        )}
      </div>
    </div>
  );
}