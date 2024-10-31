'use client'
import { useCallback, useState } from 'react'

export type IndexDirection = 'next' | 'previous'

export default function useIndexChange<T>(array: Array<T>) {
  const [index, setIndex] = useState(0)

  const onIndexChange = useCallback(
    (direction: IndexDirection) => {
      if (direction === 'next') {
        setIndex(prev => (prev === array.length - 1 ? 0 : prev + 1))
      } else if (direction === 'previous') {
        setIndex(prev => (prev === 0 ? array.length - 1 : prev - 1))
      }
    },
    [array.length]
  )

  return { index, onIndexChange }
}
