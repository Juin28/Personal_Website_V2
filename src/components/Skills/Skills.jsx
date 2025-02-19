import uniqid from 'uniqid';
import { skills } from '../../portfolio';
import './Skills.css';

export default function Skills() {
  if (!skills || 
      (!skills.programmingLanguages.length && 
      !skills.developerTools.length && 
      !skills.technicalSkills.length) ) 
    return null;

  return (
    <section className='section skills' id='skills'>
      <h2 className='section__title'>Skills</h2>

      {skills.programmingLanguages.length && <div className='skills__category'>
        <h3 className='section_subtitle'>Programming Languages</h3>
        <ul className='skills__list'>
          {skills.programmingLanguages.map(skill => (
            <li key={uniqid()} className='skills__list-item btn btn--plain'>
              {skill}
            </li>
          ))}
        </ul>
      </div>}

      {skills.developerTools.length && <div className='skills__category'>
        <h3 className='section_subtitle'>Libraries / Framework / Developer Tools</h3>
        <ul className='skills__list'>
          {skills.developerTools.map(skill => (
            <li key={uniqid()} className='skills__list-item btn btn--plain'>
              {skill}
            </li>
          ))}
        </ul>
      </div>}

      {skills.technicalSkills.length && <div className='skills__category'>
        <h3 className='section_subtitle'>Technical Skills</h3>
        <ul className='skills__list'>
          {skills.technicalSkills.map(skill => (
            <li key={uniqid()} className='skills__list-item btn btn--plain'>
              {skill}
            </li>
          ))}
        </ul>
      </div>}
    </section>
  );
}