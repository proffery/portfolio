import { locales } from '@/common/locales'
import { Footer } from '@/components/footer/footer'
import HomePage from '@/components/home-page/home-page'
import AboutSection from '@/components/home-page/sections/about/about-section'
import ContactsSection from '@/components/home-page/sections/contacts/contacts-section'
import HomeSection from '@/components/home-page/sections/home/home-section'
import ProjectsSection from '@/components/home-page/sections/projects/projects-section'
import { Locale, getDictionary } from '@/i18n/get-dictionaries'

type Props = {
  params: { locale: Locale }
}

export async function generateStaticParams() {
  return locales.map(locale => ({
    locale: locale,
  }))
}

export async function generateMetadata({ params: { locale } }: Props) {
  const dict = await getDictionary(locale)
  const { metadata } = dict

  return {
    alternates: { canonical: `/${locale}/` },
    description: metadata.description,
    openGraph: {
      description: metadata.description,
      title: metadata.title,
      url: process.env.NEXT_PUBLIC_HOST_BASE + '/' + locale,
    },
    title: metadata.applicationName,
    twitter: {
      description: metadata.description,
      title: metadata.title,
    },
  }
}
export default async function Home({ params: { locale } }: Props) {
  return (
    <HomePage>
      <HomeSection id={'home'} nextId={'about'} />
      <AboutSection id={'about'} />
      <ProjectsSection id={'projects'} />
      <ContactsSection id={'contacts'} prevId={'home'} />
      <Footer locale={locale} />
    </HomePage>
  )
}
