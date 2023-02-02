import { useRef } from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import { Scroll, ScrollControls, useScroll, ContactShadows, Text, BakeShadows, Html } from "@react-three/drei";
import Background from "./components/Background";
import { PcSetup } from './assets/Room';
import PcPage from "./components/PcPage";

function App() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      eventPrefix="client"
      camera={{ fov: 70, }}
      gl={{ logarithmicDepthBuffer: true, antialias: true }}
      style={{ height: '100vh' }}
    >
      <ContactShadows resolution={1024} frames={1} position={[0, -1.16, 0]} scale={10} blur={3} opacity={1} far={10} />
      <BakeShadows />
      <color attach="background" args={['#202020']} />
      <fog attach="fog" args={['#202020', 5, 50]} />
      <ambientLight intensity={.015} castShadow position={[0, -2, 0]} />
      <directionalLight />
      <ScrollControls horizontal={true} pages={10} damping={10}  >
        <Scene position={[0, -2, 0]} />
      </ScrollControls>
    </Canvas>
  );
}


function SceneProps() {
  const pcRef = useRef<any>();
  return (
    <Scroll>
      <Html >
        <PcPage />
      </Html>
      <Background ballCount={100} props={{ position: [0, 40, -25] }} />
    </Scroll>
  )

}

function Scene(props: JSX.IntrinsicElements['group']) {
  const scroll = useScroll();
  /*useFrame((state) => {
    const scrollRange = scroll.range(1 / 8, 1 / 4)
    state.camera.position.set(0, 0, scrollRange);
  })
  */
  return (
    <group {...props}>
      <SceneProps />
    </group>

  )
}


export default App;
