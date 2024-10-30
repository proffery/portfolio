'use client'
import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, useRef } from 'react'

import { ParallaxCamera } from '@/components/parallax-camera'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type Props = {
  position?: number[]
  rotation?: number[]
  scale?: number
} & ComponentPropsWithoutRef<'group'>

type GLTFResult = {
  materials: {
    Material_50: THREE.MeshStandardMaterial
    Material_62: THREE.MeshStandardMaterial
    Material_63: THREE.MeshStandardMaterial
    Material_64: THREE.MeshStandardMaterial
  }
  nodes: {
    ['Saturn_Clouds_Material_#62_0']: THREE.Mesh
    ['Saturn_Material_#50_0']: THREE.Mesh
    ['Saturn_Rings_Material_#63_0']: THREE.Mesh
    ['Sphere_Dione_Material_#64_0']: THREE.Mesh
    ['Sphere_Enceladus_Material_#64_0']: THREE.Mesh
    ['Sphere_Mimas_Material_#64_0']: THREE.Mesh
    ['Sphere_Rhea_Material_#64_0']: THREE.Mesh
    ['Sphere_Tethys_Material_#64_0']: THREE.Mesh
  }
} & GLTF

export const Saturn = forwardRef<ElementRef<'group'>, Props>((props: Props, ref) => {
  const { materials, nodes } = useGLTF('/models/saturn.glb') as unknown as GLTFResult

  const ringsRef = useRef<ElementRef<'group'>>(null)
  const cloudsRef = useRef<ElementRef<'group'>>(null)
  const saturnRef = useRef<ElementRef<'group'>>(null)
  const mimasRef = useRef<ElementRef<'group'>>(null)
  const enceladusRef = useRef<ElementRef<'group'>>(null)
  const dioneRef = useRef<ElementRef<'group'>>(null)
  const rheaRef = useRef<ElementRef<'group'>>(null)
  const tethysRef = useRef<ElementRef<'group'>>(null)

  useFrame(() => {
    if (ringsRef.current) {
      ringsRef.current.rotation.z += 0.0005
    }
    if (saturnRef.current) {
      saturnRef.current.rotation.z += 0.0025
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.z += 0.0011
    }
  })

  return (
    <group ref={ref} {...props} dispose={null}>
      <group name={'Saturn_Rings'} ref={ringsRef} rotation={[-Math.PI / 2, 0, 0]} scale={106}>
        <mesh
          castShadow
          geometry={nodes['Saturn_Rings_Material_#63_0'].geometry}
          material={materials.Material_63}
          name={'Saturn_Rings_Material_#63_0'}
          receiveShadow
        />
      </group>
      <group name={'Saturn'} ref={saturnRef} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh
          castShadow
          geometry={nodes['Saturn_Material_#50_0'].geometry}
          material={materials.Material_50}
          name={'Saturn_Material_#50_0'}
          receiveShadow
        />
      </group>
      <group
        name={'Saturn_Clouds'}
        ref={cloudsRef}
        rotation={[-Math.PI / 2, 0, -0.019]}
        scale={104}
      >
        <mesh
          castShadow
          geometry={nodes['Saturn_Clouds_Material_#62_0'].geometry}
          material={materials.Material_62}
          name={'Saturn_Clouds_Material_#62_0'}
          receiveShadow
        />
      </group>
      <group
        name={'Sphere_Mimas'}
        position={[-988.316, 0, -1127.884]}
        ref={mimasRef}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={300}
      >
        <mesh
          castShadow
          geometry={nodes['Sphere_Mimas_Material_#64_0'].geometry}
          material={materials.Material_50}
          name={'Sphere_Mimas_Material_#64_0'}
          receiveShadow
        />
      </group>
      <group
        name={'Sphere_Enceladus'}
        position={[1784.732, 0, 239.893]}
        ref={enceladusRef}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={300}
      >
        <mesh
          castShadow
          geometry={nodes['Sphere_Enceladus_Material_#64_0'].geometry}
          material={materials.Material_50}
          name={'Sphere_Enceladus_Material_#64_0'}
          receiveShadow
        />
      </group>
      <group
        name={'Sphere_Dione'}
        position={[-3011.732, 0, -1085.334]}
        ref={dioneRef}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={300}
      >
        <mesh
          castShadow
          geometry={nodes['Sphere_Dione_Material_#64_0'].geometry}
          material={materials.Material_50}
          name={'Sphere_Dione_Material_#64_0'}
          receiveShadow
        />
      </group>
      <group
        name={'Sphere_Rhea'}
        position={[-2969.675, 0, -3375.375]}
        ref={rheaRef}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={300}
      >
        <mesh
          castShadow
          geometry={nodes['Sphere_Rhea_Material_#64_0'].geometry}
          material={materials.Material_50}
          name={'Sphere_Rhea_Material_#64_0'}
          receiveShadow
        />
      </group>
      <group
        name={'Sphere_Tethys'}
        position={[396.367, 0, 2165.972]}
        ref={tethysRef}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={300}
      >
        <mesh
          castShadow
          geometry={nodes['Sphere_Tethys_Material_#64_0'].geometry}
          material={materials.Material_50}
          name={'Sphere_Tethys_Material_#64_0'}
          receiveShadow
        />
      </group>
    </group>
  )
})

useGLTF.preload('/models/saturn.glb')
