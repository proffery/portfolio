import NotFoundPage from '@/components/not-found-page/not-found'
import { Locale, getDictionary } from '@/i18n/get-dictionaries'

type Props = {
  params: { locale: Locale }
}

export default async function NotFound({ params: { locale } }: Props) {
  const dict = await getDictionary(locale)

  return <NotFoundPage dict={dict} />
}
