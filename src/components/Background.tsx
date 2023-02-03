import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import { Depth, Fresnel, LayerMaterial, Noise } from "lamina";
import { randInt } from "three/src/math/MathUtils"
import { PcSetup } from "../assets/Room";

interface IBackground {

  props?: JSX.IntrinsicElements['group'];
  ballCount: number
}

function Background({ props, ballCount }: IBackground) {
  const mapBalls = () => {
    return Array.from({ length: ballCount }).map((_, i) => {
      let randX = randInt(-50, 50);
      let randY = randInt(-30, 30);
      let randZ = randInt(-15, -10);
      let randSize = randInt(1.5, 2)
      return (
        <BgItem key={`ball: ${i}`} scale={[randSize, randSize, randSize]} position={[randX, randY, randZ]} />
      )
    })
  }
  return (
    <group {...props}>
      {mapBalls()}
    </group>
  )
}





function BgItem(props: JSX.IntrinsicElements['mesh']) {
  const randDist = randInt(.4, .5);
  const randSpeed = randInt(.9, 1)
  const randRad = randInt(.7, 1);
  const randEmis = randInt(10, 100);

  return (
    <Float rotationIntensity={10} speed={.5} floatIntensity={40}>
      <mesh castShadow receiveShadow {...props} >
        {/* <LayerMaterial>
          <Noise mapping="local" type="simplex" scale={1000} colorA="#ffaf40" colorB="black" mode="overlay" />
          <Depth colorA={"#2032A5"} colorB={"#0F1C4D"} mode='normal' alpha={.5} near={0} far={2} origin={[1, 1, 1]} />
          <Depth colorA={"purple"} colorB={"#0F1C4D"} mode='add' near={3} far={2} origin={[1, 1, 1]} />
          <Fresnel mode="add" color={"#E7B473"} intensity={.3} power={2.5} bias={0.0} />
        </LayerMaterial> */}
        <PcSetup />
      </mesh>
    </Float>
  )


}


export default Background;
