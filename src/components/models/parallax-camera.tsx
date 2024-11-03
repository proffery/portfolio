import { ElementRef, ReactNode, forwardRef } from 'react'
import { useSelector } from 'react-redux'

import { constants } from '@/common/constants'
import { useIsWidthLess } from '@/common/use-is-width-less'
import { selectIsMobile } from '@/services/app/app.selectors'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'

type Props = {
  children?: ReactNode
}

export const ParallaxCamera = forwardRef<ElementRef<'group'>, Props>(({ children }: Props, ref) => {
  const isMobile = useSelector(selectIsMobile)

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 25], 0.25, delta)
    // @ts-ignore
    easing.damp3(state.camera.rotation, [0, 0.05, 0], 0.25, delta)
    if (!isMobile) {
      easing.dampE(
        // @ts-ignore
        state.camera.rotation,
        [state.pointer.y / 15, -state.pointer.x / 15, 0],
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
