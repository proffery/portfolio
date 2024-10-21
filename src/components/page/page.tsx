'use client'
import { ComponentPropsWithoutRef, ElementRef, Suspense, useRef } from 'react'
import { useSelector } from 'react-redux'

import { constants } from '@/common/constants/constants'
import { dimensions } from '@/common/constants/dimensions'
import withRedux from '@/common/hocs/with-redux'
import { useIsWidthLess } from '@/common/hooks/use-is-width-less'
import { CanvasLoader } from '@/components/canvas-loader/canvas-loader'
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
import { Leva, useControls } from 'leva'

import s from './page.module.scss'

type Props = { dict: any } & ComponentPropsWithoutRef<'main'>

function Page({ children, className, ...rest }: Props) {
  const classNames = {
    canvas: clsx(s.canvas),
    container: clsx(s.container),
    main: clsx(s.main, className),
  }
  const sectionInView = useSelector(selectSectionInView)

  const groupRef = useRef<ElementRef<'group'>>(null)
  const earthRef = useRef<ElementRef<'group'>>(null)
  const sunRef = useRef<ElementRef<'group'>>(null)
  const moonRef = useRef<ElementRef<'group'>>(null)
  const marsRef = useRef<ElementRef<'group'>>(null)
  const jupiterRef = useRef<ElementRef<'group'>>(null)

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
        duration: 4,
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

  // const moon = useControls('Moon', {
  //   positionX: {
  //     max: 150,
  //     min: -150,
  //     value: isMobile ? mDimensions.moon_position[0] : dDimensions.moon_position[0],
  //   },
  //   positionY: {
  //     max: 150,
  //     min: -150,
  //     value: isMobile ? mDimensions.moon_position[1] : dDimensions.moon_position[1],
  //   },
  //   positionZ: {
  //     max: 150,
  //     min: -150,
  //     value: isMobile ? mDimensions.moon_position[2] : dDimensions.moon_position[2],
  //   },
  // })
  // const mars = useControls('Mars', {
  //   positionX: {
  //     max: 2150,
  //     min: -2150,
  //     value: isMobile ? mDimensions.mars_position[0] : dDimensions.mars_position[0],
  //   },
  //   positionY: {
  //     max: 2150,
  //     min: -2150,
  //     value: isMobile ? mDimensions.mars_position[1] : dDimensions.mars_position[1],
  //   },
  //   positionZ: {
  //     max: 2150,
  //     min: -2150,
  //     value: isMobile ? mDimensions.mars_position[2] : dDimensions.mars_position[2],
  //   },
  // })
  // const jupiter = useControls('Jupiter', {
  //   positionX: {
  //     max: 2150,
  //     min: -2150,
  //     value: isMobile ? mDimensions.jupiter_position[0] : dDimensions.jupiter_position[0],
  //   },
  //   positionY: {
  //     max: 2150,
  //     min: -2150,
  //     value: isMobile ? mDimensions.jupiter_position[1] : dDimensions.jupiter_position[1],
  //   },
  //   positionZ: {
  //     max: 2150,
  //     min: -2150,
  //     value: isMobile ? mDimensions.jupiter_position[2] : dDimensions.jupiter_position[2],
  //   },
  // })
  // const light = useControls('Sun position', {
  //   positionX: {
  //     max: 1800,
  //     min: -1800,
  //     value: isMobile ? mDimensions.light_position[0] : dDimensions.light_position[0],
  //   },
  //   positionY: {
  //     max: 1800,
  //     min: -1800,
  //     value: isMobile ? mDimensions.light_position[1] : dDimensions.light_position[1],
  //   },
  //   positionZ: {
  //     max: 1800,
  //     min: -1800,
  //     value: isMobile ? mDimensions.light_position[2] : dDimensions.light_position[2],
  //   },
  // })
  // const group = useControls('Group position', {
  //   positionX: {
  //     max: 2100,
  //     min: -2100,
  //     value: isMobile ? mDimensions.group_position[0] : dDimensions.group_position[0],
  //   },
  //   positionY: {
  //     max: 2100,
  //     min: -1100,
  //     value: isMobile ? mDimensions.group_position[1] : dDimensions.group_position[1],
  //   },
  //   positionZ: {
  //     max: 2100,
  //     min: -1100,
  //     value: isMobile ? mDimensions.group_position[2] : dDimensions.group_position[2],
  //   },
  //   rotationX: {
  //     max: 10,
  //     min: -10,
  //     value: isMobile ? mDimensions.group_rotation[0] : dDimensions.group_rotation[0],
  //   },
  //   rotationY: {
  //     max: 10,
  //     min: -10,
  //     value: isMobile ? mDimensions.group_rotation[1] : dDimensions.group_rotation[1],
  //   },
  //   rotationZ: {
  //     max: 10,
  //     min: -10,
  //     value: isMobile ? mDimensions.group_rotation[2] : dDimensions.group_rotation[2],
  //   },
  // })
  //
  // const earth = useControls('Earth position', {
  //   positionX: {
  //     max: 50,
  //     min: -50,
  //     value: isMobile ? mDimensions.earth_position[0] : dDimensions.earth_position[0],
  //   },
  //   positionY: {
  //     max: 50,
  //     min: -50,
  //     value: isMobile ? mDimensions.earth_position[1] : dDimensions.earth_position[1],
  //   },
  //   positionZ: {
  //     max: 50,
  //     min: -50,
  //     value: isMobile ? mDimensions.earth_position[2] : dDimensions.earth_position[2],
  //   },
  // })

  return (
    <>
      {/*<Leva />*/}
      <Canvas className={classNames.canvas}>
        <Suspense fallback={<CanvasLoader />}>
          <ScrollControls damping={0.1} pages={4}>
            <PerspectiveCamera makeDefault>
              <group
                // position={[group.positionX, group.positionY, group.positionZ]}
                ref={groupRef}
                // rotation={[group.rotationX, group.rotationY, group.rotationZ]}
              >
                <ambientLight intensity={0.5} />
                <Sun
                  // position={[
                  //   isMobile ? mDimensions.light_position[0] : dDimensions.light_position[0],
                  //   isMobile ? mDimensions.light_position[1] : dDimensions.light_position[1],
                  //   isMobile ? mDimensions.light_position[2] : dDimensions.light_position[2],
                  //position={[light.positionX, light.positionY, light.positionZ]}
                  // ]}
                  ref={sunRef}
                />

                <Earth
                  //position={[earth.positionX, earth.positionY, earth.positionZ]}
                  // position={[
                  //   isMobile ? mDimensions.earth_position[0] : dDimensions.earth_position[0],
                  //   isMobile ? mDimensions.earth_position[1] : dDimensions.earth_position[1],
                  //   isMobile ? mDimensions.earth_position[2] : dDimensions.earth_position[2],
                  // ]}
                  ref={earthRef}
                />
                <Moon
                  position={[
                    isMobile ? mDimensions.moon_position[0] : dDimensions.moon_position[0],
                    isMobile ? mDimensions.moon_position[1] : dDimensions.moon_position[1],
                    isMobile ? mDimensions.moon_position[2] : dDimensions.moon_position[2],
                  ]}
                  //position={[moon.positionX, moon.positionY, moon.positionZ]}
                  //ref={moonRef}
                />
                <Mars
                  position={[
                    isMobile ? mDimensions.mars_position[0] : dDimensions.mars_position[0],
                    isMobile ? mDimensions.mars_position[1] : dDimensions.mars_position[1],
                    isMobile ? mDimensions.mars_position[2] : dDimensions.mars_position[2],
                  ]}
                  //position={[mars.positionX, mars.positionY, mars.positionZ]}
                  //ref={marsRef}
                />
                <Jupiter
                  position={[
                    isMobile ? mDimensions.jupiter_position[0] : dDimensions.jupiter_position[0],
                    isMobile ? mDimensions.jupiter_position[1] : dDimensions.jupiter_position[1],
                    isMobile ? mDimensions.jupiter_position[2] : dDimensions.jupiter_position[2],
                  ]}
                  // position={[jupiter.positionX, jupiter.positionY, jupiter.positionZ]}
                  //ref={jupiterRef}
                />
              </group>
            </PerspectiveCamera>
            <Scroll html>
              <main className={classNames.main} {...rest}>
                <div className={classNames.container}>{children}</div>
              </main>
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </>
  )
}

export default withRedux(Page)
