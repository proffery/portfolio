import HomePage from '@/components/pages/home-page/home-page'
import { HeroSection } from '@/components/pages/home-page/sections/hero/hero-section'
import Section from '@/components/section/section'
import { Locale, getDictionary } from '@/i18n/dictionaries'

type Props = {
  params: { locale: Locale }
}

export default async function Home({ params: { locale } }: Props) {
  const dict = await getDictionary(locale)

  return (
    <HomePage>
      <HeroSection dict={dict} id={'home'} />
      <Section id={'about'}>{dict.homePage.about.title}</Section>
      <Section id={'projects'}>{dict.homePage.projects.title}</Section>
      <Section id={'contacts'}>{dict.homePage.contacts.title}</Section>
    </HomePage>
  )
}
