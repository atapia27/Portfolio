import { cn } from '../../../../shared/utils/cn'

export function ExploreButton() {
  return (
    <button 
      onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      className="px-8 py-3 text-white font-bold rounded-xl text-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl bg-neural-600 hover:bg-neural-500 focus:outline-none focus:ring-4 focus:ring-neural-400 focus:ring-offset-4 focus:ring-offset-black relative group shadow-lg"
    >
      <span className="flex flex-row items-center">
        <span>Explore My Work</span>
        <svg 
          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
    </button>
  )
} 