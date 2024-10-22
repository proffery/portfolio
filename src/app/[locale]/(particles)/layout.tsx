'use client'
import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

import { options } from '@/common/particles'
import { useParticles } from '@/common/use-particles'
import Particles from '@tsparticles/react'

import 'react-toastify/dist/ReactToastify.css'

type Props = {
  children: ReactNode
}
export default function ParticlesLayout({ children }: Props) {
  const { isParticlesInit } = useParticles()

  return (
    <>
      {isParticlesInit && <Particles id={'tsparticles'} options={options} />}
      {children}
      <ToastContainer
        autoClose={5000}
        closeOnClick
        draggable
        hideProgressBar={false}
        newestOnTop={false}
        pauseOnFocusLoss
        pauseOnHover
        position={'bottom-center'}
        style={{ zIndex: 999 }}
        theme={'dark'}
      />
    </>
  )
}
