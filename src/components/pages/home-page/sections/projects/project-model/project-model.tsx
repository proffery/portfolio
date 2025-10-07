import { ElementRef, Suspense, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { Project } from '@/common/projects'
import { CanvasLoader } from '@/components/canvas-loader/canvas-loader'
import { ParallaxCamera } from '@/components/parallax-camera'
import { Screen } from '@/components/screen/screen'
import { selectGpuData } from '@/services/app/app.selectors'
import { useGSAP } from '@gsap/react'
import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import Image from 'next/image'

import s from './project-model.module.scss'

type Props = {
  isSectionVisible: boolean
  project: Project
}

export const ProjectModel = ({ isSectionVisible, project }: Props) => {
  const classNames = {
    canvas: clsx(s.canvas),
    modelContainer: clsx(s.modelContainer),
    projectImage: clsx(s.projectImage),
  }
  const [zoom, setZoom] = useState(false)
  const modelRef = useRef<ElementRef<typeof Screen>>(null)
  const { tier: gpuTier } = useSelector(selectGpuData)

  useGSAP(() => {
    if (modelRef.current) {
      gsap.from(modelRef.current.rotation, {
        duration: 1,
        ease: 'power3',
        y: Math.PI / 2,
      })
    }
  }, [project])

  useGSAP(() => {
    const timeline = gsap.timeline()

    if (modelRef.current) {
      timeline.to(modelRef.current.position, {
        duration: 1,
        ease: 'power3',
        x: -15,
        y: 0,
        z: zoom ? 13 : 0,
      })
    }
  }, [zoom])

  return (
    <motion.div
      animate={isSectionVisible ? 'visible' : 'hidden'}
      className={classNames.modelContainer}
      initial={'hidden'}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
      variants={{
        hidden: { opacity: 0, x: '100vw' },
        visible: { opacity: 1, x: 0 },
      }}
      viewport={{ once: true }}
      whileInView={'visible'}
    >
      {gpuTier >= 2 ? (
        <Canvas className={classNames.canvas}>
          <ParallaxCamera />
          <directionalLight intensity={3} position={[-1, 1, 3]} />
          <Environment environmentIntensity={2} preset={'night'} />
          <Suspense fallback={<CanvasLoader />}>
            <Screen
              coverUrl={project.coverUrl}
              onClick={() => setZoom(!zoom)}
              ref={modelRef}
              scale={80}
            />
          </Suspense>
        </Canvas>
      ) : (
        <Image
          alt={project.title}
          className={classNames.projectImage}
          draggable={false}
          height={320}
          src={project.coverUrl}
          width={640}
        />
      )}
    </motion.div>
  )
}
