import uniqid from 'uniqid';
import { educations } from '../../portfolio';
import EducationContainer from '../EducationContainer/EducationContainer';
import './Educations.css';

export default function Educations() {
  return (
    <section id='educations' className='section educations'>
      <h2 className='section__title'>Educations</h2>

      <div className='educations__list'>
        {educations.map((education) => (
          <EducationContainer key={uniqid()} education={education} />
        ))}
      </div>
    </section>
  );
}

