import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        allow: ['/en', '/ru'],
        userAgent: '*',
      },
    ],
    sitemap: [
      `${process.env.NEXT_PUBLIC_HOST_BASE}/ru/sitemap.xml`,
      `${process.env.NEXT_PUBLIC_HOST_BASE}/en/sitemap.xml`,
    ],
  }
}
