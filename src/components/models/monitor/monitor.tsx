'use client'
import React, { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'

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
    BG_MTL: THREE.MeshStandardMaterial
    TV_MTL: THREE.MeshStandardMaterial
    monter_MTL: THREE.MeshStandardMaterial
  }
  nodes: {
    BG_BG_MTL_0: THREE.Mesh
    pCube1_TV_MTL_0: THREE.Mesh
    pCube2_TV_MTL_0: THREE.Mesh
    pCube3_TV_MTL_0: THREE.Mesh
    pCube5_TV_MTL_0: THREE.Mesh
    pCube5_TV_MTL_0_1: THREE.Mesh
    pCube6_TV_MTL_0: THREE.Mesh
    pCube6_TV_MTL_0_1: THREE.Mesh
    pCube7_TV_MTL_0: THREE.Mesh
    pCube7_TV_MTL_0_1: THREE.Mesh
    pCube8_TV_MTL_0: THREE.Mesh
    pCube8_TV_MTL_0_1: THREE.Mesh
    pCube9_TV_MTL_0: THREE.Mesh
    pCube9_TV_MTL_0_1: THREE.Mesh
    pCube10_TV_MTL_0: THREE.Mesh
    pCube10_TV_MTL_0_1: THREE.Mesh
    pCube11_TV_MTL_0: THREE.Mesh
    pCube11_TV_MTL_0_1: THREE.Mesh
    pCube12_TV_MTL_0: THREE.Mesh
    pCube13_TV_MTL_0: THREE.Mesh
    pCube14_TV_MTL_0: THREE.Mesh
    pPlane1_monter_MTL_0: THREE.Mesh
  }
} & GLTF

