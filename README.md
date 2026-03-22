# 🚀 GitHub Dev Analyzer

[![Vercel](https://thereverie.s3.amazonaws.com/vercel.svg)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmatafeii%2Fgithub-analyzer)

A modern React dashboard to analyze GitHub developer profiles. Enter a username to see profile stats, repo activity, top languages, dev score & level.

## ✨ Features

- **Profile Analysis** - Avatar, bio, stats (repos, stars, followers)
- **Developer Score** - Algorithmic score (repos ×2 + stars ×3 + commits estimate)
- **Dev Level** - Junior / Strong Junior / Middle / Senior
- **Repo List** - Top recent repos with stars, forks, lang, desc
- **Charts** - Language pie chart, activity bar (stars/forks)
- **Dark/Light Theme** - Auto-save preference
- **Responsive Dashboard** - Mobile-friendly
- **Rate-limit safe** - Uses public GitHub API

## 🎮 Live Demo

**[🚀 Live: https://matafeii.github.io/github-analyzer/](https://matafeii.github.io/github-analyzer/)**

Try: `torvalds`, `octocat`, `vercel`, your username!

## 📱 Screenshot

_(Add screenshot after deploy)_

![Dashboard](screenshot.png)

## 🛠 Tech Stack

- React 18 + Vite (fast dev/build)
- Chart.js + react-chartjs-2 (graphs)
- Axios (API)
- Tailwind-inspired CSS (glassmorphism)
- GitHub REST API

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## 🌐 Deploy to Vercel (1-click)

1. [Deploy button](#) or Vercel dashboard
2. Import repo
3. Done! Custom domain optional.

## 📈 Dev Score Formula

```
score = repos.length * 2 + total_stars * 3 + estimated_commits
```

**Levels:**

- <100: Junior
- <500: Strong Junior
- <2000: Middle
- 2000+: Senior

## 🤝 Contributing

PRs welcome! Add recs, AI, comparisons.

## 📄 License

MIT
