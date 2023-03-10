/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 .\room.glb --types
*/

import * as THREE from 'three'
import { Float, MeshDistortMaterial, useGLTF, } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Color } from 'three'
type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh
    Cube_1: THREE.Mesh
    Cube001: THREE.Mesh
    Cube001_1: THREE.Mesh
    Cube001_2: THREE.Mesh
    KeyboardCable: THREE.Mesh
    Cube003: THREE.Mesh
    Cube003_1: THREE.Mesh
    Cube004: THREE.Mesh
    Cube004_1: THREE.Mesh
    MouseCable: THREE.Mesh
    Glass_Table: THREE.Mesh
    MousePad: THREE.Mesh
    Turkish_Resume: THREE.Mesh
    ['Oğuz_Batur_Sarıöz_Resume1-2']: THREE.Mesh
  }
  materials: {
    MonitorBase: THREE.MeshStandardMaterial
    MonitorScreen: THREE.MeshStandardMaterial
    KeyBaseMat: THREE.MeshStandardMaterial
    KeysMat: THREE.MeshPhysicalMaterial
    KeysUnderMat: THREE.MeshPhysicalMaterial
    Cable: THREE.MeshStandardMaterial
    MouseBaseMat: THREE.MeshStandardMaterial
    Glass: THREE.MeshPhysicalMaterial
    ['Oğuz_Batur Sarıöz_Resume1-1']: THREE.MeshStandardMaterial
    ['Oğuz_Batur Sarıöz_Resume1-2']: THREE.MeshStandardMaterial
  }
}

export function PcSetup(props: JSX.IntrinsicElements['group'], emissionColor: Color) {
  const { nodes, materials } = useGLTF('/room.glb') as GLTFResult
  return (
    <group  {...props} dispose={null}>
      <Float floatIntensity={40} rotationIntensity={40}>
        <group>
          <mesh material={materials.MonitorScreen} geometry={nodes.Cube.geometry} />
          <mesh material={materials.MonitorBase} geometry={nodes.Cube001.geometry} />
        </group>
      </Float>
    </group>
  )
}

useGLTF.preload('/room.glb')
