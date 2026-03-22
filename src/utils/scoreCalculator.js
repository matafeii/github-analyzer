export const calculateDevScore = (repos, userStars = 0, estimatedCommits = 0) => {
  const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0)
  const score = repos.length * 2 + totalStars * 3 + estimatedCommits
  return score
}

export const getDevLevel = (score) => {
  if (score < 100) return 'Junior'
  if (score < 500) return 'Strong Junior'
  if (score < 2000) return 'Middle'
  return 'Senior'
}

export const estimateCommits = (repos) => {
  // Simple estimate: assume avg 50 commits per active repo (last year updated)
  const recentRepos = repos.filter(repo => 
    new Date(repo.updated_at) > new Date(Date.now() - 365 * 24 * 60 * 60 * 1000)
  )
  return recentRepos.length * 50
}

