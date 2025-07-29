# About Feature

This feature contains all components and logic related to the About section of the portfolio.

## Structure

```
about/
├── components/
│   ├── tabs/
│   │   ├── BackgroundTab.tsx
│   │   ├── SkillsTab.tsx
│   │   ├── ExperienceTab.tsx
│   │   ├── ResumeTab.tsx
│   │   └── index.ts
│   ├── AboutSection.tsx
│   ├── TabNavigation.tsx
│   ├── TabContent.tsx
│   └── index.ts
├── data/
│   ├── skills.ts
│   └── experiences.ts
├── types/
│   └── index.ts
├── constants/
│   └── index.ts
├── hooks/
│   └── useTabNavigation.ts
├── utils/
│   └── skillUtils.ts
├── index.ts
└── README.md
```

## Components

### Main Components
- `AboutSection.tsx` - Main container component for the About section
- `TabNavigation.tsx` - Navigation component for switching between tabs
- `TabContent.tsx` - Content manager that renders the appropriate tab based on active state

### Tab Components
- `BackgroundTab.tsx` - Displays background information and mission
- `SkillsTab.tsx` - Shows skills organized by categories
- `ExperienceTab.tsx` - Displays work experience with interactive navigation
- `ResumeTab.tsx` - Resume download functionality

## Data Layer

### Skills Data
- `skills.ts` - Contains skill categories and individual skills
- Exports `SkillGroup` interface and `skills` array

### Experience Data
- `experiences.ts` - Contains work experience information
- Exports `Experience` interface and `experiences` array

## Types

- `TabConfig` - Configuration for tab navigation
- `BackgroundCard` - Structure for background information cards
- `ResumeDownloadConfig` - Configuration for resume download

## Constants

- `TAB_CONFIGS` - Tab navigation configuration
- `BACKGROUND_CARDS` - Background information cards data
- `RESUME_CONFIG` - Resume download configuration

## Hooks

- `useTabNavigation` - Custom hook for managing tab state

## Utils

- `skillUtils.ts` - Utility functions for skill-related operations
  - `getSkillGradientClass()` - Returns gradient class based on skill category
  - `getSkillColorClass()` - Returns color class based on skill category

## Usage

```tsx
import { AboutSection } from '@/features/about';

function App() {
  return <AboutSection />;
}
```

## Benefits of This Structure

1. **Separation of Concerns** - Data, logic, and UI are separated
2. **Reusability** - Components can be easily reused or modified
3. **Maintainability** - Each piece has a single responsibility
4. **Scalability** - Easy to add new tabs or modify existing ones
5. **Type Safety** - Strong typing throughout the feature
6. **Testability** - Components and utilities can be tested independently 