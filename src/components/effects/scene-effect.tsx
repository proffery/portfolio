import React from 'react'

import {
  Bloom,
  BrightnessContrast,
  ChromaticAberration,
  DepthOfField,
  EffectComposer,
  HueSaturation,
} from '@react-three/postprocessing'
import { KernelSize } from 'postprocessing'

export const SceneEffect = () => {
  return (
    <EffectComposer multisampling={2}>
      <Bloom
        height={640}
        intensity={0.05}
        kernelSize={KernelSize.VERY_LARGE}
        luminanceSmoothing={0.8}
        luminanceThreshold={1.5}
        width={640}
      />
      <DepthOfField
        bokehScale={7} // bokeh size
        focalLength={9.01} // focal length
        focusDistance={3.001} // where to focus
      />
      <HueSaturation hue={0.05} saturation={0.1} />
      <BrightnessContrast brightness={0.02} contrast={0.08} />
      <ChromaticAberration
        // @ts-ignore
        offset={[0.001, 0.001]}
        radialModulation
      />
    </EffectComposer>
  )
}
