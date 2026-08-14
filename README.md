# 🚀 Space Mission Control

A modern Space Mission Control Dashboard built with React, TypeScript, Tailwind CSS, and React Router.

The project provides a centralized interface for monitoring rocket launches, satellites, Earth observation, space news, and other space-related activities.

---

## 🌌 Project Overview

Space Mission Control is a space monitoring dashboard designed with a clean and responsive mission-control interface.

The application currently includes:

- 🚀 Upcoming Rocket Launches
- 🛰️ Satellite Monitoring
- 🌍 Earth Observation
- 🪐 Planet Information
- 📰 Space News
- 🤖 AI Assistant
- 📊 Mission Statistics
- ⚙️ Application Settings

The project is being developed step-by-step using reusable React components and Git-based version control.

---

## ✨ Features

### 📊 Mission Control Dashboard

The main dashboard provides an overview of space activities using reusable dashboard cards.

Current dashboard sections include:

- Upcoming Launches
- Active Satellites
- Earth Monitoring
- Space News
- AI Assistant
- System Health

### 🚀 Launch Tracking

The Launches page currently displays sample missions such as:

- Artemis II
- Starlink 58
- Gaganyaan

Each launch card displays:

- Mission name
- Rocket
- Launch date
- Mission status
- Rocket icon
- Dynamic status color

### 🎨 Dynamic Status Indicators

Launch statuses use different colors:

| Status | Color |
|---|---|
| Scheduled | 🔵 Blue |
| Ready | 🟢 Green |
| Preparing | 🟡 Yellow |

### 🔍 Launch Search

A search interface is available on the Launches page.

The search functionality will be connected to actual launch filtering in a future update.

### 📱 Responsive Design

The application is designed to work across:

- 🖥️ Desktop
- 💻 Laptop
- 📱 Mobile
- 📟 Tablet

The sidebar automatically hides on smaller screens to provide more space for the main content.

---

## 🛠️ Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

### Development Tools

- Git
- GitHub
- VS Code
- npm

---

## 📁 Project Structure

```text
Space-Mission-Control/
│
├── frontend/
│   │
│   ├── src/
│   │   │
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   └── PageHeader.tsx
│   │   │   │
│   │   │   ├── dashboard/
│   │   │   │   └── DashboardCard.tsx
│   │   │   │
│   │   │   ├── launches/
│   │   │   │   └── LaunchCard.tsx
│   │   │   │
│   │   │   └── layout/
│   │   │       ├── Navbar.tsx
│   │   │       └── Sidebar.tsx
│   │   │
│   │   ├── data/
│   │   │   └── launches.ts
│   │   │
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Launches.tsx
│   │   │   ├── Satellites.tsx
│   │   │   ├── Earth.tsx
│   │   │   ├── Planets.tsx
│   │   │   ├── News.tsx
│   │   │   ├── AI.tsx
│   │   │   └── Settings.tsx
│   │   │
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── package.json
│   └── vite.config.ts
│
├── README.md
└── .gitignore
```


👩‍💻 Author

Pragati Pandey

B.Tech Computer Science & Engineering — Data Science

GitHub:

https://github.com/pragatipandey-tech
