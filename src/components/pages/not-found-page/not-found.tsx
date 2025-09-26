'use client'
import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'

import { Arrow } from '@/assets/components/arrow'
import withRedux from '@/common/with-redux'
import { Button } from '@/components/button/button'
import { CanvasLoader } from '@/components/canvas-loader/canvas-loader'
import { Main } from '@/components/main/main'
import { Saturn } from '@/components/saturn/saturn'
import { SceneEffect } from '@/components/scene-effect'
import { Typography } from '@/components/typography/typography'
import { selectDictionary, selectGpuData, selectIsMobile } from '@/services/app/app.selectors'
import { Html, PerspectiveCamera, ScrollControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import s from './not-found.module.scss'

function NotFoundPage() {
  const classNames = {
    backButton: clsx(s.backButton),
    backgroundImage: clsx(s.backgroundImage),
    canvas: clsx(s.canvas),
  }
  const { isMobile: isGpuMobile, tier: gpuTier } = useSelector(selectGpuData)
  const isScreenSizeMobile = useSelector(selectIsMobile)
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
          {gpuTier >= 2 && (
            <PerspectiveCamera makeDefault position={[-1, 1, 10]}>
              <>
                <Saturn position={[0.8, -2, -9]} rotation={[0.1, -1.1, 0.1]} scale={0.0025} />
                <directionalLight intensity={2} position={[-8000, 0.5, 1000]} />
              </>
              {!isScreenSizeMobile && !isGpuMobile && gpuTier >= 2 && <SceneEffect />}
            </PerspectiveCamera>
          )}
          <Html fullscreen zIndexRange={[-100, -2]}>
            <Main>
              {gpuTier < 2 && (
                <Image
                  alt={'Saturn'}
                  className={classNames.backgroundImage}
                  height={533}
                  src={'/images/sections/saturn.webp'}
                  width={800}
                />
              )}{' '}
              <Typography.H2 as={'h1'}>{notFoundPage.title}</Typography.H2>
              <Typography.H5 as={'h2'}>{notFoundPage.description}</Typography.H5>
              <Button className={classNames.backButton} onClick={goBackHandler}>
                <Arrow />
                {notFoundPage.button}
              </Button>
            </Main>
          </Html>
        </ScrollControls>
      </Suspense>
    </Canvas>
  )
}

export default withRedux(NotFoundPage)
