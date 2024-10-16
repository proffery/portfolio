'use client'
import React, {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  useLayoutEffect,
  useRef,
} from 'react'

import gsap from '@gsap/react'
import { useGLTF, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type Props = ComponentPropsWithoutRef<'group'>

type GLTFResult = {
  materials: {
    ['8k_moon']: THREE.MeshStandardMaterial
  }
  nodes: {
    Object_4: THREE.Mesh
  }
} & GLTF

export const Moon = (props: Props) => {
  const group = useRef<ElementRef<'group'>>(null)
  const { materials, nodes } = useGLTF('/models/moon.glb') as unknown as GLTFResult

  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.001
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name={'Sketchfab_Scene'}>
        <group
          name={'Sketchfab_model'}
          position={[10, 2, 7]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={2}
        >
          <group name={'root'}>
            <group name={'GLTF_SceneRootNode'} rotation={[Math.PI / 2, 0, 0]}>
              <group name={'8k_moon_2'} rotation={[-Math.PI, 0, -Math.PI]}>
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
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/moon.glb')
