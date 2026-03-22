import { useState, useEffect } from 'react'

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('darkMode') === 'true'
    setDarkMode(saved)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark')
    }
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  return (
    <button 
      className="theme-toggle"
      onClick={() => setDarkMode(!darkMode)}
      title={darkMode ? 'Light mode' : 'Dark mode'}
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  )
}

export default ThemeToggle

