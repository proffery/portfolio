'use client'
import { useState } from 'react'

export type IndexDirection = 'next' | 'previous'

export default function useIndexChange<T>(array: Array<T>) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<IndexDirection>('next')

  const onIndexChange = (direction: IndexDirection) => {
    if (direction === 'next') {
      setIndex(prev => (prev === array.length - 1 ? 0 : prev + 1))
      setDirection('next')
    } else if (direction === 'previous') {
      setIndex(prev => (prev === 0 ? array.length - 1 : prev - 1))
      setDirection('previous')
    }
  }

  return { direction, index, onIndexChange }
}
