export interface TabConfig {
  id: string;
  label: string;
  icon: string;
}

export interface BackgroundCard {
  icon: string;
  title: string;
  description: string;
  gradientClass: string;
  borderHoverClass: string;
}

export interface ResumeDownloadConfig {
  filename: string;
  path: string;
} 