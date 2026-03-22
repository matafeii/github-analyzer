import { useState } from 'react'
import ThemeToggle from './components/ThemeToggle.jsx'
import ProfileCard from './components/ProfileCard.jsx'
import RepoList from './components/RepoList.jsx'
import LanguageChart from './components/LanguageChart.jsx'
import ActivityChart from './components/ActivityChart.jsx'
import { useGithubData } from './hooks/useGithubData.js'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const { data, loading, error } = useGithubData(username)

  if (loading) return (
    <div className="app">
      <header className="header">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
          <h1>🚀 GitHub Dev Analyzer</h1>
          <ThemeToggle />
        </div>
      </header>
      <main className="main">
        <div className="loading">Analyzing profile... 🔍</div>
      </main>
    </div>
  )

  return (
    <div className="app">
      <header className="header">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem'}}>
          <h1>🚀 GitHub Dev Analyzer</h1>
          <ThemeToggle />
        </div>
        <p>Analyze developer profiles & get insights</p>
      </header>

      <main className="main">
        <form className="search-form" onSubmit={(e) => { e.preventDefault(); }}>
          <input
            type="text"
            placeholder="Enter GitHub username (e.g., octocat)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="search-input"
            disabled={loading}
          />
          <button 
            type="submit" 
            disabled={!username.trim() || loading} 
            className="search-btn"
          >
            Analyze
          </button>
        </form>

        {error && <div className="error">{error}</div>}

        {data && (
          <div className="dashboard">
            <div className="grid">
              <ProfileCard 
                user={data.user} 
                score={data.score} 
                level={data.level}
                totalStars={data.totalStars}
                reposCount={data.repos.length}
              />
              
              <LanguageChart languages={data.languages} />
              
              <ActivityChart repos={data.repos} />
              
              <RepoList repos={data.repos} />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App

