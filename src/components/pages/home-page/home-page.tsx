'use client'
import { ComponentPropsWithoutRef, ElementRef, Suspense, forwardRef, useRef } from 'react'
import { useSelector } from 'react-redux'

import { constants } from '@/common/constants'
import { dimensions } from '@/common/dimensions'
import { useIsWidthLess } from '@/common/use-is-width-less'
import withRedux from '@/common/with-redux'
import { CanvasLoader } from '@/components/canvas-loader/canvas-loader'
import { Earth } from '@/components/earth/earth'
import { Jupiter } from '@/components/jupiter/jupiter'
import { Main } from '@/components/main/main'
import { Mars } from '@/components/mars/mars'
import { Moon } from '@/components/moon/moon'
import { Sun } from '@/components/sun/sun'
import { selectSectionInView } from '@/services/app/app.selectors'
import { useGSAP } from '@gsap/react'
import { Html, PerspectiveCamera, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import { gsap } from 'gsap'

import s from './home-page.module.scss'

type Props = ComponentPropsWithoutRef<'div'>

const HomePage = forwardRef<ElementRef<'canvas'>, Props>(
  ({ children, className, ...rest }: Props, ref) => {
    const classNames = {
      canvas: clsx(s.canvas, className),
    }
    const sectionInView = useSelector(selectSectionInView)

    const groupRef = useRef<ElementRef<'group'>>(null)
    const earthRef = useRef<ElementRef<'group'>>(null)
    const sunRef = useRef<ElementRef<'group'>>(null)
    const scrollRef = useRef<ElementRef<'main'>>(null)

    const isMobile = useIsWidthLess(constants.mobileWidth)
    const { desktop: dDimensions, mobile: mDimensions } = dimensions.homePageScenes[sectionInView]
    const sunInitialPosition = isMobile
      ? dimensions.homePageScenes.home.mobile.light_position
      : dimensions.homePageScenes.home.desktop.light_position

    useGSAP(() => {
      const timeline = gsap.timeline()

      if (sunRef.current) {
        timeline.to(sunRef.current.position, {
          duration: 5,
          ease: 'power1.inOut',
          x: isMobile ? mDimensions.light_position[0] : dDimensions.light_position[0],
          y: isMobile ? mDimensions.light_position[1] : dDimensions.light_position[1],
          z: isMobile ? mDimensions.light_position[2] : dDimensions.light_position[2],
        })
      }
    }, [sectionInView, isMobile])
    useGSAP(() => {
      const timeline = gsap.timeline()

      if (earthRef.current) {
        timeline.to(earthRef.current.position, {
          duration: 5,
          ease: 'power1.inOut',
          x: isMobile ? mDimensions.earth_position[0] : dDimensions.earth_position[0],
          y: isMobile ? mDimensions.earth_position[1] : dDimensions.earth_position[1],
          z: isMobile ? mDimensions.earth_position[2] : dDimensions.earth_position[2],
        })
      }
    }, [sectionInView, isMobile])

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
      }
    }, [sectionInView, isMobile])
    useGSAP(() => {
      const timeline = gsap.timeline()

      if (groupRef.current) {
        timeline.to(groupRef.current.rotation, {
          duration: 4,
          ease: 'expo.inOut',
          x: isMobile ? mDimensions.group_rotation[0] : dDimensions.group_rotation[0],
          y: isMobile ? mDimensions.group_rotation[1] : dDimensions.group_rotation[1],
          z: isMobile ? mDimensions.group_rotation[2] : dDimensions.group_rotation[2],
        })
      }
    }, [sectionInView, isMobile])

    return (
      <Canvas className={classNames.canvas} {...rest} ref={ref}>
        <Suspense fallback={<CanvasLoader />}>
          <ScrollControls pages={3} prepend>
            <PerspectiveCamera makeDefault>
              <group ref={groupRef}>
                <ambientLight intensity={0.5} />
                <Sun
                  position={[sunInitialPosition[0], sunInitialPosition[1], sunInitialPosition[2]]}
                  ref={sunRef}
                />

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
            <Html>
              <Main ref={scrollRef}>{children}</Main>
            </Html>
          </ScrollControls>
        </Suspense>
      </Canvas>
    )
  }
)

export default withRedux(HomePage)
