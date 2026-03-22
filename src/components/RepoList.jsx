import React from 'react'

const RepoList = ({ repos, username }) => {
  const languageColors = {
    'JavaScript': '#f1e05a',
    'TypeScript': '#3178c6',
    'Python': '#3572A5',
    'Java': '#b07219',
    'Go': '#00ADD8',
    'Rust': '#ce422b',
    'C++': '#f34b7d',
    'C': '#555555',
    'C#': '#239120',
    'PHP': '#777bb4',
    'Ruby': '#cc342d',
    'Swift': '#fa7343',
    'Kotlin': '#7f52ff',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Vue': '#2c3e50',
  };

  const getLanguageColor = (lang) => languageColors[lang] || '#d4af37';

  return (
    <div className="repos-section">
      <h3>📂 Top Repositories ({repos.length})</h3>
      <div className="repos-list">
        {repos.map((repo) => {
          const daysAgo = Math.floor((new Date() - new Date(repo.updated_at)) / (1000 * 60 * 60 * 24));
          const langColor = getLanguageColor(repo.language);

          return (
            <div key={repo.id} className="repo-card-detailed">
              <div className="repo-header-section">
                <div className="repo-title-group">
                  <a 
                    href={`https://github.com/${username}/${repo.name}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="repo-link"
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    <h4>{repo.name}</h4>
                  </a>
                  {repo.language && (
                    <span className="lang-badge" style={{ backgroundColor: langColor }}>
                      ● {repo.language}
                    </span>
                  )}
                </div>
                <div className="repo-visibility">
                  {repo.private ? '🔒 Private' : '🌐 Public'}
                </div>
              </div>

              {repo.description && (
                <p className="repo-desc">{repo.description}</p>
              )}

              <div className="repo-stats">
                <div className="stat">
                  <span className="stat-label">⭐ Stars</span>
                  <span className="stat-value">{repo.stargazers_count.toLocaleString()}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">🍴 Forks</span>
                  <span className="stat-value">{repo.forks_count.toLocaleString()}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">👁️ Watchers</span>
                  <span className="stat-value">{repo.watchers_count.toLocaleString()}</span>
                </div>
                <div className="stat">
                  <span className="stat-label">🔀 Issues</span>
                  <span className="stat-value">{repo.open_issues_count.toLocaleString()}</span>
                </div>
              </div>

              <div className="repo-footer">
                <span className="updated">
                  {daysAgo === 0 ? 'Updated today' : `Updated ${daysAgo} day${daysAgo !== 1 ? 's' : ''} ago`}
                </span>
                {repo.size > 0 && (
                  <span className="size">📦 {(repo.size / 1024).toFixed(1)} MB</span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RepoList

