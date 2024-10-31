import { locales } from '@/common/locales'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        allow: locales.map(locale => `/${locale}`),
        userAgent: '*',
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_HOST_BASE}/sitemap.xml`,
  }
}
