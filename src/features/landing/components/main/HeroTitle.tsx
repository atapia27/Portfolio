import { cn } from '../../../../shared/utils/cn'

export function HeroTitle() {
  return (
    <div className="space-y-6 py-6 ">
      <h1 
        className="text-6xl md:text-9xl font-black tracking-[0.2em] text-center animate-spin-and-fade-in animation-delay-2.5"
        style={{
          fontFamily: 'Adventure Time, cursive, sans-serif',
          color: '#FF6B6B',
          textShadow: '4px 4px 0px #8B0000, 8px 8px 0px #4A0000',
          animation: 'spinAndFadeIn 1.5s linear forwards',
          animationDelay: '2.5s',
          opacity: 0
        }}
      >
        <div className="drop-shadow-2xl">Cognitive</div>
        <div className="drop-shadow-2xl">Engineering</div>
      </h1>
    </div>
  )
} 