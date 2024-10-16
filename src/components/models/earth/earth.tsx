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
    Material_50: THREE.MeshStandardMaterial
    Material_62: THREE.MeshStandardMaterial
  }
  nodes: {
    ['Earth_Material_#50_0']: THREE.Mesh
    ['EarthClouds_Material_#62_0']: THREE.Mesh
  }
} & GLTF

export const Earth = (props: Props) => {
  const cloudsRef = useRef<ElementRef<'group'>>(null)
  const earthRef = useRef<ElementRef<'group'>>(null)
  const { materials, nodes } = useGLTF('/models/earth.glb') as unknown as GLTFResult

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.z += 0.002
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.x += 0.001
      cloudsRef.current.rotation.y += 0.001
    }
  })

  return (
    <group {...props} dispose={null}>
      <group name={'Sketchfab_Scene'}>
        <group name={'Sketchfab_model'} rotation={[-Math.PI / 2, 0, 0]}>
          <group name={'3f0d8c1a7c7c45138e5b99b56838fcb9fbx'} rotation={[0, 0, 0]}>
            <group name={'Object_2'}>
              <group name={'RootNode'}>
                <group name={'Earth'} ref={earthRef} rotation={[0, 0, 0]}>
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
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/earth.glb')
