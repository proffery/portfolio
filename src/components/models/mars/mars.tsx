'use client'
import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type Props = {
  position?: number[]
  scale?: number
} & ComponentPropsWithoutRef<'group'>

type GLTFResult = {
  materials: {
    lambert3: THREE.MeshStandardMaterial
  }
  nodes: {
    pSphere1_lambert3_0: THREE.Mesh
  }
} & GLTF

export const Mars = forwardRef<ElementRef<'group'>, Props>((props: Props, ref) => {
  const { materials, nodes } = useGLTF('/models/mars.glb') as unknown as GLTFResult

  return (
    <group dispose={null} ref={ref}>
      <group {...props}>
        <mesh
          castShadow
          // @ts-ignore
          geometry={nodes.pSphere1_lambert3_0.geometry}
          // @ts-ignore
          material={materials.lambert3}
          receiveShadow
          scale={7.337}
        />
      </group>
    </group>
  )
})

useGLTF.preload('/models/mars.glb')
