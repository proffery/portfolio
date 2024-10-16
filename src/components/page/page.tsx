'use client'
import { ComponentPropsWithoutRef, Suspense } from 'react'

import { CanvasLoader } from '@/components/canvas-loader/canvas-loader'
import { Earth } from '@/components/models/earth/earth'
import { Moon } from '@/components/models/moon/moon'
import { ParallaxCamera } from '@/components/models/parallax-camera'
import { PerspectiveCamera, Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'

import s from './page.module.scss'

type Props = ComponentPropsWithoutRef<'main'>

export function Page({ children, className, ...rest }: Props) {
  const classNames = {
    canvas: clsx(s.canvas),
    main: clsx(s.main, className),
  }

  return (
    <main className={classNames.main} {...rest}>
      <Canvas className={classNames.canvas} style={{ position: 'absolute' }}>
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 25]} />
          <ambientLight intensity={0.2} />
          <directionalLight intensity={10} position={[4, 0, -2]} />
          <ParallaxCamera />
          <ScrollControls damping={0.5} pages={4}>
            <Earth />
            <Moon />
            <Scroll html>{children}</Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </main>
  )
}
