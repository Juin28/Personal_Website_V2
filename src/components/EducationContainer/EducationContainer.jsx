import './EducationContainer.css'

export default function EducationContainer({ education }) {
    return (
        <div className="education">
            <div className="education-logo">
                <img src={education.school_logo} alt="School Logo" />
            </div>
            <div className="education-info">
                <h3>{education.title}</h3>
                <h5>{education.school}</h5>
                <p>{education.date}</p>
                <h5>{education.result}</h5>
            </div>
        </div>
    )
}
