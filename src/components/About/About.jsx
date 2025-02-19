import { useEffect, useState } from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { about } from '../../portfolio';
import './About.css';

export default function About() {
  const { name, description, resume, social } = about;
  const roles = ["Software Engineer.", "Full Stack Web Developer.", "Machine Learning Engineer."];
  const [currentRole, setCurrentRole] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [timer, setTimer] = useState(200);

  useEffect(() => {
    const handleTyping = () => {
      const fullRole = roles[index];
      const updatedRole = isDeleting
        ? fullRole.substring(0, currentRole.length - 1)
        : fullRole.substring(0, currentRole.length + 1);

      setCurrentRole(updatedRole);

      if (isDeleting) {
        setTimer(100); // Speed up deletion
        if (updatedRole === '') {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      } else {
        setTimer(200); // Normal typing speed
        if (updatedRole === fullRole) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1000); // Pause before starting to delete
        }
      }
    };

    const typingInterval = setInterval(handleTyping, timer);
    return () => clearInterval(typingInterval);
  }, [currentRole, isDeleting, index, roles, timer]);

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      <h2 className='about__role'>A {currentRole}</h2>

      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
}