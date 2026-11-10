# 🚀 Space Mission Control

A modern, space-themed dashboard built with React, TypeScript, and Tailwind CSS to explore space missions, rocket launches, satellites, planets, Earth observation, and space news.

Space Mission Control is designed as a centralized interface for exploring space-related information through a clean, responsive, dark-themed dashboard.

## ✨ Features

### 🛰️ Mission Control Dashboard
- Dark, space-inspired user interface.
- Dashboard cards for upcoming launches, active satellites, Earth monitoring, space news, AI assistance, and system health.
- Mission Control Overview section with high-level statistics.
- Reusable dashboard components for a consistent design.

### 🚀 Launch Tracking
- Dedicated launches page.
- Reusable launch cards with mission information.
- Launch status indicators.
- Launch countdown section.
- Launch site information.
- Search interface for exploring launch entries.

### 🌍 Space Exploration Pages
The application includes dedicated pages for:

- **Dashboard** — Mission Control overview.
- **Launches** — Rocket launch information.
- **Satellites** — Satellite-related information.
- **Earth** — Earth observation.
- **Planets** — Planetary exploration.
- **News** — Space news interface.
- **AI Assistant** — Space-related AI interface.
- **Settings** — Application settings interface.

### 🎨 User Interface
- Dark navy and blue color palette.
- Reusable React components.
- Sidebar and top navigation.
- Responsive dashboard layout.
- Hover effects and status indicators.
- Tailwind CSS styling.

> **Note:** Some dashboard statistics and mission information are currently sample or static data. Live API integration and the functionality of individual page features depend on their implementation.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | User interface |
| TypeScript | Type-safe application development |
| Vite | Development server and production build |
| Tailwind CSS | Styling and responsive layouts |
| React Router | Client-side page navigation |
| npm | Package management |

## 📁 Project Structure

```text
Space-Mission-Control/
├── assets/
├── backend/
├── docs/
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   ├── dashboard/
│   │   │   ├── launches/
│   │   │   └── layout/
│   │   ├── data/
│   │   │   └── launches.ts
│   │   ├── pages/
│   │   │   ├── AI.tsx
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Earth.tsx
│   │   │   ├── Launches.tsx
│   │   │   ├── News.tsx
│   │   │   ├── Planets.tsx
│   │   │   ├── Satellites.tsx
│   │   │   └── Settings.tsx
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── main.tsx
│   │   └── routes.tsx
│   ├── package.json
│   └── package-lock.json
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

*The structure above reflects the project layout identified during development; individual files may change as the project evolves.*

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/pragatipandey-tech/Space-Mission-Control.git
```

### 2. Navigate to the project

```bash
cd Space-Mission-Control
```

### 3. Install frontend dependencies

```bash
cd frontend
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal. Vite commonly uses:

```text
http://localhost:5173/
```

### 5. Build for production

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

## 🧑‍💻 Development Workflow

The frontend provides these npm scripts:

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Runs TypeScript checks and creates a production build |
| `npm run lint` | Runs ESLint |
| `npm run preview` | Previews the production build |

Run these commands from the `frontend` directory.

## 🗺️ Roadmap

Planned improvements for future development include:

- [ ] Integrate live rocket launch data from a suitable API.
- [ ] Implement functional launch search and status filters.
- [ ] Add real-time launch countdowns.
- [ ] Display detailed mission information.
- [ ] Integrate satellite tracking data.
- [ ] Add interactive planetary and Earth observation features.
- [ ] Connect the space news page to a data source.
- [ ] Develop useful AI-assisted space information features.
- [ ] Improve loading, empty, and error states.
- [ ] Add automated testing and improve accessibility.

## 🎯 Project Goals

Space Mission Control aims to evolve into a feature-rich space exploration dashboard that combines modern frontend development, reusable UI components, API integration, data visualization, and interactive space information.

The project also serves as a practical learning experience in React, TypeScript, routing, Git, and building portfolio-ready applications.

## 🤝 Contributing

Suggestions and improvements are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test your changes.
5. Submit a pull request.

## 👩‍🚀 Author

**Pragati Pandey**

GitHub: [@pragatipandey-tech](https://github.com/pragatipandey-tech) 

---

*Built with curiosity, code, and a passion for space exploration. 🌌*
