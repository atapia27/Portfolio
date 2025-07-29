import type { ComponentType } from "react";

export interface Section {
  id: string;
  title: string;
  component: ComponentType;
}

export interface ScrollContextType {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}
