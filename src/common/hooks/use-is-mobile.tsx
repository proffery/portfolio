'use client'
import { useEffect, useState } from 'react'

import { sizes } from '@/common/constants/sizes'

export const useIsMobile = () => {
  const [width, setWidth] = useState<number>(1000)
  const handleWindowResize = () => setWidth(window.innerWidth)

  useEffect(() => {
    handleWindowResize()

    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return width <= sizes.mobileWidth
}
