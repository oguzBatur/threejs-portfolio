import { useRef } from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { Scroll, ScrollControls, useScroll, ContactShadows, Text, BakeShadows } from "@react-three/drei";
import Background from "./components/Background";
import { PcSetup } from './assets/Room';

function App() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      eventPrefix="client"
      camera={{ fov: 70, }}
      gl={{ logarithmicDepthBuffer: true, antialias: false }}
      style={{ height: '100vh' }}
    >
      <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={10} blur={3} opacity={1} far={10} />
      <BakeShadows />
      <color attach="background" args={['#202020']} />
      <fog attach="fog" args={['#202020', 5, 50]} />
      <ambientLight intensity={.015} castShadow position={[0, -2, 0]} />
      <directionalLight />
      <ScrollControls horizontal={false} pages={10} damping={.6}  >
        <Scene position={[0, -2, 0]} />
        <Background ballCount={100} props={{ position: [0, 40, -25] }} />
      </ScrollControls>
    </Canvas>
  );
}


function SceneProps() {
  const pcRef = useRef<any>();


  return (
    <Scroll>
      <group ref={pcRef} castShadow scale={2} position={[0, -2, -20]}>
        <Text scale={.4}
          position={[0, 4, -2]}
          castShadow
          letterSpacing={-0.03}
          font={'/fonts/JetBrains Mono ExtraBold_Regular.json'}>
          Merhaba, Benim Adım Batur.
        </Text>
        <Text scale={.25} position={[0, 3.5, -2]} font={'/fonts/JetBrains Mono NL Light_Regular.json'}>
          Yazılım ile uğraşmak benim tutkum.
        </Text>
        <PcSetup />
        <mesh position={[0, -10, -8]}>
          <boxGeometry args={[20, 20, 20]} />
          <meshPhongMaterial />
        </mesh>
      </group>
    </Scroll>
  )

}

function Scene(props: JSX.IntrinsicElements['group']) {
  const scroll = useScroll();
  useFrame((state) => {
    const scrollRange = scroll.range(1 / 8, 1 / 4)
    state.camera.position.set(0, 0, scrollRange);
  })

  return (
    <group {...props}>
      <SceneProps />
    </group>

  )
}


export default App;
