/** @type {import('tailwindcss').Config} */
import { withUt } from 'uploadthing/tw';

module.exports = withUt({
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        primary: { // Grey *
          demo: '#D46534', // 
          DEFAULT: "#e1e0de", // Grey
          dark: '#CDCCC8', // Grey
          light: '#F4F4F4', // White Grey
          foreground: '#151515', // Black
        },
        secondary: { // White *
          DEFAULT: '#EAEBEB', // White
          foreground: '#151515', // Black
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: '#ecebe9',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: { // Yellow *
          DEFAULT: '#FEC92D', // Yellow
          dark: '#FEC92D', // Dark Yellow
          light: '#FFE28D', // Light Yellow
          foreground: '#151515', // Black
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        coral: {
          500: '#15BF59', // Green
        },
        grey: {
          600: '#545454', // Subdued
          500: '#757575',
          400: '#AFAFAF', // Disabled
          50: '#F6F6F6', // White Grey
        },
        black: '#000000',
        white: '#FFFFFF',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        foreground: 'hsl(var(--foreground))',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        serif: ['serif'],
      },
      backgroundImage: {
        'dotted-pattern': "url('/assets/images/dotted-pattern.png')",
        'hero-img': "url('/assets/images/hero.png')",
      },
      fontSize: {
        '3xs' : ['0.5rem', {
          lineHeight: '0.75rem',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        }],
        '2xs': ['0.625rem', {
          lineHeight: '0.75rem',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        }],
        'xs': ['0.75rem', {
          lineHeight: '1rem',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        }],
        's': ['0.875rem', {
          lineHeight: '1.25rem',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        }],
        'm': ['1rem', {
          lineHeight: '1.5rem',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        }],
        'l': ['1.125rem', {
          lineHeight: '1.75rem',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        }],
        'xl': ['1.5rem', {
          lineHeight: '1.75rem',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        }],
        '2xl': ['1.75rem', {
          lineHeight: '1.75rem',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        }],
        '3xl': ['1.875rem', {
          lineHeight: '2.25rem',
          letterSpacing: '-0.02em',
          fontWeight: '400',
        }],
      },
      screens: {
        'xs': '380px', // mobile SE not included
        'sm': '640px', // tablet
        'md': '768px', 
        'lg': '1024px', // desktop
        'xl': '1280px',
        '2xl': '1536px',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      boxShadow: {
        't-sm': '0 -1px 2px 0 rgba(0, 0, 0, 0.05)',
        't-md': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        't-lg': '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        't-xl': '0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        't-2xl': '0 -25px 50px -12px rgba(0, 0, 0, 0.25)',
        't-3xl': '0 -35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
});