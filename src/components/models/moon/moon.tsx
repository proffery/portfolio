'use client'
import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, useRef } from 'react'

import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type Props = {
  position?: number[]
  scale?: number
} & ComponentPropsWithoutRef<'group'>

type GLTFResult = {
  materials: {
    ['8k_moon']: THREE.MeshStandardMaterial
  }
  nodes: {
    Object_4: THREE.Mesh
  }
} & GLTF

export const Moon = forwardRef<ElementRef<'group'>, Props>((props: Props, ref) => {
  const group = useRef<ElementRef<'group'>>(null)
  const { materials, nodes } = useGLTF('/models/moon.glb') as unknown as GLTFResult

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.001
    }
  })

  return (
    <group dispose={null} ref={group}>
      <group ref={ref} {...props}>
        <mesh
          castShadow
          // @ts-ignore
          geometry={nodes.Object_4.geometry}
          // @ts-ignore
          material={materials['8k_moon']}
          name={'Object_4'}
          receiveShadow
        />
      </group>
    </group>
  )
})

useGLTF.preload('/models/moon.glb')
