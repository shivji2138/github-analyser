import { useState, useCallback } from 'react'
import axios from 'axios'

const BASE = 'https://api.github.com'

export function useGitHub() {
  const [profile, setProfile]   = useState(null)
  const [repos,   setRepos]     = useState([])
  const [loading, setLoading]   = useState(false)
  const [error,   setError]     = useState(null)

  const fetchUser = useCallback(async (username) => {
    if (!username.trim()) return
    setLoading(true)
    setError(null)
    setProfile(null)
    setRepos([])

    try {
      const [userRes, reposRes] = await Promise.all([
        axios.get(`${BASE}/users/${username}`),
        axios.get(`${BASE}/users/${username}/repos?per_page=100`),
      ])
      setProfile(userRes.data)
      setRepos(reposRes.data)
    } catch (err) {
      if (err.response?.status === 404) {
        setError(`User "${username}" not found on GitHub.`)
      } else if (err.response?.status === 403) {
        setError('GitHub API rate limit reached. Please try again later.')
      } else {
        setError('Failed to fetch data. Check your connection.')
      }
    } finally {
      setLoading(false)
    }
  }, [])

  /* ── Derived data ── */
  const topRepos = [...repos]
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 5)

  const languageCounts = repos.reduce((acc, repo) => {
    if (repo.language) acc[repo.language] = (acc[repo.language] || 0) + 1
    return acc
  }, {})

  const languagesSorted = Object.entries(languageCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)

  const totalLangUse = languagesSorted.reduce((s, [, c]) => s + c, 0)

  const mostUsedLang = languagesSorted[0]?.[0] ?? '—'

  const developerScore = profile
    ? profile.followers * 2 + profile.public_repos * 3
    : 0

  return {
    profile,
    repos,
    topRepos,
    languagesSorted,
    totalLangUse,
    mostUsedLang,
    developerScore,
    loading,
    error,
    fetchUser,
  }
}
