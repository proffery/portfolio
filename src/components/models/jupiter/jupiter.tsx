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
    Pierscien: THREE.MeshStandardMaterial
    Planeta: THREE.MeshStandardMaterial
  }
  nodes: {
    Jupiter_Planeta_0: THREE.Mesh
    pierscien_Pierscien_0: THREE.Mesh
  }
} & GLTF

export const Jupiter = forwardRef<ElementRef<'group'>, Props>((props: Props, ref) => {
  const { materials, nodes } = useGLTF('/models/jupiter.glb') as unknown as GLTFResult
  const group = useRef<ElementRef<'group'>>(null)

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.006
    }
  })

  return (
    <group dispose={null} ref={ref}>
      <group ref={group} {...props} scale={1.2}>
        <mesh
          castShadow
          // @ts-ignore
          geometry={nodes.Jupiter_Planeta_0.geometry}
          // @ts-ignore
          material={materials.Planeta}
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          // @ts-ignore
          geometry={nodes.pierscien_Pierscien_0.geometry}
          // @ts-ignore
          material={materials.Pierscien}
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  )
})

useGLTF.preload('/models/jupiter.glb')
