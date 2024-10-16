'use client'
import { RefObject, useEffect, useState } from 'react'

export default function useIsVisible(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    // Check if the ref is defined and not null before creating the observer
    if (!ref.current) {
      return
    }

    // Create an IntersectionObserver to observe the ref's visibility
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    })

    // Start observing the element
    observer.observe(ref.current) // ref.current is guaranteed to be non-null here

    // Cleanup the observer when the component unmounts or ref changes
    return () => {
      observer.disconnect()
    }
  }, [ref])

  return isIntersecting
}
