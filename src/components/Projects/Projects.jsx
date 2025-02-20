import uniqid from 'uniqid'
import { useState } from 'react'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

export default function Projects() {
  
  const [showAll, setShowAll] = useState(false)
  const [buttonWord, setButtonWord] = useState("Show More")
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Web Development', 'Machine Learning', 'Operating Systems'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Projects</h2>

      <div className='projects__categories'>
        {showAll && categories.map(category => (
          <button
            key={uniqid()}
            className={`btn btn--outline projects__category-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className='projects__grid'>
        {showAll ? (
          filteredProjects.map(project => (
            <ProjectContainer key={uniqid()} project={project} />
          ))
        ) : (
          filteredProjects.slice(0, 3).map(project => (
            <ProjectContainer key={uniqid()} project={project} />
          ))
        )}
      </div>
  
      <button
        className='btn btn--outline projects__btn'
        type='button'
        onClick={() => {
          if (showAll) setSelectedCategory('All')
          setShowAll(!showAll)
          setButtonWord(showAll ? "Show More" : "Show Less")
        }}
      >
        {buttonWord}
      </button>
    </section>
  )
}

