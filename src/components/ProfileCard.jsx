import React from 'react'

const ProfileCard = ({ user, score, level, totalStars, reposCount }) => (
  <div className="profile-card">
    <img src={user.avatar_url} alt={user.login} className="avatar" />
    <h2>{user.name || user.login}</h2>
    <p>{user.bio || 'No bio available'}</p>
    <p className="location">{user.location || 'Location not specified'}</p>
    <div className="stats">
      <span>
        <strong>{reposCount}</strong> Repos
      </span>
      <span>
        <strong>{totalStars.toLocaleString()}</strong> Stars
      </span>
      <span>
        <strong>{user.followers.toLocaleString()}</strong> Followers
      </span>
    </div>
    <div className="score-badge">
      Level: <span className="level">{level}</span> (Score: {score.toLocaleString()})
    </div>
  </div>
)

export default ProfileCard