export const Monitor = forwardRef<ElementRef<'group'>, Props>(
  ({ coverUrl, ...rest }: Props, ref) => {
    const { materials, nodes } = useGLTF('/models/monitor.glb') as unknown as GLTFResult
    const screen = useTexture(coverUrl)

    const [zoom, setZoom] = useState(false)

    return (
      <group ref={ref} {...rest} dispose={null} onClick={() => setZoom(!zoom)}>
        <group name={'Sketchfab_model'} rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name={'4e4541ff511d406b8a3dfc7144802368fbx'}
            position-z={zoom ? -0.05 : -0.012}
            rotation={[Math.PI / 2, 0, 0]}
            scale={zoom ? 0.015 : 0.01}
          >
            <group name={'TV_ALL'}>
              <group name={'BG'} position={[0, -2.5, 1.5]} scale={1.5}>
                <mesh
                  castShadow
                  geometry={nodes.BG_BG_MTL_0.geometry}
                  material={materials.BG_MTL}
                  name={'BG_BG_MTL_0'}
                  receiveShadow
                />
              </group>
              <group name={'monter'}>
                <group
                  name={'pPlane1'}
                  position={[0, 6, 0.05]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[15.7, 1, 8.7]}
                >
                  <mesh
                    castShadow
                    geometry={nodes.pPlane1_monter_MTL_0.geometry}
                    name={'pPlane1_monter_MTL_0'}
                    receiveShadow
                  >
                    <meshPhongMaterial map={screen} />
                  </mesh>
                </group>
              </group>
              <group name={'Cube'}>
                <group name={'pCube14'} position={[0, -1, 0]}>
                  <mesh
                    castShadow
                    geometry={nodes.pCube14_TV_MTL_0.geometry}
                    material={materials.TV_MTL}
                    name={'pCube14_TV_MTL_0'}
                    receiveShadow
                  />
                </group>
                <group name={'pCube13'} position={[0, -1, 0]}>
                  <mesh
                    castShadow
                    geometry={nodes.pCube13_TV_MTL_0.geometry}
                    material={materials.TV_MTL}
                    name={'pCube13_TV_MTL_0'}
                    receiveShadow
                  />
                </group>
                <group name={'pCube12'} position={[0, -1, 0]}>
                  <mesh
                    castShadow
                    geometry={nodes.pCube12_TV_MTL_0.geometry}
                    material={materials.TV_MTL}
                    name={'pCube12_TV_MTL_0'}
                    receiveShadow
                  />
                </group>
              </group>
              <group name={'TV'}>
                <group
                  name={'pCube3'}
                  position={[0, 5, 0]}
                  rotation={[0, 0, Math.PI]}
                  scale={[16, 9, 0.2]}
                >
                  <mesh
                    castShadow
                    geometry={nodes.pCube3_TV_MTL_0.geometry}
                    material={materials.TV_MTL}
                    name={'pCube3_TV_MTL_0'}
                    receiveShadow
                  />
                </group>
                <group name={'pCube2'} position={[0, 7, 0]} scale={[16, 9, 0.2]}>
                  <mesh
                    castShadow
                    geometry={nodes.pCube2_TV_MTL_0.geometry}
                    material={materials.TV_MTL}
                    name={'pCube2_TV_MTL_0'}
                    receiveShadow
                  />
                </group>
                <group name={'pCube1'} position={[0, 6, 0]} scale={[16, 9, 0.2]}>
                  <mesh
                    castShadow
                    geometry={nodes.pCube1_TV_MTL_0.geometry}
                    material={materials.TV_MTL}
                    name={'pCube1_TV_MTL_0'}
                    receiveShadow
                  />
                </group>
              </group>
              <group name={'Dec_Top'} position={[0, 12, 0]} rotation={[0, 0, Math.PI]}>
                <group name={'cube'}>
                  <group name={'pCube7'} position={[-7, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                    <mesh
                      castShadow
                      geometry={nodes.pCube7_TV_MTL_0.geometry}
                      material={materials.TV_MTL}
                      name={'pCube7_TV_MTL_0'}
                      receiveShadow
                    />
                  </group>
                  <group name={'pCube5'} position={[-9, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                    <mesh
                      castShadow
                      geometry={nodes.pCube5_TV_MTL_0.geometry}
                      material={materials.TV_MTL}
                      name={'pCube5_TV_MTL_0'}
                      receiveShadow
                    />
                  </group>
                  <group name={'pCube8'} position={[-6, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                    <mesh
                      castShadow
                      geometry={nodes.pCube8_TV_MTL_0.geometry}
                      material={materials.TV_MTL}
                      name={'pCube8_TV_MTL_0'}
                      receiveShadow
                    />
                  </group>
                  <group name={'pCube6'} position={[-8, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                    <mesh
                      castShadow
                      geometry={nodes.pCube6_TV_MTL_0.geometry}
                      material={materials.TV_MTL}
                      name={'pCube6_TV_MTL_0'}
                      receiveShadow
                    />
                  </group>
                </group>
                <group name={'cone'}>
                  <group name={'pCube9'} position={[-9, -0.53, 0]} scale={0}>
                    <mesh
                      castShadow
                      geometry={nodes.pCube9_TV_MTL_0.geometry}
                      material={materials.TV_MTL}
                      name={'pCube9_TV_MTL_0'}
                      receiveShadow
                    />
                  </group>
                  <group name={'pCube10'} position={[-8.381, -0.53, 0]} scale={0}>
                    <mesh
                      castShadow
                      geometry={nodes.pCube10_TV_MTL_0.geometry}
                      material={materials.TV_MTL}
                      name={'pCube10_TV_MTL_0'}
                      receiveShadow
                    />
                  </group>
                  <group name={'pCube11'} position={[-7.742, -0.53, 0]} scale={0}>
                    <mesh
                      castShadow
                      geometry={nodes.pCube11_TV_MTL_0.geometry}
                      material={materials.TV_MTL}
                      name={'pCube11_TV_MTL_0'}
                      receiveShadow
                    />
                  </group>
                </group>
              </group>
              <group name={'Dec_Down'}>
                <group name={'cube_1'}>
                  <group name={'pCube7_1'} position={[-7, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                    <mesh
                      castShadow
                      geometry={nodes.pCube7_TV_MTL_0_1.geometry}
                      material={materials.TV_MTL}
                      name={'pCube7_TV_MTL_0_1'}
                      receiveShadow
                    />
                  </group>
                  <group name={'pCube5_1'} position={[-9, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                    <mesh
                      castShadow
                      geometry={nodes.pCube5_TV_MTL_0_1.geometry}
                      material={materials.TV_MTL}
                      name={'pCube5_TV_MTL_0_1'}
                      receiveShadow
                    />
                  </group>

                  <group name={'pCube8_1'} position={[-6, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                    <mesh
                      castShadow
                      geometry={nodes.pCube8_TV_MTL_0_1.geometry}
                      material={materials.TV_MTL}
                      name={'pCube8_TV_MTL_0_1'}
                      receiveShadow
                    />
                  </group>
                  <group name={'pCube6_1'} position={[-8, 0.5, 0]} scale={[0.7, 0.7, 0.2]}>
                    <mesh
                      castShadow
                      geometry={nodes.pCube6_TV_MTL_0_1.geometry}
                      material={materials.TV_MTL}
                      name={'pCube6_TV_MTL_0_1'}
                      receiveShadow
                    />
                  </group>
                </group>
                <group name={'cone_1'}>
                  <group name={'pCube9_1'} position={[-9, -0.53, 0]} scale={0}>
                    <mesh
                      castShadow
                      geometry={nodes.pCube9_TV_MTL_0_1.geometry}
                      material={materials.TV_MTL}
                      name={'pCube9_TV_MTL_0_1'}
                      receiveShadow
                    />
                  </group>
                  <group name={'pCube10_1'} position={[-8.381, -0.53, 0]} scale={0}>
                    <mesh
                      castShadow
                      geometry={nodes.pCube10_TV_MTL_0_1.geometry}
                      material={materials.TV_MTL}
                      name={'pCube10_TV_MTL_0_1'}
                      receiveShadow
                    />
                  </group>
                  <group name={'pCube11_1'} position={[-7.742, -0.53, 0]} scale={0}>
                    <mesh
                      castShadow
                      geometry={nodes.pCube11_TV_MTL_0_1.geometry}
                      material={materials.TV_MTL}
                      name={'pCube11_TV_MTL_0_1'}
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
)

useGLTF.preload('/models/monitor.glb')
