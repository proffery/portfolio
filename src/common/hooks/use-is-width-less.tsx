// 'use client'
// import { useEffect, useState } from 'react'
//
// export const useIsWidthLess = (width: number) => {
//   const [currentWidth, setCurrentWidth] = useState<number>(width)
//   const handleWindowResize = () => setCurrentWidth(window.innerWidth)
//
//   useEffect(() => {
//     handleWindowResize()
//
//     window.addEventListener('resize', handleWindowResize)
//
//     return () => window.removeEventListener('resize', handleWindowResize)
//   }, [width, currentWidth])
//
//   return currentWidth < width
// }
'use client'
import { useEffect, useState } from 'react'

export const useIsWidthLess = (width: number) => {
  const [currentWidth, setCurrentWidth] = useState<number>(width)

  useEffect(() => {
    const handleWindowResize = () => {
      const newWidth = window.innerWidth

      if (newWidth !== currentWidth) {
        setCurrentWidth(newWidth)
        window.location.reload()
      }
    }

    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [currentWidth, width])

  return currentWidth < width
}
