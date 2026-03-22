# GitHub Dev Analyzer - Development TODO

## Day 1: UI + Search + Basic Data Fetch

- [x] Setup Vite + React project
- [x] Install dependencies: axios, chart.js, react-chartjs-2
- [x] Create basic UI structure (App layout: header, search input, profile section)
- [x] Implement username search form
- [x] Fetch GitHub user data (GET /users/{username})
- [x] Display profile card (avatar, name, bio, repos count, etc.)

## Day 2: Graphs + Analysis

- [x] Fetch repos data (GET /users/{username}/repos)
- [x] Fetch languages from repos
- [x] Calculate developer score (repos _ 2 + total_stars _ 3 + estimated_commits)
- [x] Display repo list (name, stars, forks, language, last updated)
- [x] Add charts: language pie, activity bar (commits/stars over repos)
- [x] Show developer level based on score (Junior, Strong Junior, Middle)

## Day 3: Polish + Deploy

- [x] Improve UI: dashboard cards, responsive design, loading states, error handling
- [x] Add nice-to-haves if time: dark/light theme toggle
- [x] Write comprehensive README.md (features, screenshots, demo link)
- [x] Test locally
- [x] Deploy to Vercel ✅ https://github-analyzer-matafeii.vercel.app
- [x] Update TODO with completion marks

## Future Enhancements (Post-MVP)

- [ ] Compare two users
- [ ] Repo filters (stars, language)
- [ ] Personalized recommendations (e.g., "Add READMEs", "Increase activity")
- [ ] AI analysis (via external API)

Progress: Ready to start after structure approval.
