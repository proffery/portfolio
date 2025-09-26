'use client'
import React, { ComponentPropsWithoutRef, ElementRef, Suspense, useRef } from 'react'
import { useSelector } from 'react-redux'

import { dimensions } from '@/common/dimensions'
import withRedux from '@/common/with-redux'
import { CanvasLoader } from '@/components/canvas-loader/canvas-loader'
import { Earth } from '@/components/earth/earth'
import { Jupiter } from '@/components/jupiter/jupiter'
import { Main } from '@/components/main/main'
import { Mars } from '@/components/mars/mars'
import { Moon } from '@/components/moon/moon'
import { SceneEffect } from '@/components/scene-effect'
import { Sun } from '@/components/sun/sun'
import { selectGpuData, selectIsMobile, selectSectionInView } from '@/services/app/app.selectors'
import { useGSAP } from '@gsap/react'
import { Center, Html, PerspectiveCamera, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import { gsap } from 'gsap'

import s from './home-page.module.scss'

type Props = ComponentPropsWithoutRef<'canvas'>

const HomePage = ({ children }: Props) => {
  const classNames = {
    canvas: clsx(s.canvas),
  }

  const sectionInView = useSelector(selectSectionInView)
  const { isMobile: isGpuMobile, tier: gpuTier } = useSelector(selectGpuData)
  const isScreenSizeMobile = useSelector(selectIsMobile)

  const groupRef = useRef<ElementRef<'group'>>(null)
  const earthRef = useRef<ElementRef<'group'>>(null)
  const sunRef = useRef<ElementRef<'group'>>(null)
  const { desktop: dDimensions, mobile: mDimensions } = dimensions.homePageScenes[sectionInView]

  const sunInitialPosition = isScreenSizeMobile
    ? dimensions.homePageScenes.home.mobile.light_position
    : dimensions.homePageScenes.home.desktop.light_position

  useGSAP(() => {
    const timeline = gsap.timeline()

    if (sunRef.current) {
      timeline.to(sunRef.current.position, {
        duration: 4,
        ease: 'power1.inOut',
        x: isScreenSizeMobile ? mDimensions.light_position[0] : dDimensions.light_position[0],
        y: isScreenSizeMobile ? mDimensions.light_position[1] : dDimensions.light_position[1],
        z: isScreenSizeMobile ? mDimensions.light_position[2] : dDimensions.light_position[2],
      })
    }
  }, [sectionInView, isScreenSizeMobile, isGpuMobile])

  useGSAP(() => {
    const timeline = gsap.timeline()

    if (earthRef.current) {
      timeline.to(earthRef.current.position, {
        duration: 4,
        ease: 'power1.inOut',
        x: isScreenSizeMobile ? mDimensions.earth_position[0] : dDimensions.earth_position[0],
        y: isScreenSizeMobile ? mDimensions.earth_position[1] : dDimensions.earth_position[1],
        z: isScreenSizeMobile ? mDimensions.earth_position[2] : dDimensions.earth_position[2],
      })
    }
  }, [sectionInView, isScreenSizeMobile, isGpuMobile])

  useGSAP(() => {
    const timeline = gsap.timeline()

    if (groupRef.current) {
      timeline.to(groupRef.current.position, {
        duration: 4,
        ease: 'sine.inOut',
        x: isScreenSizeMobile ? mDimensions.group_position[0] : dDimensions.group_position[0],
        y: isScreenSizeMobile ? mDimensions.group_position[1] : dDimensions.group_position[1],
        z: isScreenSizeMobile ? mDimensions.group_position[2] : dDimensions.group_position[2],
      })
    }
  }, [sectionInView, isScreenSizeMobile, isGpuMobile])

  useGSAP(() => {
    const timeline = gsap.timeline()

    if (groupRef.current) {
      timeline.to(groupRef.current.rotation, {
        duration: 4,
        ease: 'expo.inOut',
        x: isScreenSizeMobile ? mDimensions.group_rotation[0] : dDimensions.group_rotation[0],
        y: isScreenSizeMobile ? mDimensions.group_rotation[1] : dDimensions.group_rotation[1],
        z: isScreenSizeMobile ? mDimensions.group_rotation[2] : dDimensions.group_rotation[2],
      })
    }
  }, [sectionInView, isScreenSizeMobile, isGpuMobile])

  return (
    <Canvas className={classNames.canvas}>
      <Center>
        <Suspense fallback={<CanvasLoader />}>
          <ScrollControls pages={2}>
            {gpuTier >= 2 && (
              <PerspectiveCamera makeDefault>
                <group ref={groupRef}>
                  <ambientLight intensity={0.5} />
                  {gpuTier >= 2 && (
                    <Sun
                      position={[
                        sunInitialPosition[0],
                        sunInitialPosition[1],
                        sunInitialPosition[2],
                      ]}
                      ref={sunRef}
                    />
                  )}

                  <Earth ref={earthRef} />
                  <Moon
                    position={[
                      isScreenSizeMobile
                        ? mDimensions.moon_position[0]
                        : dDimensions.moon_position[0],
                      isScreenSizeMobile
                        ? mDimensions.moon_position[1]
                        : dDimensions.moon_position[1],
                      isScreenSizeMobile
                        ? mDimensions.moon_position[2]
                        : dDimensions.moon_position[2],
                    ]}
                  />
                  <Mars
                    position={[
                      isScreenSizeMobile
                        ? mDimensions.mars_position[0]
                        : dDimensions.mars_position[0],
                      isScreenSizeMobile
                        ? mDimensions.mars_position[1]
                        : dDimensions.mars_position[1],
                      isScreenSizeMobile
                        ? mDimensions.mars_position[2]
                        : dDimensions.mars_position[2],
                    ]}
                  />
                  <Jupiter
                    position={[
                      isScreenSizeMobile
                        ? mDimensions.jupiter_position[0]
                        : dDimensions.jupiter_position[0],
                      isScreenSizeMobile
                        ? mDimensions.jupiter_position[1]
                        : dDimensions.jupiter_position[1],
                      isScreenSizeMobile
                        ? mDimensions.jupiter_position[2]
                        : dDimensions.jupiter_position[2],
                    ]}
                  />
                </group>
                {!isScreenSizeMobile && !isGpuMobile && gpuTier >= 2 && <SceneEffect />}
              </PerspectiveCamera>
            )}
            <Html fullscreen zIndexRange={[-100, -2]}>
              <Main>{children}</Main>
            </Html>
          </ScrollControls>
        </Suspense>
      </Center>
    </Canvas>
  )
}

export default withRedux(HomePage)
