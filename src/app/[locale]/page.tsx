import { Locale, getDictionary } from '@/app/[locale]/dictionaries'
import { Page } from '@/components/page/page'

type Props = {
  params: { locale: Locale }
}

export default async function HomePage({ params: { locale } }: Props) {
  const dict = await getDictionary(locale)

  return <Page>{dict.header.test}</Page>
}
