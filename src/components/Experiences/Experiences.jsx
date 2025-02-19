import React, { useState } from 'react';
import { experiences } from '../../portfolio';
import './Experiences.css';

export default function Experience() {
    const [activeId, setActiveId] = useState(experiences[0].id);

    return (
        <section id='experiences' className='section experiences'>
            <h2 className='section__title'>Experiences</h2>

            <div className="experience-container">
                <div className="companies-list" role="tablist" aria-label="Experience tabs">
                    {experiences.map(exp => (
                        <button
                            key={exp.id}
                            className={`company-item ${activeId === exp.id ? 'active' : ''}`}
                            onClick={() => setActiveId(exp.id)}
                            role="tab"
                            aria-selected={activeId === exp.id}
                            aria-controls={`panel-${exp.id}`}
                            tabIndex={activeId === exp.id ? 0 : -1}
                            type="button"
                        >
                            {exp.company}
                        </button>
                    ))}
                </div>

                <div className="experience-details">
                    {experiences.map(exp => (
                        exp.id === activeId && (
                            <div
                                key={exp.id}
                                className="details-content"
                                id={`panel-${exp.id}`}
                                role="tabpanel"
                                aria-labelledby={`tab-${exp.id}`}
                            >
                                <h2>{exp.role}</h2>
                                <p className="date">{exp.date}</p>
                                <ul>
                                    {exp.details.map((detail) => (
                                        <li key={`${exp.id}-detail`}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        )
                    ))}
                </div>
            </div>

        </section>
    )
};