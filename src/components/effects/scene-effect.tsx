import React from 'react'

import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { KernelSize } from 'postprocessing'

export const SceneEffect = () => {
  return (
    <EffectComposer multisampling={2}>
      <Bloom
        height={640}
        intensity={2.5}
        kernelSize={KernelSize.VERY_SMALL}
        luminanceSmoothing={0.4}
        luminanceThreshold={0.8}
        width={640}
      />
      <Bloom
        height={240}
        intensity={0.05}
        kernelSize={KernelSize.VERY_LARGE}
        luminanceSmoothing={0}
        luminanceThreshold={0.5}
        width={240}
      />
    </EffectComposer>
  )
}
