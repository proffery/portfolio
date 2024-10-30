'use client'
import { Suspense } from 'react'
import { useSelector } from 'react-redux'

import { Arrow } from '@/assets/components/arrow'
import withRedux from '@/common/with-redux'
import { Button } from '@/components/button/button'
import { CanvasLoader } from '@/components/canvas-loader/canvas-loader'
import { Main } from '@/components/main/main'
import { ParallaxCamera } from '@/components/parallax-camera'
import { Saturn } from '@/components/saturn/saturn'
import { Typography } from '@/components/typography/typography'
import { selectDictionary } from '@/services/app/app.selectors'
import { Scroll, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'

import s from './not-found.module.scss'

function NotFoundPage() {
  const classNames = {
    backButton: clsx(s.backButton),
    canvas: clsx(s.canvas),
  }

  const router = useRouter()

  const goBackHandler = () => {
    router.back()
  }

  const dict = useSelector(selectDictionary)

  const { notFoundPage } = dict

  return (
    <Canvas className={classNames.canvas}>
      <Suspense fallback={<CanvasLoader />}>
        <ScrollControls pages={0} prepend>
          <ParallaxCamera />
          <Saturn
            position={[2, -5, 1]}
            rotation={[Math.PI / 30, Math.PI / 5, -0.2]}
            scale={0.013}
          />
          <directionalLight intensity={2} position={[-8000, 0.5, 1000]} />
          <Scroll html>
            <Main>
              <Typography.H2 as={'h1'}>{notFoundPage.title}</Typography.H2>
              <Typography.H5 as={'h2'}>{notFoundPage.description}</Typography.H5>
              <Button className={classNames.backButton} onClick={goBackHandler}>
                {notFoundPage.button}
                <Arrow />
              </Button>
            </Main>
          </Scroll>
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}

export default withRedux(NotFoundPage)
