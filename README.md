# Cognitive CS Portfolio

A stunning Three.js portfolio showcasing the intersection of Cognitive Science and Computer Science. This portfolio demonstrates how understanding human cognition can inform better software engineering and user experience design.

## 🧠 About the Theme

This portfolio reflects a unique background in both Cognitive Science and Computer Science, emphasizing:

- **Human Cognition**: Understanding attention, decision-making, and information processing
- **System Design**: Creating interfaces that reduce friction and build confidence  
- **Technical Excellence**: From backend data to frontend interfaces, every layer optimized

## ✨ Features

- **Three.js Visualizations**: Interactive 3D brain models and neural networks
- **Feature-Based Architecture**: Organized by features with individual components, styles, and utilities
- **Modern Tech Stack**: React, TypeScript, Tailwind CSS, Three.js
- **Responsive Design**: Beautiful on all devices
- **Smooth Animations**: Framer Motion for fluid interactions
- **Cognitive Science Theme**: Colors and design inspired by neural networks and cognition

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Styling**: Tailwind CSS, tailwind-merge
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── features/           # Feature-based architecture
│   ├── landing/       # Landing section
│   │   ├── components/
│   │   │   ├── LandingSection.tsx
│   │   │   ├── BrainModel.tsx
│   │   │   └── NeuralNetwork.tsx
│   │   └── index.ts
│   ├── about/         # About section
│   │   ├── components/
│   │   │   ├── AboutSection.tsx
│   │   │   └── DataFlow.tsx
│   │   └── index.ts
│   └── projects/      # Projects section
│       ├── components/
│       │   ├── ProjectsSection.tsx
│       │   ├── ProjectCard.tsx
│       │   └── ProjectVisualization.tsx
│       └── index.ts
├── shared/            # Shared utilities and components
│   ├── components/
│   │   └── Navigation.tsx
│   ├── context/
│   │   └── ScrollContext.tsx
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       └── cn.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 🎨 Design System

### Colors
- **Neural Blue**: `#0ea5e9` - Primary brand color
- **Synaptic Purple**: `#d946ef` - Secondary accent
- **Cognitive Yellow**: `#eab308` - Highlight color

### Typography
- **Primary**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono (for code)

### Components
- Glass morphism effects with backdrop blur
- Gradient text effects
- Smooth hover animations
- Responsive grid layouts

## 🧠 Cognitive Science Integration

The portfolio demonstrates cognitive science principles through:

1. **Information Architecture**: Clear hierarchy and progressive disclosure
2. **Attention Design**: Strategic use of color and animation to guide focus
3. **Decision Support**: Intuitive navigation and clear call-to-actions
4. **Reduced Cognitive Load**: Clean layouts and predictable interactions

## 📱 Responsive Design

- Mobile-first approach
- Adaptive 3D visualizations
- Touch-friendly interactions
- Optimized performance across devices

## 🔧 Customization

### Adding New Projects
Edit `src/features/projects/components/ProjectsSection.tsx` and add to the `projects` array.

### Modifying Colors
Update the color palette in `tailwind.config.js` under the `extend.colors` section.

### Adding New Sections
1. Create a new feature folder under `src/features/`
2. Add components, styles, and utilities specific to that feature
3. Export the main component in an `index.ts` file
4. Import and add to the main `App.tsx`

## 📄 License

MIT License - feel free to use this portfolio as a template for your own projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ and 🧠 by combining Cognitive Science and Computer Science principles. 