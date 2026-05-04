/* Distinctive color palette for language bars */
const COLORS = [
  '#00d4aa', '#ff2d78', '#f5c518',
  '#7c6cf8', '#ff7c43', '#00b4d8',
]

export default function LanguagesCard({ languagesSorted, totalLangUse }) {
  if (!languagesSorted.length) return null

  return (
    <div className="card">
      <div className="section-header">
        <span className="section-title">Language Breakdown</span>
        <span className="section-line" />
      </div>

      <div className="lang-list">
        {languagesSorted.map(([lang, count], i) => {
          const pct = totalLangUse ? ((count / totalLangUse) * 100).toFixed(1) : 0
          return (
            <div key={lang} className="lang-item">
              <span className="lang-name">{lang}</span>
              <div className="lang-bar-track">
                <div
                  className="lang-bar-fill"
                  style={{
                    width: `${pct}%`,
                    background: COLORS[i % COLORS.length],
                    boxShadow: `0 0 6px ${COLORS[i % COLORS.length]}88`,
                  }}
                />
              </div>
              <span className="lang-pct">{pct}%</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
