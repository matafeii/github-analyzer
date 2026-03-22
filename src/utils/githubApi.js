import axios from 'axios'

const API_BASE = '/api/github'

export const fetchUser = async (username) => {
  const response = await axios.get(`${API_BASE}/users/${username}`)
  return response.data
}

export const fetchRepos = async (username, per_page = 100) => {
  const response = await axios.get(`${API_BASE}/users/${username}/repos?per_page=${per_page}&sort=updated&direction=desc`)
  return response.data
}

export const fetchLanguages = async (repo_owner, repo_name) => {
  try {
    const response = await axios.get(`${API_BASE}/repos/${repo_owner}/${repo_name}/languages`)
    return response.data
  } catch {
    return {}
  }
}

