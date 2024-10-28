'use client'
import s from './background-particles.module.scss'

export const BackgroundParticles = () => {
  const classNames = {
    mobileBackground: s.mobileBackground,
    stars: s.stars,
    twinkling: s.twinkling,
  }

  return (
    <div className={classNames.mobileBackground}>
      <div className={classNames.stars} />
      <div className={classNames.twinkling} />
    </div>
  )
}
