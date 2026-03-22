# 🚀 GitHub Dev Analyzer

[![Vercel](https://thereverie.s3.amazonaws.com/vercel.svg)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmatafeii%2Fgithub-analyzer)

A modern React dashboard to analyze GitHub developer profiles. Enter a username to see profile stats, repo activity, top languages, dev score & level.

**New Features:**

- Epic 4K code background
- Clickable repo links to GitHub
- Enhanced fonts (Poppins + JetBrains Mono)
- Theme toggle removed for cleaner UI

## ✨ Features

- **Profile Analysis** - Avatar, bio, location, website, Twitter, stats (repos, gists, stars, followers, following)
- **Developer Score** - Algorithm (repos ×2 + stars ×3 + estimated commits)
- **Dev Level** - Junior / Strong Junior / Middle / Senior
- **Repo List** - Расширенный список (stars, forks, watchers, issues, size, last updated, visible/private)
- **Charts** - Кольцевая диаграмма Top Languages + столбчатая активность (stars/forks)
- **Full Stats** - общее количество языков и доли с процентами
- **Search UX** - минимум 3 символа + 500ms debounce
- **Immersive 4K Code Background**
- **Clickable Repos** - direct GitHub links
- **Premium Typography** - Poppins + JetBrains Mono
- **Responsive Dashboard** - адаптивный дизайн (desktop/mobile)
- **Rate-limit safe** - GitHub REST API (axios)

## 🎮 Live Demo

**🚀 Live on Vercel:**

- https://github-analyzer-hdce2uw0g-matafeiis-projects.vercel.app
- https://github-analyzer-silk-pi.vercel.app

Also available on GitHub Pages: https://matafeii.github.io/github-analyzer/

Try: `torvalds`, `octocat`, `vercel`, `javascript`, ваш ник! (например `matafeii`)

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

## 🌐 Vercel Deployment (done)

Проект уже развернут и привязан к репозиторию:

- GitHub repository: https://github.com/matafeii/github-analyzer
- Vercel project: https://vercel.com/matafeiis-projects/github-analyzer

Проверки выполнены:

1. Connect Git Repository – ✅ (через `vercel` CLI проект связан)
2. Add Custom Domain – в Vercel можно добавить собственный домен в настройках проекта (например `github-analyzer.yourdomain.com`) и привязать DNS
3. Preview Deployment – ✅ PR/Preview автоматически создаются при push (Vercel автоматически)
4. Enable Web Analytics – в Vercel Dashboard → Analytics → включить (по умолчанию доступно)
5. Enable Speed Insights – на странице проекта Vercel есть вкладка `Insights` / `Core Web Vitals`

**Active Production URLs:**

- https://github-analyzer-hdce2uw0g-matafeiis-projects.vercel.app
- https://github-analyzer-silk-pi.vercel.app

Добавлена демка для Verified URL, готово к использованию.

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
