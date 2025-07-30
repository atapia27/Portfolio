# Alejandro Tapia - Cognitive Engineering Portfolio

A modern, interactive portfolio website showcasing the intersection of Cognitive Science and Computer Science. Built with React, TypeScript, Three.js, and Tailwind CSS.

## Features

- Interactive 3D Animations - Three.js powered background animations
- Cognitive Science Approach - Design rooted in human cognition and decision-making
- Responsive Design - Optimized for all devices and screen sizes
- Modern Tech Stack - React 18, TypeScript, Vite, Tailwind CSS
- Performance Optimized - Code splitting, lazy loading, and optimized builds

## Tech Stack

- Frontend: React 18, TypeScript, Tailwind CSS
- 3D Graphics: Three.js, React Three Fiber, Drei
- Animations: Framer Motion, React Type Animation
- Build Tool: Vite
- Deployment: Netlify

## Installation

1. Clone the repository:

```bash
git clone https://github.com/atapia27/Portfolio.git
cd Portfolio

```

2. Install dependencies:

```bash
npm install

```

3. Start the development server:

```bash
npm run dev

```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build

```

The build output will be in the `dist` directory.

## Project Structure

```ini
Portfolio/
├── public/                 # Static assets
│   ├── Adventure Time/     # Custom fonts
│   ├── img/               # Project images
│   └── favicon.svg        # Site favicon
├── src/
│   ├── features/          # Feature-based architecture
│   │   ├── about/         # About section
│   │   ├── landing/       # Landing page
│   │   └── projects/      # Projects section
│   ├── shared/            # Shared components and utilities
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── netlify.toml          # Netlify configuration
├── vite.config.ts        # Vite configuration
└── package.json          # Dependencies and scripts

```