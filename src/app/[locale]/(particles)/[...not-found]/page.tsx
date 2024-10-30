import NotFoundPage from '@/components/not-found-page/not-found'
import { Locale, getDictionary } from '@/i18n/get-dictionaries'

type Props = {
  params: { locale: Locale }
}

export async function generateMetadata({ params: { locale } }: Props) {
  const dict = await getDictionary(locale)

  const { notFoundPage } = dict

  return {
    description: notFoundPage.description,
    openGraph: {
      description: notFoundPage.description,
      title: notFoundPage.title,
    },
    title: notFoundPage.title,
    twitter: {
      description: notFoundPage.description,
      title: notFoundPage.title,
    },
  }
}

export default async function NotFound({ params: { locale } }: Props) {
  const dict = await getDictionary(locale)

  return <NotFoundPage dict={dict} />
}
