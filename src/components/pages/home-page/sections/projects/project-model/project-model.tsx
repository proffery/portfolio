import { ElementRef, Suspense, useRef } from 'react'

import { Project } from '@/common/projects'
import { CanvasLoader } from '@/components/canvas-loader/canvas-loader'
import { Monitor } from '@/components/monitor/monitor'
import { ParallaxCamera } from '@/components/parallax-camera'
import { useGSAP } from '@gsap/react'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

import s from './project-model.module.scss'

type Props = {
  isSectionVisible: boolean
  project: Project
}

export const ProjectModel = ({ isSectionVisible, project }: Props) => {
  const classNames = {
    canvas: clsx(s.canvas),
    modelContainer: clsx(s.modelContainer),
  }

  const modelRef = useRef<ElementRef<typeof Monitor>>(null)

  useGSAP(() => {
    if (modelRef.current) {
      gsap.from(modelRef.current.rotation, {
        duration: 1,
        ease: 'power3',
        y: Math.PI / 2,
      })
    }
  }, [project])

  return (
    <motion.div
      animate={isSectionVisible ? 'visible' : 'hidden'}
      className={classNames.modelContainer}
      initial={'hidden'}
      transition={{
        duration: 1.5,
        ease: 'easeInOut',
      }}
      variants={{
        hidden: { opacity: 0, x: '100vw' },
        visible: { opacity: 1, x: 0 },
      }}
      viewport={{ once: true }}
      whileInView={'visible'}
    >
      <Canvas className={classNames.canvas}>
        <ParallaxCamera />
        <ambientLight intensity={1} />
        <directionalLight intensity={3} position={[-22, -12, 5]} />
        <Suspense fallback={<CanvasLoader />}>
          <Monitor coverUrl={project.coverUrl} position={[-2, -8, 0]} ref={modelRef} scale={200} />
        </Suspense>
      </Canvas>
    </motion.div>
  )
}
