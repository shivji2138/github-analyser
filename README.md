# GitScope — GitHub Profile Analyzer

A sleek, responsive GitHub Profile Analyzer built with **React + Vite + Axios**.

## ✨ Features

| Feature | Details |
|---|---|
| Profile Display | Avatar, name, bio, followers, following, repos |
| Most Used Language | Scans all repos and ranks by frequency |
| Developer Score | `(followers × 2) + (public_repos × 3)` with progress bar |
| Top 5 Repositories | Sorted by ⭐ stargazers count, with direct links |
| Language Breakdown | Visual bar chart of top 6 languages |
| Dark / Light Mode | Toggle with body-class theming |
| Loading Spinner | Shown while API calls are in flight |
| Error Handling | 404 (user not found) + rate-limit messages |
| Responsive | Mobile-first grid layout |

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

## 🏗 Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── App.jsx                  # Root component + layout
├── main.jsx                 # React entry point
├── index.css                # Global styles & CSS variables
├── useGitHub.js             # Custom hook (API + data processing)
└── components/
    ├── ProfileCard.jsx      # Avatar + bio + stats
    ├── MetricsRow.jsx       # Score card + top language card
    ├── LanguagesCard.jsx    # Language frequency bars
    └── TopReposCard.jsx     # Top 5 repos list
```

## 🎨 Design System

- **Palette**: Dark `#07080f` bg · Teal `#00d4aa` primary · Pink `#ff2d78` accent
- **Typography**: Syne (display) + JetBrains Mono (data)
- **Theming**: CSS custom properties, toggled via `.light` class on `<body>`

## ⚠️ API Rate Limits

GitHub's public API allows **60 requests/hour** for unauthenticated clients.
