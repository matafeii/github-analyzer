import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProfileCard from './components/ProfileCard.jsx'
import RepoList from './components/RepoList.jsx'
import LanguageChart from './components/LanguageChart.jsx'
import ActivityChart from './components/ActivityChart.jsx'
import { useGithubData } from './hooks/useGithubData.js'
import { useSearchHistory } from './hooks/useSearchHistory.js'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const { data, loading, error } = useGithubData(username, isSearching)
  const { history, addToHistory } = useSearchHistory()

  const handleSearch = (searchUsername = username) => {
    if (!searchUsername.trim() || searchUsername.trim().length < 3) return

    setUsername(searchUsername)
    setIsSearching(true)
    addToHistory(searchUsername)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch()
  }

  useEffect(() => {
    if (!loading && isSearching) {
      setIsSearching(false)
    }
  }, [loading, isSearching])

  if (loading) return (
    <div className="app">
      <header className="header">
        <h1>🚀 GitHub Dev Analyzer</h1>
      </header>
      <main className="main">
        <div className="loading">
          <div className="spinner"></div>
          <p>Analyzing profile... 🔍</p>
        </div>
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
        <form className="search-form" onSubmit={handleSubmit}>
          <div className="search-container">
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
              disabled={!username.trim() || loading || isSearching}
              className="search-btn"
            >
              {isSearching ? (
                <>
                  <div className="spinner small"></div>
                  Analyzing...
                </>
              ) : (
                'Analyze'
              )}
            </button>
          </div>

          {history.length > 0 && (
            <div className="search-history">
              <p className="history-label">Recent searches:</p>
              <div className="history-list">
                {history.map((item, index) => (
                  <button
                    key={index}
                    type="button"
                    className="history-item"
                    onClick={() => handleSearch(item)}
                    disabled={loading}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </form>

        {username.trim().length > 0 && username.trim().length < 3 && (
          <motion.div
            className="hint"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            📝 Введите минимум 3 символа для поиска
          </motion.div>
        )}

        <AnimatePresence>
          {error && (
            <motion.div
              className="error not-found"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
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
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {data && (
            <motion.div
              className="dashboard"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
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

              <RepoList repos={data.repos} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App

