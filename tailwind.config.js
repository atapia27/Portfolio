/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cognitive Science inspired colors
        'neural': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        'synaptic': {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        'cognitive': {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        // Custom portfolio color palette
        'portfolio': {
          'coral': '#ff6b6b',
          'coral-shade-1': '#e56060',
          'coral-shade-2': '#cc5555',
          'coral-shade-3': '#b24a4a',
          'coral-shade-4': '#994040',
          'coral-shade-5': '#7f3535',
          'coral-shade-6': '#662a2a',
          'pink': '#db5e8c',
          'pink-shade-1': '#c5557e',
          'pink-shade-2': '#af4c70',
          'pink-shade-3': '#994362',
          'pink-shade-4': '#833a54',
          'pink-shade-5': '#6d3146',
          'pink-shade-6': '#572838',
          'purple': '#a65e9a',
          'purple-shade-1': '#95558b',
          'purple-shade-2': '#844c7c',
          'purple-shade-3': '#73436d',
          'purple-shade-4': '#623a5e',
          'purple-shade-5': '#51314f',
          'purple-shade-6': '#402840',
          'deep-purple': '#6e5d94',
          'deep-purple-shade-1': '#635485',
          'deep-purple-shade-2': '#584b76',
          'deep-purple-shade-3': '#4d4267',
          'deep-purple-shade-4': '#423958',
          'deep-purple-shade-5': '#373049',
          'deep-purple-shade-6': '#2c273a',
          'blue-gray': '#41567a',
          'blue-gray-shade-1': '#3a4d6e',
          'blue-gray-shade-2': '#334462',
          'blue-gray-shade-3': '#2c3b56',
          'blue-gray-shade-4': '#25324a',
          'blue-gray-shade-5': '#1e293e',
          'blue-gray-shade-6': '#172032',
          'dark-blue': '#2f4858',
          'dark-blue-shade-1': '#2a414f',
          'dark-blue-shade-2': '#253a46',
          'dark-blue-shade-3': '#20333d',
          'dark-blue-shade-4': '#1b2c34',
          'dark-blue-shade-5': '#16252b',
          'dark-blue-shade-6': '#111e22',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'adventure': ['Adventure Time', 'cursive', 'sans-serif'],
        'courier': ['Courier New', 'Courier', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'button-pulse': 'buttonPulse 4s ease-in-out infinite',
        'button-bounce': 'buttonBounce 3s ease-in-out infinite',
      },
      animationDelay: {
        '2.5': '2.5s',
        '3.5': '3.5s',
        '5': '5s',
      },
      animationDuration: {
        '1.5': '1.5s',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(14, 165, 233, 0.8)' },
        },
        buttonPulse: {
          '0%, 100%': { 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), 0 0 0 0 rgba(110, 93, 148, 0.7)'
          },
          '50%': { 
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.4), 0 0 0 10px rgba(110, 93, 148, 0)'
          }
        },
        buttonBounce: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      },
      backgroundImage: {
        'background-gif': "url('/fish.gif')",
      },
      backgroundAttachment: {
        'fixed': 'fixed',
      },
      textShadow: {
        'hero': '4px 4px 0px #8B0000, 8px 8px 0px #4A0000',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      rotate: {
        'x-360': 'rotateX(360deg)',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-hero': {
          'text-shadow': '4px 4px 0px #8B0000, 8px 8px 0px #4A0000',
        },
      }
      addUtilities(newUtilities)
    }
  ],
} 