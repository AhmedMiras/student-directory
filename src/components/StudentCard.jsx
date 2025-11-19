import React from 'react'
import './studentcard.css'

export default function StudentCard({ name, rollNumber, course, email, skills, isActive }) {
  return (
    <article className="student-card">
      <div className="card-header">
        <h3>{name}</h3>
        <span className={`status ${isActive ? 'active' : 'inactive'}`}>
          {isActive ? 'Active' : 'Inactive'}
        </span>
      </div>

      <p className="meta"><strong>Roll:</strong> {rollNumber} &nbsp; | &nbsp; <strong>Course:</strong> {course}</p>
      <p className="email">{email}</p>

      <div className="skills">
        {skills.map((skill, idx) => (
          <span className="skill" key={`${rollNumber}-skill-${idx}`}>
            {skill}
          </span>
        ))}
      </div>
    </article>
  )
}
