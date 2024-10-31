import { locales } from '@/common/locales'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pagesEntries: MetadataRoute.Sitemap = locales.map(locale => ({
    lastModified: new Date(),
    url: `${process.env.NEXT_PUBLIC_HOST_BASE}/${locale}`,
  }))

  return [
    {
      url: `${process.env.NEXT_PUBLIC_HOST_BASE}`,
    },
    ...pagesEntries,
  ]
}
