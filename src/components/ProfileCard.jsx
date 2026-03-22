import React from 'react'

const ProfileCard = ({ user, score, level, totalStars, reposCount }) => {
  const createdYear = new Date(user.created_at).getFullYear();
  const yearsActive = new Date().getFullYear() - createdYear;

  return (
    <div className="profile-card">
      <div className="profile-header">
        <img src={user.avatar_url} alt={user.login} className="avatar" />
        <div className="profile-badges">
          {user.type === 'Organization' && <span className="badge org">👥 Organization</span>}
          {user.hireable && <span className="badge hireable">💼 Hireable</span>}
        </div>
      </div>

      <h2>{user.name || user.login}</h2>
      <p className="username">@{user.login}</p>
      <p className="bio">{user.bio || 'No bio available'}</p>

      {user.location && <p className="location">📍 {user.location}</p>}
      {user.blog && (
        <p className="website"><a href={user.blog} target="_blank" rel="noopener noreferrer">🔗 {user.blog}</a></p>
      )}
      {user.twitter_username && (
        <p className="twitter">𝕏 @{user.twitter_username}</p>
      )}

      <div className="stats">
        <span>
          <strong>{reposCount}</strong><br />Public Repos
        </span>
        <span>
          <strong>{user.public_gists}</strong><br />Gists
        </span>
        <span>
          <strong>{totalStars.toLocaleString()}</strong><br />Total Stars
        </span>
        <span>
          <strong>{user.followers.toLocaleString()}</strong><br />Followers
        </span>
      </div>

      <div className="additional-info">
        <div className="info-item">
          <span className="label">Following</span>
          <span className="value">{user.following.toLocaleString()}</span>
        </div>
        <div className="info-item">
          <span className="label">Active Since</span>
          <span className="value">{yearsActive} {yearsActive === 1 ? 'year' : 'years'}</span>
        </div>
        <div className="info-item">
          <span className="label">Joined</span>
          <span className="value">{new Date(user.created_at).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="score-badge">
        <div className="level-info">
          <span className="label">Dev Level</span>
          <span className="level">{level}</span>
        </div>
        <div className="score-info">
          <span className="label">Score</span>
          <span className="score">{score.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard

