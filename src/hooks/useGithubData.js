import { useState, useEffect } from 'react'
import { fetchUser, fetchRepos } from '../utils/githubApi.js'
import { calculateDevScore, getDevLevel, estimateCommits } from '../utils/scoreCalculator.js'

export const useGithubData = (username, isSearching) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    // Check isSearching first
    if (!isSearching || !username || username.trim().length < 3) {
      setData(null)
      setError('')
      setLoading(false)
      return
    }

    const loadData = async () => {
      setLoading(true)
      setError('')
      try {
        const [user, repos] = await Promise.all([
          fetchUser(username),
          fetchRepos(username)
        ])

        const estimatedCommits = estimateCommits(repos)
        const score = calculateDevScore(repos, 0, estimatedCommits)
        const level = getDevLevel(score)

        const languages = {}
        // Aggregate top languages (simple count, full impl later)
        repos.slice(0, 10).forEach(repo => {
          if (repo.language && repo.language !== null) {
            languages[repo.language] = (languages[repo.language] || 0) + 1
          }
        })

        setData({
          user,
          repos: repos.slice(0, 10), // Top 10 recent
          score,
          level,
          languages,
          totalStars: repos.reduce((sum, r) => sum + r.stargazers_count, 0),
          estimatedCommits
        })
      } catch (err) {
        setError(err.response?.data?.message || err.message)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [username, isSearching])

  return { data, loading, error }
}

