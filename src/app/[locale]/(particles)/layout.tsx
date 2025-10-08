'use client'
import { ReactNode, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'

import { breakpoints } from '@/common/breakpoints'
import { useActions } from '@/common/use-actions'
import { useGpuTier } from '@/common/use-gpu-tier'
import { useIsWidthLess } from '@/common/use-is-width-less'
import withRedux from '@/common/with-redux'
import { BackgroundParticles } from '@/components/background-particles/background-particles'
import { appActions } from '@/services/app/app.slice'

import 'react-toastify/dist/ReactToastify.css'

type Props = {
  children: ReactNode
}
function ParticlesLayout({ children }: Props) {
  const { setGpuData, setIsMobile } = useActions(appActions)
  const gpuData = useGpuTier()
  const isMobile = useIsWidthLess(breakpoints.mobileWidth)

  useEffect(() => {
    setGpuData(gpuData)
    setIsMobile(isMobile)
  }, [gpuData, isMobile])

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

export default withRedux(ParticlesLayout)
