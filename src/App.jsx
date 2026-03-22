import { useState } from 'react'
import { useGithubData } from './hooks/useGithubData.js'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const { data, loading, error } = useGithubData(username)

  return (
    <div className="app">
      <header className="header">
        <h1>🚀 GitHub Dev Analyzer</h1>
        <p>Analyze developer profiles & get insights</p>
      </header>

      <main className="main">
        <form onSubmit={(e) => { e.preventDefault(); if (username) setUsername(username.trim()) }} className="search-form">
          <input
            type="text"
            placeholder="Enter GitHub username (e.g., octocat)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="search-input"
          />
          <button type="button" onClick={() => setUsername(username.trim())} disabled={!username || loading} className="search-btn">
            {loading ? 'Analyzing...' : 'Analyze'}
          </button>
        </form>

        {error && <div className="error">{error}</div>}

        {data && (
          <div className="dashboard">
            <div className="profile-card">
              <img src={data.user.avatar_url} alt={data.user.login} className="avatar" />
              <h2>{data.user.name || data.user.login}</h2>
              <p>{data.user.bio || 'No bio available'}</p>
              <div className="stats">
                <span>Repos: {data.repos.length}</span>
                <span>Followers: {data.user.followers}</span>
                <span>Stars: {data.totalStars.toLocaleString()}</span>
                <span>Level: <strong style={{color: '#4ecdc4'}}>{data.level}</strong> (Score: {data.score.toLocaleString()})</span>
              </div>
            </div>

            <div className="repos-preview">
              <h3>Recent Repos ({data.repos.length})</h3>
              <ul>
                {data.repos.map((repo) => (
                  <li key={repo.id}>
                    <strong>{repo.name}</strong> - Stars: {repo.stargazers_count} | Lang: {repo.language || 'N/A'} | Updated: {new Date(repo.updated_at).toLocaleDateString()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App

