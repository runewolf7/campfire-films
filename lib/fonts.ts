import { Bungee, Roboto } from 'next/font/google'

// Bungee for headings - bold, display font
export const bungee = Bungee({
  weight: '400', // Bungee only comes in 400 weight
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

// Roboto for body text - multiple weights including black
export const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})