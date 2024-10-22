import { ElementRef, ReactNode, forwardRef } from 'react'

import { constants } from '@/common/constants'
import { useIsWidthLess } from '@/common/use-is-width-less'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

type Props = {
  children?: ReactNode
}

export const ParallaxCamera = forwardRef<ElementRef<'group'>, Props>(({ children }: Props, ref) => {
  const isMobile = useIsWidthLess(constants.mobileWidth)

  useFrame((state, delta) => {
    // @ts-ignore
    easing.damp3(state.camera.position, [0, 0, 25], 0.25, delta)
    if (!isMobile) {
      // @ts-ignore
      easing.dampE(
        // @ts-ignore
        state.camera.position,
        [state.pointer.x / 2, state.pointer.y / 2, 20],
        0.25,
        delta
      )
    }
  })

  return (
    <group ref={ref} scale={1}>
      {children}
    </group>
  )
})
