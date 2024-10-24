import HomePage from '@/components/home-page/home-page'
import AboutSection from '@/components/home-page/sections/about/about-section'
import ContactsSection from '@/components/home-page/sections/contacts/contacts-section'
import HeroSection from '@/components/home-page/sections/hero/hero-section'
import ProjectsSection from '@/components/home-page/sections/projects/projects-section'
import { Locale, getDictionary } from '@/i18n/get-dictionaries'

type Props = {
  params: { locale: Locale }
}

export default async function Home({ params: { locale } }: Props) {
  const dict = await getDictionary(locale)

  return (
    <HomePage>
      <HeroSection dict={dict} id={'home'} />
      <AboutSection dict={dict} id={'about'} />
      <ProjectsSection dict={dict} id={'projects'} locale={locale} />
      <ContactsSection dict={dict} id={'contacts'} />
    </HomePage>
  )
}
