import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls, useScroll, Text, Environment } from "@react-three/drei";
import Background from "./components/Background";
import { Depth, LayerMaterial, Noise } from 'lamina';
import { BackSide } from "three";

function App() {
  return (
    <Canvas
      shadows={'soft'}
      dpr={[1, 2]}
      eventPrefix="client"
      camera={{ position: [0, 0, 10], fov: 50 }}
      style={{ height: '100vh' }}
    >
      <NoiseBg />
      <ScrollControls horizontal={false} pages={10} damping={1}  >
        <Scene />
      </ScrollControls>
    </Canvas>
  );
}


function NoiseBg() {

  return (
    <mesh scale={100} position={[0, 0, -10]}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={BackSide}>
        <Depth colorB="gray" colorA="darkgray" alpha={1} mode="normal" near={130} far={200} origin={[100, 100, -100]} />
        <Noise mapping="local" type="white" scale={2000} colorA="white" colorB="skyblue" mode="subtract" alpha={0.2} />
      </LayerMaterial>
    </mesh>
  )

}

function SceneProps() {
  return (
    <Scroll>
      <Background ballCount={100} props={{ position: [0, 0, -65] }} />
      <HeroText />
    </Scroll>
  )

}

const extraboldFont = "/fonts/JetBrainsMono-ExtraBold.ttf";
const regularFont = "/fonts/JetbrainsMonoNL-Light.ttf";
const thinFont = "/fonts/JetbrainsMono-Thin.ttf";


function HeroText() {

  return (
    <group >
      <Text font={extraboldFont} anchorX={'center'} position={[0, 1, 0]} anchorY={"middle"}>
        Oğuz Batur Sarıöz
      </Text>
      <Text scale={.5} font={regularFont}>
        Fullstack Developer
      </Text>
    </group>

  )


}

function Scene(props: JSX.IntrinsicElements['group']) {
  return (
    <group {...props}>
      <SceneProps />
    </group>

  )
}


export default App;
