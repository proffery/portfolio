'use client'
import { useEffect, useState } from 'react'

import { sizes } from '@/common/constants/sizes'
import { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'

export const useParticles = () => {
  const [isParticlesInit, setIsParticlesInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine)
    })
      .then(() => {
        setIsParticlesInit(true)
      })
      .catch(() => setIsParticlesInit(false))
  }, [])

  return { isParticlesInit }
}
