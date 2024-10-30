import { Footer } from '@/components/footer/footer'
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
  return (
    <HomePage>
      <HeroSection id={'home'} nextId={'about'} />
      <AboutSection id={'about'} />
      <ProjectsSection id={'projects'} />
      <ContactsSection id={'contacts'} prevId={'home'} />
      <Footer locale={locale} />
    </HomePage>
  )
}
