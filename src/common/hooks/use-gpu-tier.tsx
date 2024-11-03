'use client'
import { useEffect, useState } from 'react'

import { TierResult, getGPUTier } from 'detect-gpu'

export const useGpuTier = (): TierResult => {
  const [gpuObj, setGpuObject] = useState<TierResult>({ tier: 1, type: 'WEBGL_UNSUPPORTED' })

  const getGpuInfo = async () => {
    const gpuTier = await getGPUTier()

    setGpuObject(gpuTier)
  }

  useEffect(() => {
    getGpuInfo()
  }, [])

  return gpuObj
}
