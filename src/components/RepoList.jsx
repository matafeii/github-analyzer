import React from 'react'

const RepoList = ({ repos }) => (
  <div className="repos-section">
    <h3>📂 Recent Repositories ({repos.length})</h3>
    <div className="repos-grid">
      {repos.map((repo) => (
        <div key={repo.id} className="repo-card">
          <h4>{repo.name}</h4>
          <div className="repo-meta">
            <span className="stars">⭐ {repo.stargazers_count}</span>
            <span className="forks">🍴 {repo.forks_count}</span>
            <span className="lang">{repo.language || 'Other'}</span>
          </div>
          <p className="repo-desc">{repo.description || 'No description'}</p>
          <span className="updated">Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
        </div>
      ))}
    </div>
  </div>
)

export default RepoList

