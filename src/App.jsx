import React from 'react'
import StudentCard from './components/StudentCard'
import { activeStudents, alumni } from './data/students'

function mostCommonSkill(allStudents) {
  const freq = {}
  allStudents.forEach(s => s.skills.forEach(skill => {
    const k = skill.toLowerCase()
    freq[k] = (freq[k] || 0) + 1
  }))
  let best = null
  let bestCount = 0
  for (const k in freq) {
    if (freq[k] > bestCount) {
      best = k
      bestCount = freq[k]
    }
  }
  return best ? best.charAt(0).toUpperCase() + best.slice(1) : '—'
}

export default function App() {
  const allStudents = [...activeStudents, ...alumni]
  const total = allStudents.length
  const activeCount = activeStudents.length
  const alumniCount = alumni.length
  const topSkill = mostCommonSkill(allStudents)

  return (
    <div className="container">
      <header className="header">
        <h1>Student Directory 2025</h1>
        <p className="subtitle">Full Stack Development Batch</p>
      </header>

      <section className="stats">
        <h2>Directory Statistics</h2>
        <p>Total students: <strong>{total}</strong></p>
        <p>Active: {activeCount} &nbsp; | &nbsp; Alumni: {alumniCount}</p>
        <p>Most common skill: <strong>{topSkill}</strong></p>
      </section>

      <main>
        <section className="group">
          <h2>Active Students</h2>
          <div className="grid">
            {activeStudents.map(student => (
              <StudentCard key={student.rollNumber} {...student} />
            ))}
          </div>
        </section>

        <section className="group">
          <h2>Alumni</h2>
          <div className="grid">
            {alumni.map(student => (
              <StudentCard key={student.rollNumber} {...student} />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Institute of Web Dev — Full Stack Course</p>
        <p>Contact: directory@example.com</p>
        <p>© 2025 Student Portal</p>
      </footer>
    </div>
  )
}
