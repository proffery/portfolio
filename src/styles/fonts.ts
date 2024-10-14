import { Roboto_Serif, Russo_One } from 'next/font/google'

export const russoOne = Russo_One({
  display: 'swap',
  subsets: ['cyrillic', 'latin'],
  variable: '--font-russo-one',
  weight: ['400'],
})

export const roboto = Roboto_Serif({
  display: 'swap',
  subsets: ['cyrillic', 'latin'],
  variable: '--font-roboto',
  weight: ['400', '700'],
})
