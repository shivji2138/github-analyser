export default function ProfileCard({ profile }) {
  const fmt = (n) =>
    n >= 1000 ? (n / 1000).toFixed(1) + 'k' : String(n)

  return (
    <div className="card profile-card">
      <div className="avatar-wrap">
        <img
          src={profile.avatar_url}
          alt={profile.login}
          className="avatar"
        />
        <span className="avatar-ring" />
      </div>

      <div className="profile-info">
        <h2 className="profile-name">
          {profile.name || profile.login}
        </h2>
        <p className="profile-login">@{profile.login}</p>

        {profile.bio && (
          <p className="profile-bio">{profile.bio}</p>
        )}

        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-val">{fmt(profile.followers)}</span>
            <span className="stat-key">Followers</span>
          </div>
          <div className="stat-item">
            <span className="stat-val">{fmt(profile.following)}</span>
            <span className="stat-key">Following</span>
          </div>
          <div className="stat-item">
            <span className="stat-val">{profile.public_repos}</span>
            <span className="stat-key">Repos</span>
          </div>
          {profile.location && (
            <div className="stat-item">
              <span className="stat-val" style={{ fontSize: '0.85rem' }}>
                {profile.location}
              </span>
              <span className="stat-key">Location</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
