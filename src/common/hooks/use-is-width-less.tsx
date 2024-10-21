'use client'
import { useEffect, useState } from 'react'

export const useIsWidthLess = (width: number) => {
  const [currentWidth, setCurrentWidth] = useState<number>(width)
  const handleWindowResize = () => setCurrentWidth(window.innerWidth)

  useEffect(() => {
    handleWindowResize()

    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return currentWidth < width
}
