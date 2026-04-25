# Twitter (X) Clone - Advanced React Architecture

A production-grade, high-fidelity replica of the Twitter (X) platform. This project serves as a comprehensive showcase of modern frontend development practices, emphasizing robust state management, performant rendering, and pixel-perfect UI/UX consistency.

## 🏗 System Architecture & Design Patterns

This application is built with scalability and maintainability in mind, utilizing:
- **Component-Driven Architecture**: Modular, highly reusable React components following atomic design principles.
- **Client-Side Routing**: Handled via `react-router-dom` for seamless SPA navigation.
- **Mock Service Worker / REST API**: Interfacing with `json-server` to simulate real-world asynchronous data fetching, latency, and CRUD operations.
- **Responsive & Fluid Layouts**: CSS-in-JS and Vanilla CSS strategies for a responsive, adaptive layout that mirrors the native X experience across mobile, tablet, and desktop breakpoints.

## ✨ Core Capabilities

- **Interactive Feed**: Real-time optimistic UI updates for likes, retweets, and new posts.
- **Dynamic Routing**: Dedicated views for Home, Explore, Notifications, Messages, and User Profiles.
- **Custom "Vibe" System**: An innovative categorization matrix for classifying tweet intents and emotional subtext, localized for Indian demographics.
- **Premium Dark Mode**: Meticulously crafted color palette matching Twitter's 'Dim' and 'Lights Out' themes.
- **Form Handling & Validation**: Robust handling for tweet composition and user interactions.

## 🛠 Technology Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | React (18.x) | UI Library |
| **Build Tool** | Vite | Fast HMR & Bundling |
| **Routing** | React Router DOM (6.x) | Navigation |
| **Styling** | Vanilla CSS3 | Custom Theming & Layouts |
| **Icons** | Lucide React | Scalable Vector Graphics |
| **Backend Mocking** | JSON Server | REST API Simulation |

## 🚀 Quick Start Guide

### Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed on your local environment.

### 1. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/arjavj1105/twitter-clone.git
cd twitter-clone
npm install
```

### 2. Database Initialization
Start the mock REST API server (runs on port 3000 by default):
```bash
npm run server
```

### 3. Development Server
In a separate terminal instance, boot up the Vite development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

## 📈 Optimization & Performance
- **Asset Optimization**: SVGs and static assets are bundled efficiently.
- **State Granularity**: State is kept as close to the UI as possible to prevent unnecessary re-renders.
- **Semantic HTML**: Strict adherence to web accessibility standards and semantic structural elements.

---
*Engineered by **Arjav Jain** — Demonstrating mastery in full-stack UI development and scalable application design.*
