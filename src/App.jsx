import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [profile, setProfile] = useState(null)

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!username) return

    setLoading(true)
    setError('')
    try {
      // Placeholder - API impl later
      const response = await fetch(`https://api.github.com/users/${username}`)
      if (!response.ok) throw new Error('User not found')
      const data = await response.json()
      setProfile(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <header className="header">
        <h1>🚀 GitHub Dev Analyzer</h1>
        <p>Analyze developer profiles & get insights</p>
      </header>

      <main className="main">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Enter GitHub username (e.g., octocat)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="search-input"
          />
          <button type="submit" disabled={loading} className="search-btn">
            {loading ? 'Analyzing...' : 'Analyze'}
          </button>
        </form>

        {error && <div className="error">{error}</div>}

        {profile && (
          <div className="profile-card">
            <img src={profile.avatar_url} alt={profile.login} className="avatar" />
            <h2>{profile.name || profile.login}</h2>
            <p>{profile.bio}</p>
            <div className="stats">
              <span>Repos: {profile.public_repos}</span>
              <span>Followers: {profile.followers}</span>
              <span>Following: {profile.following}</span>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App

