const MAX_SCORE = 5000 // cap for progress bar

export default function MetricsRow({ mostUsedLang, developerScore }) {
  const pct = Math.min((developerScore / MAX_SCORE) * 100, 100).toFixed(1)

  return (
    <div className="metrics-row">
      {/* Developer Score */}
      <div className="metric-card teal">
        <p className="metric-tag">⚡ Developer Score</p>
        <p className="metric-value">{developerScore.toLocaleString()}</p>
        <p className="metric-sub">followers × 2 + repos × 3</p>

        <div className="score-bar-wrap">
          <div className="score-bar-track">
            <div
              className="score-bar-fill"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="score-bar-labels">
            <span className="score-bar-label">0</span>
            <span className="score-bar-label">{pct}%</span>
            <span className="score-bar-label">{MAX_SCORE.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Most Used Language */}
      <div className="metric-card pink">
        <p className="metric-tag">💻 Top Language</p>
        <p className="metric-value" style={{ fontSize: '1.35rem' }}>
          {mostUsedLang}
        </p>
        <p className="metric-sub">most used across repos</p>
      </div>
    </div>
  )
}
