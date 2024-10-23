import HomePage from '@/components/home-page/home-page'
import AboutSection from '@/components/home-page/sections/about/about-section'
import ContactsSection from '@/components/home-page/sections/contacts/contacts-section'
import HeroSection from '@/components/home-page/sections/hero/hero-section'
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
      <AboutSection dict={dict} id={'about'} locale={locale} />
      <Section id={'projects'}>{dict.homePage.projects.title}</Section>
      <ContactsSection dict={dict} id={'contacts'} />
    </HomePage>
  )
}
