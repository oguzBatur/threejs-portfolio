import { useRef, useState } from "react";
import "./App.css";
import { Canvas, useFrame, Vector3 } from "@react-three/fiber";
import { Environment, Scroll, ScrollControls, useScroll, Text3D, ContactShadows, MeshReflectorMaterial, MeshTransmissionMaterial } from "@react-three/drei";
import Background from "./components/Background";
import { Euler, Vector } from "three";

function App() {
  const [perfSucks, degrade] = useState(false);
  return (
    <Canvas
      shadows
      dpr={[1, perfSucks ? 1.5 : 2]}
      eventPrefix="client"
      camera={{ fov: 70, }}
      gl={{ logarithmicDepthBuffer: true, antialias: false }}
      style={{ height: '100vh' }}
    >
      <fog attach={'fog'} args={['black', 10, 40]} />
      <color attach="background" args={['black']} />
      <Background ballCount={20} props={{ position: [-20, 10, -25], renderOrder: -1 }} />
      <ScrollControls horizontal={false} pages={5} damping={.1}  >
        <Scene position={[0, -2, 0]} />
      </ScrollControls>
    </Canvas>
  );
}


function SceneProps() {

  const [parentRot, setParentRot] = useState[-Math.PI / 4, 0, -Math.PI / 30]);
  let exampleRot = [-Math.PI / 4, 0, -Math.PI / 30];

  useFrame((state) => {
    exampleRot[0] = state.clock.getElapsedTime();
  })

  return (
    <Scroll>
      <spotLight intensity={1} position={[0, 10, -15]} angle={10} penumbra={1} />
      <group position={[10, 2, -10]} rotation={exampleRot}>
        <group position={[-10, 0, 0]}>
          <Text3D scale={[.4, .4, 1]}
            castShadow
            bevelEnabled
            letterSpacing={-0.03}
            height={0.25}
            bevelSize={0.01}
            bevelSegments={10}
            curveSegments={128}
            bevelThickness={0.01}
            font={'/fonts/JetBrains Mono ExtraBold_Regular.json'}>
            Merhaba, Benim Adım Batur.
            <MeshReflectorMaterial
              mirror={1}
              blur={[300, 300]}
              resolution={2048}
              mixBlur={1}
              mixStrength={80}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              metalness={0.8}
            />

            <ContactShadows />
          </Text3D>
          <Text3D scale={[.2, .2, 1]} position={[0, -.5, 0]} font={'/fonts/JetBrains Mono NL Light_Regular.json'}>
            Yazılım ile uğraşmak benim tutkum.
          </Text3D>
        </group>
        <mesh receiveShadow castShadow position={[0, 0, 0]} >
          <planeGeometry args={[30, 40]} />
          <MeshReflectorMaterial
            mirror={1}
            blur={[300, 30]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={1}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color="white"
            metalness={.9}
          />
        </mesh>

      </group>
    </Scroll>
  )

}

function Scene(props: JSX.IntrinsicElements['group']) {

  const scroll = useScroll();
  useFrame((state, delta) => {
    const offset = 1 - scroll.offset;
    const r2 = scroll.range(1 / 4, 1 / 4)
    const r3 = scroll.visible(4 / 5, 1 / 5)
    state.camera.position.set(0, 0, r2);
  })


  return (
    <group {...props}>
      <SceneProps />
    </group>

  )




}



export default App;
