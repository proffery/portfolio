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
    ['Scene_-_Root']: THREE.MeshStandardMaterial
  }
  nodes: {
    Sun_LOD0__0: THREE.Mesh
    Sun_LOD1__0: THREE.Mesh
    Sun_LOD2__0: THREE.Mesh
    Sun_LOD3__0: THREE.Mesh
    Sun_LOD4__0: THREE.Mesh
  }
} & GLTF

export const Sun = forwardRef<ElementRef<'group'>, Props>((props: Props, ref) => {
  const group = useRef<ElementRef<'group'>>(null)
  const { materials, nodes } = useGLTF('/models/sun.glb') as unknown as GLTFResult

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.001
    }
  })

  return (
    <group {...props} dispose={null} ref={ref}>
      <group ref={group} rotation={[-Math.PI / 2, 0, 0]}>
        <directionalLight intensity={20} />
        <mesh
          castShadow
          // @ts-ignore
          geometry={nodes.Sun_LOD0__0.geometry}
          // @ts-ignore
          material={materials['Scene_-_Root']}
          position={[0, 0, -22.361]}
          receiveShadow
        />
        <mesh
          castShadow
          // @ts-ignore
          geometry={nodes.Sun_LOD1__0.geometry}
          // @ts-ignore
          material={materials['Scene_-_Root']}
          position={[0, 0, -22.361]}
          receiveShadow
        />
        <mesh
          castShadow
          // @ts-ignore
          geometry={nodes.Sun_LOD2__0.geometry}
          // @ts-ignore
          material={materials['Scene_-_Root']}
          position={[0, 0, -22.361]}
          receiveShadow
        />
        <mesh
          castShadow
          // @ts-ignore
          geometry={nodes.Sun_LOD3__0.geometry}
          // @ts-ignore
          material={materials['Scene_-_Root']}
          position={[0, 0, -22.361]}
          receiveShadow
        />
        <mesh
          castShadow
          // @ts-ignore
          geometry={nodes.Sun_LOD4__0.geometry}
          // @ts-ignore
          material={materials['Scene_-_Root']}
          position={[0, 0, -22.361]}
          receiveShadow
        />
      </group>
    </group>
  )
})

useGLTF.preload('/models/sun.glb')
