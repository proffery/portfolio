'use client'
import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type Props = {
  coverUrl: string
  position?: number[]
  scale?: number
} & ComponentPropsWithoutRef<'group'>

type GLTFResult = {
  materials: {
    UPIT1_Material: THREE.MeshStandardMaterial
    ['UPIT1_Material.001']: THREE.MeshStandardMaterial
    Upit1_Screen: THREE.MeshPhysicalMaterial
  }
  nodes: {
    GLTF_created_0_rootJoint: THREE.Bone
    Object_7: THREE.SkinnedMesh
    Object_9: THREE.SkinnedMesh
    Object_10: THREE.SkinnedMesh
    Object_14: THREE.Mesh
  }
} & GLTF

export const Screen = forwardRef<ElementRef<'group'>, Props>(
  ({ coverUrl, ...rest }: Props, ref) => {
    const { materials, nodes } = useGLTF('/models/screen.glb') as unknown as GLTFResult
    const screen = useTexture(coverUrl)

    return (
      <group position-x={-10} ref={ref} {...rest} dispose={null}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0.07, 0.011, 0.0]}>
            <primitive object={nodes.GLTF_created_0_rootJoint} />
            <skinnedMesh
              geometry={nodes.Object_7.geometry}
              material={materials.UPIT1_Material}
              skeleton={nodes.Object_7.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_9.geometry}
              material={materials.UPIT1_Material}
              skeleton={nodes.Object_9.skeleton}
            />
            <skinnedMesh
              geometry={nodes.Object_10.geometry}
              material={materials.Upit1_Screen}
              skeleton={nodes.Object_10.skeleton}
            >
              <meshStandardMaterial map={screen} />
            </skinnedMesh>
          </group>
          <mesh
            castShadow
            geometry={nodes.Object_14.geometry}
            material={materials['UPIT1_Material.001']}
            position={[0.29, 0.014, 0.003]}
            receiveShadow
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={0.01}
          />
        </group>
      </group>
    )
  }
)

useGLTF.preload('/models/screen.glb')
