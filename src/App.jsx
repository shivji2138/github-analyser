import { useState, useEffect } from 'react'
import { useGitHub } from './useGitHub'
import ProfileCard    from './components/ProfileCard'
import MetricsRow     from './components/MetricsRow'
import LanguagesCard  from './components/LanguagesCard'
import TopReposCard   from './components/TopReposCard'

export default function App() {
  const [input,  setInput]  = useState('')
  const [dark,   setDark]   = useState(true)

  const {
    profile, topRepos, languagesSorted, totalLangUse,
    mostUsedLang, developerScore, loading, error, fetchUser,
  } = useGitHub()

  /* sync dark / light class on body */
  useEffect(() => {
    document.body.classList.toggle('light', !dark)
  }, [dark])

  const handleSearch = (e) => {
    e.preventDefault()
    fetchUser(input.trim())
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') handleSearch(e)
  }

  return (
    <div className="app-wrapper">
      {/* ── Header ── */}
      <header className="app-header">
        <div className="logo">
          <span className="logo-dot" />
          GitScope
        </div>
        <button
          className="theme-toggle"
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle theme"
        >
          {dark ? '☀ Light' : '🌙 Dark'}
        </button>
      </header>

      {/* ── Search ── */}
      <section className="search-section">
        <span className="search-label">// enter github username</span>
        <div className="search-row">
          <input
            className="search-input"
            type="text"
            placeholder="e.g. torvalds"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            aria-label="GitHub username"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
          <button
            className="search-btn"
            onClick={handleSearch}
            disabled={loading || !input.trim()}
          >
            {loading ? 'Scanning…' : 'Analyze →'}
          </button>
        </div>
      </section>

      {/* ── Error ── */}
      {error && (
        <div className="error-box" role="alert">
          <span>✗</span>
          <span>{error}</span>
        </div>
      )}

      {/* ── Loading ── */}
      {loading && (
        <div className="spinner-wrap">
          <div className="spinner" />
          <span className="spinner-label">fetching profile data…</span>
        </div>
      )}

      {/* ── Results ── */}
      {profile && !loading && (
        <main className="results">
          <ProfileCard profile={profile} />
          <MetricsRow
            mostUsedLang={mostUsedLang}
            developerScore={developerScore}
          />
          <LanguagesCard
            languagesSorted={languagesSorted}
            totalLangUse={totalLangUse}
          />
          <TopReposCard topRepos={topRepos} />
        </main>
      )}
    </div>
  )
}
