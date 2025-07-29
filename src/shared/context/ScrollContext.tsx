import { createContext, useContext } from 'react'
import type { ScrollContextType } from '../types'

export const ScrollContext = createContext<ScrollContextType | undefined>(undefined)

export const useScrollContext = () => {
  const context = useContext(ScrollContext)
  if (!context) {
    throw new Error('useScrollContext must be used within a ScrollProvider')
  }
  return context
} 