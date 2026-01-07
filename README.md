# Travel Journal

A lightweight React + Vite travel journal that lists destinations from a local data file using reusable Header and Entry components.

##  Features
- Component-based React app built with Vite
- Data-driven entries using `data.js`
- Reusable `Header` and `Entry` components
- Minimal CSS for clean layout

##  Getting Started

1. Install dependencies
```
npm install
```

2. Start development server
```
npm run dev
```

3. Build for production
```
npm run build
```

4. Preview production build
```
npm run preview
```

## Project structure
- index.html — app HTML entry
- src/main.jsx / index.jsx — React entry
- App.jsx — main app component
- component/Header.jsx — header component
- component/Entry.jsx — entry component
- data.js — sample travel entries
- ap.css, src/App.css — styles
- package.json, vite.config.js — project config

## How to use
- Edit `data.js` to add or modify travel entries.
- Components map data entries to UI; modify components in `component/` to change layout.

## 📌 Notes

This project is part of my React learning journey and demonstrates basic component structure, props, and data mapping.
