import type { ComponentType } from 'react'

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  image: string
  link?: string
  github?: string
  featured: boolean
}

export interface Section {
  id: string
  title: string
  component: ComponentType
}

export interface ScrollContextType {
  currentSection: string
  setCurrentSection: (section: string) => void
} 