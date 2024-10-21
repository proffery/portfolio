'use client'
import { ReactNode } from 'react'

import { options } from '@/common/constants/particles'
import { useParticles } from '@/common/hooks/use-particles'
import Particles from '@tsparticles/react'

type Props = {
  children: ReactNode
}
export default function ParticlesLayout({ children }: Props) {
  const { isParticlesInit } = useParticles()

  return (
    <>
      {isParticlesInit && <Particles id={'tsparticles'} options={options} />}
      {children}
    </>
  )
}
