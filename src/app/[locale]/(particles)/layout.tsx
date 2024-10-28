'use client'
import { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

import { BackgroundParticles } from '@/components/background-particles/background-particles'

import 'react-toastify/dist/ReactToastify.css'

type Props = {
  children: ReactNode
}
export default function ParticlesLayout({ children }: Props) {
  return (
    <>
      <BackgroundParticles />
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
        theme={'dark'}
      />
    </>
  )
}
