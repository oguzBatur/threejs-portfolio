import { useRef, useState } from "react";
import "./App.css";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Scroll, ScrollControls, useScroll, ContactShadows, Text, Points, PointMaterial, Text3D, Float, Environment, BakeShadows } from "@react-three/drei";
import Background from "./components/Background";
import * as random from 'maath/random/dist/maath-random.cjs';
import { PcSetup } from './assets/Room';

function App() {
  const mouse = useRef<number[]>([0, 0]);
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
      <Background />
      <BakeShadows />
      <color attach="background" args={['#202020']} />
      <fog attach="fog" args={['#202020', 5, 50]} />
      <ambientLight intensity={.015} castShadow position={[0, -2, 0]} />
      <directionalLight />
      <ScrollControls horizontal={false} pages={2} damping={6}  >
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
          position={[0, 3.5, -2]}
          castShadow
          letterSpacing={-0.03}
          font={'/fonts/JetBrains Mono ExtraBold_Regular.json'}>
          Merhaba, Benim Adım Batur.
        </Text>
        <Text scale={.25} position={[0, 3, -2]} font={'/fonts/JetBrains Mono NL Light_Regular.json'}>
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
    const offset = 1 - scroll.offset;
    const r2 = scroll.range(1 / 8, 1 / 4)
    const r3 = scroll.visible(4 / 5, 1 / 5)
    state.camera.position.set(0, r2, r2);
  })

  return (
    <group {...props}>
      <SceneProps />
    </group>

  )
}

function Stars(props) {
  const ref = useRef<any>()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  )
}


export default App;
