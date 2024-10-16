import { Locale, getDictionary } from '@/app/[locale]/dictionaries'
import { Page } from '@/components/page/page'
import { Section } from '@/components/section/section'

type Props = {
  params: { locale: Locale }
}

export default async function HomePage({ params: { locale } }: Props) {
  const dict = await getDictionary(locale)

  return (
    <Page>
      <Section id={'home'}>{dict.main.home.title}</Section>
      <Section id={'about'}>{dict.main.about.title}</Section>
      <Section id={'projects'}>{dict.main.projects.title}</Section>
      <Section id={'contacts'}>{dict.main.contacts.title}</Section>
    </Page>
  )
}
