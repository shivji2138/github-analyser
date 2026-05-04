export default function TopReposCard({ topRepos }) {
  if (!topRepos.length) return null

  return (
    <div className="card">
      <div className="section-header">
        <span className="section-title">Top Repositories</span>
        <span className="section-line" />
      </div>

      <div className="repo-list">
        {topRepos.map((repo, i) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="repo-item"
          >
            <div className="repo-left">
              <span className="repo-rank">#{i + 1}</span>
              <span className="repo-name">{repo.name}</span>
              {repo.language && (
                <span className="repo-lang-badge">{repo.language}</span>
              )}
            </div>
            <div className="repo-stars">
              <span className="star-icon">★</span>
              <span>{repo.stargazers_count.toLocaleString()}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
