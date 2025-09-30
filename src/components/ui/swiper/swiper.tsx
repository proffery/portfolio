import React, { ComponentPropsWithoutRef, useState } from 'react'

import { IndexDirection } from '@/common/use-index-change'
import clsx from 'clsx'

import s from './swiper.module.scss'

type Props = {
  index: number
  onIndexChange: (direction: IndexDirection) => void
  sectionArr: any[]
} & ComponentPropsWithoutRef<'div'>

export const Swiper = ({ children, className, index, onIndexChange, sectionArr }: Props) => {
  const classNames = {
    swiper: clsx(s.swiper, className),
  }

  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const minSwipeDistance = 40

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(0) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) =>
    setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      return
    }
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance && index < sectionArr.length - 1
    const isRightSwipe = distance < -minSwipeDistance && index > 0

    if (isLeftSwipe || isRightSwipe) {
      isLeftSwipe ? onIndexChange('next') : onIndexChange('previous')
    }
  }

  return (
    <div
      className={classNames.swiper}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
      onTouchStart={onTouchStart}
    >
      {children}
    </div>
  )
}
