import { Locale, getDictionary } from '@/app/[locale]/dictionaries'
import HomePage from '@/components/pages/home-page/home-page'
import { Hero } from '@/components/pages/home-page/sections/hero/hero'
import Section from '@/components/section/section'

type Props = {
  params: { locale: Locale }
}

export default async function Home({ params: { locale } }: Props) {
  const dict = await getDictionary(locale)

  return (
    <HomePage>
      <Hero dict={dict} id={'home'} />
      <Section id={'about'}>{dict.homePage.about.title}</Section>
      <Section id={'projects'}>{dict.homePage.projects.title}</Section>
      <Section id={'contacts'}>{dict.homePage.contacts.title}</Section>
    </HomePage>
  )
}
