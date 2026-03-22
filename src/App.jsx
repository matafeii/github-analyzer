import { useState } from 'react'
import ProfileCard from './components/ProfileCard.jsx'
import RepoList from './components/RepoList.jsx'
import LanguageChart from './components/LanguageChart.jsx'
import ActivityChart from './components/ActivityChart.jsx'
import { useGithubData } from './hooks/useGithubData.js'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const { data, loading, error } = useGithubData(username, isSearching)

  if (loading) return (
    <div className="app">
      <header className="header">
        <h1>🚀 GitHub Dev Analyzer</h1>
      </header>
      <main className="main">
        <div className="loading">Analyzing profile... 🔍</div>
      </main>
    </div>
  )

  return (
    <div className="app">
      <header className="header">
        <h1>🚀 GitHub Dev Analyzer</h1>
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
            type="button"
            disabled={!username.trim() || loading || isSearching} 
            className="search-btn"
            onClick={() => setIsSearching(true)}
          >
            {isSearching ? '🔍 Анализ...' : 'Analyze'}
          </button>
        </form>

        {username.trim().length > 0 && username.trim().length < 3 && (
          <div className="hint">
            📝 Введите минимум 3 символа для поиска
          </div>
        )}

        {error && (
          <div className="error not-found">
            <h3>👤 Пользователь не найден</h3>
            <p>Проверьте правильность написания никнейма.</p>
            <button 
              className="search-btn"
              onClick={() => {
                setUsername('')
                setIsSearching(false)
              }}
            >
              🔍 Новый поиск
            </button>
          </div>
        )}

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
              
              <div className="chart-container language-chart">
                <LanguageChart languages={data.languages} />
              </div>
            </div>

            <div className="chart-container activity-chart">
              <ActivityChart repos={data.repos} />
            </div>
            
            <RepoList repos={data.repos} username={username} />
          </div>
        )}
      </main>
    </div>
  )
}

export default App

