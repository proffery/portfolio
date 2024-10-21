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
    Material_50: THREE.MeshStandardMaterial
    Material_62: THREE.MeshStandardMaterial
  }
  nodes: {
    ['Earth_Material_#50_0']: THREE.Mesh
    ['EarthClouds_Material_#62_0']: THREE.Mesh
  }
} & GLTF

export const Earth = forwardRef<ElementRef<'group'>, Props>((props: Props, ref) => {
  const { materials, nodes } = useGLTF('/models/earth.glb') as unknown as GLTFResult

  const cloudsRef = useRef<ElementRef<'group'>>(null)
  const earthRef = useRef<ElementRef<'group'>>(null)

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.z += 0.003
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.x += 0.0005
      cloudsRef.current.rotation.y += 0.0005
      cloudsRef.current.rotation.z += -0.0001
    }
  })

  return (
    <group {...props} dispose={null} ref={ref}>
      <group name={'Earth'} ref={earthRef} rotation={[-7.4, -6.4, -4.2]}>
        <mesh
          castShadow
          // @ts-ignore
          geometry={nodes['Earth_Material_#50_0'].geometry}
          // @ts-ignore
          material={materials.Material_50}
          name={'Earth_Material_#50_0'}
          receiveShadow
        />
      </group>
      <group
        name={'EarthClouds'}
        ref={cloudsRef}
        rotation={[-Math.PI / 2, -Math.PI / 9, 0]}
        scale={1.02}
      >
        <mesh
          castShadow
          // @ts-ignore
          geometry={nodes['EarthClouds_Material_#62_0'].geometry}
          // @ts-ignore
          material={materials.Material_62}
          name={'EarthClouds_Material_#62_0'}
          receiveShadow
        />
      </group>
    </group>
  )
})

useGLTF.preload('/models/earth.glb')
