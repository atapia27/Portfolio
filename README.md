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

Edit `src/features/projects/data/projects.ts` to add new projects:

Edit `src/features/projects/data/projects.ts` to add new projects:

```typescript
{
  id: "project-id",
  title: "Project Title",
  description: "Project description...",
  technologies: ["React", "TypeScript"],
  image: "/img/project-image.png",
  link: "https://project-url.com",
  github: "https://github.com/username/project",
  featured: true
}

```

### Updating Content

- About Section: Edit `src/features/about/data/` files
- Skills: Update `src/features/about/data/skills.ts`
- Experience: Update `src/features/about/data/experiences.ts`

## Configuration Files

- `netlify.toml`: Netlify deployment configuration
- `vite.config.ts`: Build optimization and chunk splitting
- `tailwind.config.js`: Custom design system and colors
- `tsconfig.json`: TypeScript configuration

## Performance Optimizations

- Code Splitting: Automatic chunk splitting for vendor libraries
- Lazy Loading: Components loaded on demand
- Image Optimization: Optimized images and lazy loading
- Caching: Proper cache headers for static assets
- Bundle Analysis: Optimized bundle sizes

## SEO & Meta Tags

The portfolio includes comprehensive SEO optimization:

- Open Graph tags for social sharing
- Twitter Card support
- Proper meta descriptions and keywords
- Structured data for better search visibility

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

- Portfolio: [alejandro-tapia-portfolio.netlify.app](https://alejandro-tapia-portfolio.netlify.app)
- GitHub: [@atapia27](https://github.com/atapia27)
- LinkedIn: [Alejandro Tapia](https://linkedin.com/in/alejandro-tapia)

---

Built with React, TypeScript, and Three.js

```typescript
{
  id: "project-id",
  title: "Project Title",
  description: "Project description...",
  technologies: ["React", "TypeScript"],
  image: "/img/project-image.png",
  link: "https://project-url.com",
  github: "https://github.com/username/project",
  featured: true
}

```

### Updating Content

- About Section: Edit `src/features/about/data/` files
- Skills: Update `src/features/about/data/skills.ts`
- Experience: Update `src/features/about/data/experiences.ts`

## Configuration Files

- `netlify.toml`: Netlify deployment configuration
- `vite.config.ts`: Build optimization and chunk splitting
- `tailwind.config.js`: Custom design system and colors
- `tsconfig.json`: TypeScript configuration

## Performance Optimizations

- Code Splitting: Automatic chunk splitting for vendor libraries
- Lazy Loading: Components loaded on demand
- Image Optimization: Optimized images and lazy loading
- Caching: Proper cache headers for static assets
- Bundle Analysis: Optimized bundle sizes

## SEO & Meta Tags

The portfolio includes comprehensive SEO optimization:

- Open Graph tags for social sharing
- Twitter Card support
- Proper meta descriptions and keywords
- Structured data for better search visibility

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Contact

- Portfolio: [alejandro-tapia-portfolio.netlify.app](https://alejandro-tapia-portfolio.netlify.app)
- GitHub: [@atapia27](https://github.com/atapia27)
- LinkedIn: [Alejandro Tapia](https://linkedin.com/in/alejandro-tapia)

---

Built with React, TypeScript, and Three.js