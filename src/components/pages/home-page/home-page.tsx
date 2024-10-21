'use client'
import { ComponentPropsWithoutRef, ElementRef, ReactNode, Suspense, useRef } from 'react'
import { useSelector } from 'react-redux'

import { constants } from '@/common/constants/constants'
import { dimensions } from '@/common/constants/dimensions'
import withRedux from '@/common/hocs/with-redux'
import { useIsWidthLess } from '@/common/hooks/use-is-width-less'
import { CanvasLoader } from '@/components/canvas-loader/canvas-loader'
import { Main } from '@/components/main/main'
import { Earth } from '@/components/models/earth/earth'
import { Jupiter } from '@/components/models/jupiter/jupiter'
import { Mars } from '@/components/models/mars/mars'
import { Moon } from '@/components/models/moon/moon'
import { Sun } from '@/components/models/sun/sun'
import { selectSectionInView } from '@/services/app/app.selectors'
import { useGSAP } from '@gsap/react'
import { PerspectiveCamera, Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import { gsap } from 'gsap'

import s from './home-page.module.scss'

type Props = { children: ReactNode }

function HomePage({ children }: Props) {
  const classNames = {
    canvas: clsx(s.canvas),
  }
  const sectionInView = useSelector(selectSectionInView)

  const groupRef = useRef<ElementRef<'group'>>(null)
  const earthRef = useRef<ElementRef<'group'>>(null)
  const sunRef = useRef<ElementRef<'group'>>(null)

  const isMobile = useIsWidthLess(constants.mobileWidth)
  const { desktop: dDimensions, mobile: mDimensions } = dimensions.homePageScenes[sectionInView]

  useGSAP(() => {
    const timeline = gsap.timeline()

    if (groupRef.current) {
      timeline.to(groupRef.current.position, {
        duration: 3,
        ease: 'sine.inOut',
        x: isMobile ? mDimensions.group_position[0] : dDimensions.group_position[0],
        y: isMobile ? mDimensions.group_position[1] : dDimensions.group_position[1],
        z: isMobile ? mDimensions.group_position[2] : dDimensions.group_position[2],
      })
      timeline.to(groupRef.current.rotation, {
        duration: 5,
        ease: 'expo.inOut',
        x: isMobile ? mDimensions.group_rotation[0] : dDimensions.group_rotation[0],
        y: isMobile ? mDimensions.group_rotation[1] : dDimensions.group_rotation[1],
        z: isMobile ? mDimensions.group_rotation[2] : dDimensions.group_rotation[2],
      })
    }
  }, [sectionInView])

  useGSAP(() => {
    const timeline = gsap.timeline()

    if (sunRef.current) {
      timeline.to(sunRef.current.position, {
        duration: 5,
        ease: 'sine.inOut',
        x: isMobile ? mDimensions.light_position[0] : dDimensions.light_position[0],
        y: isMobile ? mDimensions.light_position[1] : dDimensions.light_position[1],
        z: isMobile ? mDimensions.light_position[2] : dDimensions.light_position[2],
      })
    }
    if (earthRef.current) {
      timeline.to(earthRef.current.position, {
        duration: 2,
        ease: 'power1.inOut',
        x: isMobile ? mDimensions.earth_position[0] : dDimensions.earth_position[0],
        y: isMobile ? mDimensions.earth_position[1] : dDimensions.earth_position[1],
        z: isMobile ? mDimensions.earth_position[2] : dDimensions.earth_position[2],
      })
    }
  }, [sectionInView])

  return (
    <Canvas className={classNames.canvas}>
      <Suspense fallback={<CanvasLoader />}>
        <ScrollControls damping={0.1} pages={4}>
          <PerspectiveCamera makeDefault>
            <group ref={groupRef}>
              <ambientLight intensity={0.5} />
              <Sun ref={sunRef} />

              <Earth ref={earthRef} />
              <Moon
                position={[
                  isMobile ? mDimensions.moon_position[0] : dDimensions.moon_position[0],
                  isMobile ? mDimensions.moon_position[1] : dDimensions.moon_position[1],
                  isMobile ? mDimensions.moon_position[2] : dDimensions.moon_position[2],
                ]}
              />
              <Mars
                position={[
                  isMobile ? mDimensions.mars_position[0] : dDimensions.mars_position[0],
                  isMobile ? mDimensions.mars_position[1] : dDimensions.mars_position[1],
                  isMobile ? mDimensions.mars_position[2] : dDimensions.mars_position[2],
                ]}
              />
              <Jupiter
                position={[
                  isMobile ? mDimensions.jupiter_position[0] : dDimensions.jupiter_position[0],
                  isMobile ? mDimensions.jupiter_position[1] : dDimensions.jupiter_position[1],
                  isMobile ? mDimensions.jupiter_position[2] : dDimensions.jupiter_position[2],
                ]}
              />
            </group>
          </PerspectiveCamera>
          <Scroll html>
            <Main>{children}</Main>
          </Scroll>
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}

export default withRedux(HomePage)
